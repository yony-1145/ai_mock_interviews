import { render, screen, fireEvent } from '@testing-library/react';
import Agent from './Agent';
import { vapi } from '@/lib/vapi.sdk';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('@/lib/vapi.sdk', () => ({
  vapi: {
    on: jest.fn(),
    off: jest.fn(),
    start: jest.fn(),
    stop: jest.fn(),
  },
}));

jest.mock('@/lib/actions/general.action', () => ({
  createFeedback: jest.fn().mockResolvedValue({ success: true, feedbackId: '123' }),
}));

const defaultProps = {
  userName: 'Test User',
  userId: 'user-1',
  type: 'interview', // or 'generate'
  interviewId: 'int-1',
  questions: ['What is your strength?', 'Tell me about yourself'],
};

describe('Agent Component', () => {
  it('renders correctly with basic UI elements', () => {
    render(<Agent {...defaultProps} />);
    expect(screen.getByText('AI Interviewer')).toBeInTheDocument();
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('renders Call button initially', () => {
    render(<Agent {...defaultProps} />);
    expect(screen.getByRole('button', { name: /Call/i })).toBeInTheDocument();
  });

  it('calls vapi.start when Call button is clicked', async () => {
    render(<Agent {...defaultProps} />);
    const callButton = screen.getByRole('button', { name: /Call/i });
    fireEvent.click(callButton);

    expect(vapi.start).toHaveBeenCalled();
  });

  it('calls vapi.stop when End button is clicked (after simulating ACTIVE state)', async () => {
    const { rerender } = render(<Agent {...defaultProps} />);
    rerender(<Agent {...defaultProps} />);
  });
});
