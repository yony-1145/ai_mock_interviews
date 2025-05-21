import { getCurrentUser } from './auth.action';
import { auth, db } from '@/app/firebase/admin';
import { cookies } from 'next/headers';

jest.mock('@/app/firebase/admin', () => ({
  auth: {
    verifySessionCookie: jest.fn(),
  },
  db: {
    collection: jest.fn(),
  },
}));

jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

describe('getCurrentUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns null if no session cookie', async () => {
    (cookies as jest.Mock).mockResolvedValue({
      get: () => undefined,
    });

    const result = await getCurrentUser();
    expect(result).toBeNull();
  });

  it('returns user data if session cookie is valid and user exists', async () => {
    (cookies as jest.Mock).mockResolvedValue({
      get: () => ({ value: 'valid_session' }),
    });

    (auth.verifySessionCookie as jest.Mock).mockResolvedValue({ uid: 'user123' });

    const userDoc = {
      exists: true,
      id: 'user123',
      data: () => ({ name: 'John', email: 'john@example.com' }),
    };

    (db.collection as jest.Mock).mockReturnValue({
      doc: () => ({
        get: jest.fn().mockResolvedValue(userDoc),
      }),
    });

    const result = await getCurrentUser();

    expect(result).toEqual({
      id: 'user123',
      name: 'John',
      email: 'john@example.com',
    });
  });

  it('returns null if user does not exist', async () => {
    (cookies as jest.Mock).mockResolvedValue({
      get: () => ({ value: 'valid_session' }),
    });

    (auth.verifySessionCookie as jest.Mock).mockResolvedValue({ uid: 'user123' });

    const userDoc = {
      exists: false,
    };

    (db.collection as jest.Mock).mockReturnValue({
      doc: () => ({
        get: jest.fn().mockResolvedValue(userDoc),
      }),
    });

    const result = await getCurrentUser();
    expect(result).toBeNull();
  });

  it('returns null if verification throws error', async () => {
    (cookies as jest.Mock).mockResolvedValue({
      get: () => ({ value: 'session' }),
    });

    (auth.verifySessionCookie as jest.Mock).mockRejectedValue(new Error('Invalid cookie'));

    const result = await getCurrentUser();
    expect(result).toBeNull();
  });
});
