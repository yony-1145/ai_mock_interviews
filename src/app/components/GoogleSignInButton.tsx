"use client";

import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "sonner";
import { signUp, signIn } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";

export default function GoogleSignInButton() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const idToken = await user.getIdToken();

      // Firestoreにユーザーがいるか確認し、いなければ登録
      const signUpResult = await signUp({
        uid: user.uid,
        name: user.displayName || "No Name",
        email: user.email || "",
        password: "", // Google認証ではパスワードは不要
      });

      if (!signUpResult.success && signUpResult.message.includes("already exists")) {
        // すでに登録されている場合は signIn のみ実行
        await signIn({ email: user.email || "", idToken });
      } else if (signUpResult.success) {
        await signIn({ email: user.email || "", idToken });
      } else {
        toast.error(signUpResult.message);
        return;
      }

      toast.success("Signed in with Google");
      router.push("/");

    } catch (error: any) {
      console.error(error);
      toast.error("Google sign-in failed");
    }
  };

  return (
    <Button onClick={handleGoogleSignIn} className="w-full mt-4">
      Continue with Google
    </Button>
  );
}
