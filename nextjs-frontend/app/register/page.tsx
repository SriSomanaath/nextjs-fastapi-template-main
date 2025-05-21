"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { register } from "@/components/actions/register-action";
import { useActionState } from "react";
import { SubmitButton } from "@/components/ui/submitButton";
import Link from "next/link";
import { FieldError, FormError } from "@/components/ui/FormError";
import SignInButtonWithProvider from "../login/components/SignInButtonWithProvider";

export default function Page() {
  const [state, dispatch] = useActionState(register, undefined);
  return (
    <main>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">Launch Pad</div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and helped me deliver stunning designs to my
                clients faster than ever before.&rdquo;
              </p>
              <footer className="text-sm">Ruhith G</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex h-full lg:p-8">
          <div className="flex w-full items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <form action={dispatch}>
              <Card className="w-full max-w-sm rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Sign Up
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    Enter your email and password below to create your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 p-6">
                  <div className="grid gap-3">
                    <Label
                      htmlFor="email"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      className="border-gray-300 dark:border-gray-600"
                    />
                    <FieldError state={state} field="email" />
                  </div>
                  <div className="grid gap-3">
                    <Label
                      htmlFor="password"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="border-gray-300 dark:border-gray-600"
                    />
                    <FieldError state={state} field="password" />
                  </div>
                  <SubmitButton text="Sign Up" />
                  <SignInButtonWithProvider provider="google" />
                  <SignInButtonWithProvider provider="github" />
                  <FormError state={state} />
                  <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    <Link
                      href="/login"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                    >
                      Back to login
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
