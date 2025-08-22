"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  value: string;
  onChange: (val: string) => void;
  length?: number;
};

export const OtpInput: React.FC<Props> = ({ value, onChange, length = 6 }) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const val = e.target.value.replace(/\D/g, "");

    if (!val) return;

    const newValue = value.split("");
    newValue[index] = val[0];
    onChange(newValue.join("").slice(0, length));

    // Move to next input
    const nextInput = inputsRef.current[index + 1];
    if (nextInput) nextInput.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newValue = value.split("");
      if (value[index]) {
        // delete current char
        newValue[index] = "";
        onChange(newValue.join(""));
      } else {
        // move left and delete previous char (polish)
        const prevIndex = index - 1;
        const prevInput = inputsRef.current[prevIndex];
        if (prevInput) {
          const arr = value.split("");
          if (arr[prevIndex]) {
            arr[prevIndex] = "";
            onChange(arr.join(""));
          }
          prevInput.focus();
        }
      }
    }

    if (e.key === "ArrowLeft") {
      const prevInput = inputsRef.current[index - 1];
      if (prevInput) prevInput.focus();
    }

    if (e.key === "ArrowRight") {
      const nextInput = inputsRef.current[index + 1];
      if (nextInput) nextInput.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData
      .getData("Text")
      .replace(/\D/g, "")
      .slice(0, length);
    if (pasted.length === length) {
      onChange(pasted);
      inputsRef.current[length - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length }).map((_, i) => {
        const char = value[i] || "";
        const isFocused = value.length === i;

        return (
          <div
            key={i}
            className="relative w-12 h-12 rounded-md bg-white ring-1 ring-inset ring-border data-[focused=true]:ring-ring"
            data-focused={isFocused}
          >
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={char}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onPaste={handlePaste}
              ref={function (el) {
                inputsRef.current[i] = el;
              }}
              className="peer absolute inset-0 w-full h-full text-center text-xl font-medium text-foreground bg-transparent outline-none"
            />
            <AnimatePresence>
              {char && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.75 }}
                  className="absolute inset-0 flex items-center justify-center text-foreground pointer-events-none"
                >
                  {char}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
