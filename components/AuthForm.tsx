"use client"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from "react";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { signUp, signIn } from "@/lib/actions/auth.action"
import { Form } from "@/components/ui/form"
import { FormField } from "./FormFields";
import { useRouter } from "next/navigation";
import Logo from "./shared/Logo"

type FormType = "signup" | "sign-in";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'signup' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3)
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter()
  const formSchema = authFormSchema(type)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      if (type === 'signup') {
        const { name, email, password } = values
        //register a new user in firebase auth not firestore i.e. firebase database
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email,
          password
        })
        if (!result?.success) {
          toast.error(result?.message)
          return
        }
        toast.success("Account created successfully")
        router.push('/signin')
      } else {
        const { email, password } = values
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        //create a token for the user
        const idToken = await userCredentials.user.getIdToken()
        if (!idToken) {
          toast.error("Failed to sign in")
          return
        }
        await signIn({
          email,
          idToken
        })
        toast.success("Logged in successfully")
        router.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
      toast.error(`There was an error: ${error}`);
    }

  }
  
  const isSignIn = type === "sign-in"
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="w-full max-w-lg bg-slate-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-slate-700">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-row gap-2 justify-center items-center">
            {/* <Image src="./logo.svg" alt="logo" height={32} width={38} />
            <h2 className="text-2xl font-bold text-white">PrepAI</h2> */}
            <Logo />
          </div>
          <h3 className="text-xl text-slate-300">Practice job interview with AI</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form flex flex-col items-center">
              {!isSignIn && (
                <FormField control={form.control} name="name" label="Name" placeholder="Your name"></FormField>
              )}
              <FormField control={form.control} name="email" label="Email" placeholder="Your email address" type="email"></FormField>
              <FormField control={form.control} name="password" label="Password" placeholder="Enter your password" type="password"></FormField>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all w-full">
                {isSignIn ? 'Sign in' : 'Create an Account'}
              </Button>
            </form>
          </Form>
          <p className="text-center text-slate-300">
            {isSignIn ? 'No account yet?' : 'Have an account already?'}
            <Link href={isSignIn ? '/signup' : '/signin'} className="font-bold text-blue-400 ml-1 hover:text-blue-300 transition-colors">
              {isSignIn ? 'Sign up' : 'Sign in'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default AuthForm;
