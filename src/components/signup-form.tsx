"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignUp } from "@clerk/nextjs";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { ClerkCaptcha } from "@clerk/nextjs";

import {
  Mail,
  Chrome,
  Linkedin,
  Facebook,
  AlertCircle,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { OtpInput } from "./verification-form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { error } from "console";

type Role = "job-seeker" | "employer";
type OAuthStrategy = "oauth_google" | "oauth_linkedin" | "oauth_facebook";

type SignUpFormProps = {
  // handlers provided by the page (the “chef”)
  onEmailSignUp: (email: string, password: string, role: Role) => Promise<void>;
  onPhoneSignUp: (phone: string, role: Role) => Promise<void>;
  onVerifyEmailCode: (code: string) => Promise<void>;
  onVerifyPhoneCode: (code: string) => Promise<void>;
  onSocialSignUp: (strategy: OAuthStrategy, role: Role) => Promise<void>;
  onBackFromVerify: () => void;

  // state controlled by the sign up page
  error: string | null;
  isLoading: boolean;
  isVerifying: boolean;

  className?: string;
};

const FormSchema = z.object({
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

export function SignUpForm({
  onEmailSignUp,
  onPhoneSignUp,
  onVerifyEmailCode,
  onVerifyPhoneCode,
  onSocialSignUp,
  onBackFromVerify,
  error,
  isLoading,
  isVerifying,
  className,
}: SignUpFormProps) {
  // const [usePhone, setUsePhone] = useState(false);

  // local UI state only
  const [userRole, setUserRole] = useState<Role>("job-seeker");
  const [usePhone, setUsePhone] = useState(false); // false=email, true=phone
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");

  const toggleMethod = () => setUsePhone((v) => !v);

  return (
    <div className="border-none">
      <div className="space-y-3">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Join Qatar's premier job platform.
          </p>
        </div>

        <div className="space-y-3">
          {/* Error Alert */}
          <AnimatePresence>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </AnimatePresence>

          {/* Role Selection */}
          {!isVerifying && (
            <div className="space-y-3">
              <Label className="text-sm font-medium">I am a:</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant={userRole === "job-seeker" ? "default" : "outline"}
                  className="text-lg px-8 py-6"
                  onClick={() => setUserRole("job-seeker")}
                >
                  <Search className="w-6 h-6" />
                  <span className="text-sm">Job Seeker</span>
                </Button>
                <Button
                  type="button"
                  variant={userRole === "employer" ? "default" : "outline"}
                  className="text-lg px-8 py-6"
                  onClick={() => setUserRole("employer")}
                >
                  <Users className="w-6 h-6" />
                  <span className="text-sm">Employer</span>
                </Button>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="text-xs">
                  {userRole === "job-seeker"
                    ? "Find your dream job"
                    : "Hire top talent"}
                </Badge>
              </div>
            </div>
          )}

          {/* Social sign up */}
          {!isVerifying && (
            <div className="grid grid-cols-3 gap-4">
              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent cursor-pointer"
                onClick={() => onSocialSignUp("oauth_google", userRole)}
                disabled={isLoading}
                aria-label="Sign up with Google"
              >
                <Chrome className="w-4 h-4 mr-2" />
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent cursor-pointer"
                onClick={() => onSocialSignUp("oauth_linkedin", userRole)}
                disabled={isLoading}
                aria-label="Sign up with LinkedIn"
              >
                <Linkedin className="w-4 h-4 mr-2" />
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent cursor-pointer"
                onClick={() => onSocialSignUp("oauth_facebook", userRole)}
                disabled={isLoading}
                aria-label="Sign up with Facebook"
              >
                <Facebook className="w-4 h-4 mr-2" />
              </Button>
            </div>
          )}

          {/* Separator */}
          {!isVerifying && (
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or continue with
                </span>
              </div>
            </div>
          )}

          {/* Toggle email/phone */}
          {!isVerifying && (
            <div className="flex space-x-2">
              <button
                onClick={toggleMethod}
                type="button"
                className="text-sm text-blue-500 hover:underline cursor-pointer"
              >
                {usePhone
                  ? "Sign up with Email instead"
                  : "Sign up with Phone instead"}
              </button>
            </div>
          )}

          {/* Email form */}
          {!usePhone && !isVerifying && (
            <form
              className={cn("flex flex-col gap-6", className)}
              onSubmit={(e) => {
                e.preventDefault();
                onEmailSignUp(emailAddress, password, userRole);
              }}
            >
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                  />
                </div>

                {/* <ClerkCaptcha id="clerk-captcha" /> */}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing Up..." : "Sign Up with Email"}
                </Button>
              </div>
            </form>
          )}

          {/* Phone form */}
          {usePhone && !isVerifying && (
            <form
              className={cn("flex flex-col gap-6", className)}
              onSubmit={(e) => {
                e.preventDefault();
                onPhoneSignUp(phoneNumber, userRole);
              }}
            >
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="phone">Phone Number</Label>
                  <PhoneInput
                    id="phone"
                    placeholder="Enter a phone number"
                    international
                    defaultCountry="QA"
                    value={phoneNumber}
                    onChange={(val) => setPhoneNumber(val || "")}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing Up..." : "Sign Up with Phone"}
                </Button>
              </div>
            </form>
          )}

          {/* Verification (OTP) */}
          {isVerifying && (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">
                  Verify your {usePhone ? "phone" : "email"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  We sent a verification code to{" "}
                  {usePhone ? phoneNumber : emailAddress}
                </p>
              </div>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (usePhone) {
                    onVerifyPhoneCode(code);
                  } else {
                    onVerifyEmailCode(code);
                  }
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="code">Verification Code</Label>
                  <OtpInput value={code} onChange={setCode} />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Verifying..." : "Verify & Create Account"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={onBackFromVerify}
                >
                  Back
                </Button>
              </form>
            </div>
          )}

          {/* Footer */}
          {!isVerifying && (
            <div className="text-center text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </div>
          )}

          {!isVerifying && (
            <div className="text-center text-sm">
              Already have account?{" "}
              <Link href="/signin" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
