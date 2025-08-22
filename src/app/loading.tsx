import { Loader2, Briefcase } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="inline-flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Qatar Jobs Portal</span>
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Loading...</h2>
          <p className="text-muted-foreground">
            Please wait a moment while we prepare everything for you.
          </p>
        </div>
      </div>
    </div>
  );
}
