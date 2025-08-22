// src/components/LanguageSwitcher.tsx

"use client"; // Client-side component for interactivity

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext"; // Import our custom hook
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button component

// This component provides a button to toggle between English and Arabic.
const LanguageSwitcher: React.FC = () => {
  // Use our custom hook to get the current language and the toggle function.
  const { lang, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage} // Call the global toggle function when clicked
      variant="ghost" // Use a ghost variant for a cleaner look
      size="sm"
      className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 rounded-md transition-colors duration-200"
    >
      {/* Display the current language, so the user knows what language they are switching from */}
      {lang === "en" ? "العربية" : "English"}
    </Button>
  );
};

export default LanguageSwitcher;
