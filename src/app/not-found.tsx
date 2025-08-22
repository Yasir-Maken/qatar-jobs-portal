import { Button } from "@/components/ui/button";
import { Briefcase, Home } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Qatar Jobs Portal</span>
        </Link>

        {/* 404 Content */}
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            We couldn't find the page you were looking for. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Button */}
        <Button asChild className="h-11">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
