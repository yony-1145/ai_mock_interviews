"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/client";

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link";
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"
import { signIn, signUp } from "@/lib/actions/auth.action";


const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up"
      ? z.string().min(3, { message: "Name must be at least 3 characters long" })
      : z.string().optional(),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 6 characters long" })
    .regex(/[0-9]/, "Password must contain at least one number"),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });

  function onError(errors: any) {
    const errorMessages = Object.values(errors)
      .map((error: any) => error?.message)
      .filter((msg) => !!msg);

    errorMessages.forEach((msg, index) => {
      setTimeout(() => {
        toast.error(msg);
      }, index * 500); // 0.5 seconds delay for eatch error message
    });
  }



  const isSignIn = type === "sign-in";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        const { name, email, password } = values;

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result?.success) {
          toast.error(result?.message);
          return;
        }

        toast.success('Account created successfully. Please sign in');
        router.push('sign-in');
      } else {
        const { email, password } = values;

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();

        if (!idToken) {
          toast.error('Sign in failed.');
          return;
        }

        await signIn({ email, idToken });

        toast.success('Sign in successfully.');
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  }

  // Google SignIn
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const idToken = await user.getIdToken();

      const signUpResult = await signUp({
        uid: user.uid,
        name: user.displayName || "No Name",
        email: user.email || "",
        password: "",
      });

      if (!signUpResult.success && signUpResult.message.includes("already exists")) {
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
    <div className="card-border md:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3>Practice job interview with AI</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onError)} className="w-full space-y-6 mt-4 form">
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
          </form>
        </Form>

        <Button onClick={handleGoogleSignIn} className="btn-google">
          Continue with Google
        </Button>

        <p className="text-center">
          {isSignIn ? 'No account yet?' : 'Have an account already?'}
          <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
            {!isSignIn ? "Sign in" : 'Sign up'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;