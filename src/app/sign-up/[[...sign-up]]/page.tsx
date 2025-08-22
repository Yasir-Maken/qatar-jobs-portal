"use client";

import { Briefcase } from "lucide-react";
import { SignUpForm } from "@/components/signup-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";

type Role = "job-seeker" | "employer";
type OAuthStrategy = "oauth_google" | "oauth_linkedin" | "oauth_facebook";

export default function LoginPage() {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  if (!isLoaded) {
    return (
      <div className="grid min-h-svh place-items-center">
        <p className="text-sm text-muted-foreground">Loading sign up…</p>
      </div>
    );
  }

  //Fixme: Verification is not working properly, need to debug
  // EMAIL SIGN UP
  const handleEmailSignUp = async (
    email: string,
    password: string,
    role: Role
  ) => {
    if (!signUp) return;
    setIsLoading(true);
    setError(null);

    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
        unsafeMetadata: { role },
      });

      console.log("Signup result:", result);
      console.log("Signup status:", result.status);
      console.log("email:", email);
      console.log("password:", password);

      // BUG
      if (result.status === "missing_requirements") {
        // Prepare email verification if required
        console.log("Preparing email verification");
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        setIsVerifying(true);
      } else if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || "An error occurred during sign up");
    } finally {
      setIsLoading(false);
    }
  };

  // PHONE SIGN UP
  const handlePhoneSignUp = async (phone: string, role: Role) => {
    if (!signUp) return;
    setIsLoading(true);
    setError(null);

    try {
      const result = await signUp.create({
        phoneNumber: phone,
        password: "defaultPassword123", // Placeholder, you can change this
        unsafeMetadata: { role },
      });

      if (result.status === "missing_requirements") {
        await result.preparePhoneNumberVerification({ strategy: "phone_code" });
        setIsVerifying(true);
      } else if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || "An error occurred during sign up");
    } finally {
      setIsLoading(false);
    }
  };

  // VERIFY EMAIL CODE
  const handleVerifyEmailCode = async (code: string) => {
    if (!signUp) return;
    setIsLoading(true);
    setError(null);

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        setError("Verification not complete. Double-check your code.");
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || "Invalid verification code");
    } finally {
      setIsLoading(false);
    }
  };

  // VERIFY PHONE CODE
  const handleVerifyPhoneCode = async (code: string) => {
    if (!signUp) return;
    setIsLoading(true);
    setError(null);

    try {
      const result = await signUp.attemptPhoneNumberVerification({ code });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        setError("Verification not complete. Double-check your code.");
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || "Invalid verification code");
    } finally {
      setIsLoading(false);
    }
  };

  // OAUTH SIGN UP
  // SOCIAL SIGN UP
  const handleSocialSignUp = async (strategy: OAuthStrategy, role: Role) => {
    if (!signUp) return;
    setIsLoading(true);
    setError(null);

    // Fixme: Usser accont didn't created in the clerk, need to debug
    try {
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/dashboard",
        redirectUrlComplete: "/dashboard",
        unsafeMetadata: { role },
      });
      // Clerk will redirect; no further action needed here.
    } catch (err: any) {
      setError(
        err?.errors?.[0]?.message || "An error occurred during social sign up"
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Briefcase className="size-4" />
            </div>
            Qatar Jobs Portal
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm
              onEmailSignUp={handleEmailSignUp}
              onPhoneSignUp={handlePhoneSignUp}
              onVerifyEmailCode={handleVerifyEmailCode}
              onVerifyPhoneCode={handleVerifyPhoneCode}
              onSocialSignUp={handleSocialSignUp}
              onBackFromVerify={() => setIsVerifying(false)}
              error={error}
              isLoading={isLoading}
              isVerifying={isVerifying}
            />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder-nks5q.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
