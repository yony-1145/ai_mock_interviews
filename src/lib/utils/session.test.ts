import { setSessionCookies } from './session';
import { auth } from '@/app/firebase/admin';
import { cookies } from 'next/headers';

jest.mock('@/app/firebase/admin', () => ({
  auth: {
    createSessionCookie: jest.fn(),
  },
}));

jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

describe('setSessionCookies', () => {
  it('sets session cookie with correct options', async () => {
    const setMock = jest.fn();
    (cookies as jest.Mock).mockResolvedValue({
      set: setMock,
    });

    (auth.createSessionCookie as jest.Mock).mockResolvedValue('mocked_session_cookie');

    await setSessionCookies('dummy_id_token');

    expect(auth.createSessionCookie).toHaveBeenCalledWith('dummy_id_token', {
      expiresIn: 1000 * 60 * 60 * 24 * 7,
    });

    expect(setMock).toHaveBeenCalledWith(
      'session',
      'mocked_session_cookie',
      expect.objectContaining({
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      })
    );
  });
});
