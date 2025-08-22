// src/context/LanguageContext.tsx

"use client"; // This directive is needed for client-side components in Next.js

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Language } from "@/lib/i18n"; // Import the Language type from your i18n file

// Define the shape of our context.
// `lang` is the current language ('en' or 'ar').
// `setLang` is a function to change the language.
interface LanguageContextType {
  lang: Language;
  setLang: (language: Language) => void;
  // We can also add a helper for checking if it's Arabic, or even the toggle function
  isArabic: boolean;
  toggleLanguage: () => void;
}

// Create the context with a default (but never used) value.
// We use `undefined` and then check for it in `useLanguage`.
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Define props for our LanguageProvider component.
// It will wrap other components, so it needs `children`.
interface LanguageProviderProps {
  children: ReactNode;
}

// This component will provide the language context to all its children.
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Initialize the language state.
  // We try to get it from localStorage first, otherwise default to 'en'.
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      // Check if we are in the browser environment
      return (localStorage.getItem("lang") as Language) || "en";
    }
    return "en"; // Default to 'en' on the server
  });

  // Whenever the language changes, save it to localStorage.
  // This makes the language preference "sticky" across browser sessions.
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  // Helper boolean for convenience.
  const isArabic = lang === "ar";

  // Function to toggle between English and Arabic.
  const toggleLanguage = () => {
    setLangState((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  // The value provided by the context.
  // Any component wrapped by LanguageProvider can access these values.
  const contextValue: LanguageContextType = {
    lang,
    setLang: setLangState, // Provide the actual state setter
    isArabic,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to easily consume the language context.
// This makes it cleaner to use in other components.
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // This error helps catch bugs if useLanguage is used outside LanguageProvider.
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
