"use client";
import { createContext, useState } from "react";

// Define the type for your initial context value
type PreloaderContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PreloaderContext = createContext<PreloaderContextType | null>(null);

function ContextProvider({ children }: any) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <PreloaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export default ContextProvider;
