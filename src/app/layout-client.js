'use client';

import { LanguageProvider } from "../context/LanguageContext";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </SessionProvider>
  );
}
