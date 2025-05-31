'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Logged out successfully');
        router.push('/sign-in');
      } else {
        toast.error('Logout failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('Logout error');
    }
  };

  return (
    <Button onClick={handleLogout} className="btn-logout">
      Sign out
    </Button>
  );
}