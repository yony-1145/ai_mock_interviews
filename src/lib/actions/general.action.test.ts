import { generateObject } from "ai";
import { createFeedback, getInterviewsByUserId } from "./general.action";
import { db } from '@/app/firebase/admin';

jest.mock('@/app/firebase/admin', () => ({
  db: {
    collection: jest.fn(),
  },
}));

jest.mock('ai', () => ({
  generateObject: jest.fn(),
}));

describe('getInterviewsByUserId', () => {
  it('returns interviews array sorted by createdAt descending', async () => {
    const userId = 'user123';

    const getMock = jest.fn().mockResolvedValue({
      docs: [
        {
          id: 'doc1',
          data: () => ({ userId, createdAt: 2, title: 'Interview 2' }),
        },
        {
          id: 'doc2',
          data: () => ({ userId, createdAt: 1, title: 'Interview 1' }),
        },
      ],
    });

    const orderByMock = jest.fn(() => ({ get: getMock }));
    const whereMock = jest.fn(() => ({ orderBy: orderByMock }));
    (db.collection as jest.Mock).mockReturnValue({ where: whereMock });

    const result = await getInterviewsByUserId(userId);

    expect(db.collection).toHaveBeenCalledWith('interviews');
    expect(whereMock).toHaveBeenCalledWith('userId', '==', userId);
    expect(orderByMock).toHaveBeenCalledWith('createdAt', 'desc');
    expect(getMock).toHaveBeenCalled();

    expect(result).toEqual([
      { id: 'doc1', userId, createdAt: 2, title: 'Interview 2' },
      { id: 'doc2', userId, createdAt: 1, title: 'Interview 1' },
    ]);
  });

  it('returns empty array if no interviews found', async () => {
    const userId = 'user123';

    const getMock = jest.fn().mockResolvedValue({ docs: [] });
    const orderByMock = jest.fn(() => ({ get: getMock }));
    const whereMock = jest.fn(() => ({ orderBy: orderByMock }));
    (db.collection as jest.Mock).mockReturnValue({ where: whereMock });

    const result = await getInterviewsByUserId(userId);
    expect(result).toEqual([]);
  });
});

describe('createFeedback', () => {
  const params = {
    interviewId: 'interview123',
    userId: 'user456',
    transcript: [
      { role: 'interviewer', content: 'What is your greatest strength?' },
      { role: 'candidate', content: 'Problem-solving and adaptability.' },
    ],
  };

  it('returns success with feedbackId if everything succeeds', async () => {
    const mockFeedbackId = 'feedback123';
    const mockAdd = jest.fn().mockResolvedValue({ id: mockFeedbackId });
    (db.collection as jest.Mock).mockReturnValue({ add: mockAdd });

    (generateObject as jest.Mock).mockResolvedValue({
      object: {
        totalScore: 88,
        categoryScores: {},
        strengths: ['Clear answers'],
        areasForImprovement: ['More details needed'],
        finalAssessment: 'Solid candidate',
      },
    });

    const result = await createFeedback(params);

    expect(generateObject).toHaveBeenCalled();
    expect(db.collection).toHaveBeenCalledWith('feedback');
    expect(mockAdd).toHaveBeenCalled();
    expect(result).toEqual({ success: true, feedbackId: mockFeedbackId });
  });

  it('returns success: false if generateObject throws error', async () => {
    (generateObject as jest.Mock).mockRejectedValue(new Error('AI error'));

    const result = await createFeedback(params);

    expect(result).toEqual({ success: false });
  });

  it('returns success: false if db.collection().add throws error', async () => {
    (generateObject as jest.Mock).mockResolvedValue({
      object: {
        totalScore: 75,
        categoryScores: {},
        strengths: ['Good confidence'],
        areasForImprovement: ['Technical depth'],
        finalAssessment: 'Average performance',
      },
    });

    const mockAdd = jest.fn().mockRejectedValue(new Error('Firestore error'));
    (db.collection as jest.Mock).mockReturnValue({ add: mockAdd });

    const result = await createFeedback(params);

    expect(result).toEqual({ success: false });
  });
});

