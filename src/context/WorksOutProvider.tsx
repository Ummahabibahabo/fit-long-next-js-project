"use client";
import { LibraryTypes } from "@/components/types";
import { createContext, useState } from "react";

interface WorksOutContextType {
  plan: LibraryTypes[];
  setPlan: React.Dispatch<React.SetStateAction<LibraryTypes[]>>;
  saved: LibraryTypes[];
  setSaved: React.Dispatch<React.SetStateAction<LibraryTypes[]>>;
}

export const WorksOutContext = createContext<WorksOutContextType>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const WorksOutProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<LibraryTypes[]>([]);
  const [saved, setSaved] = useState<LibraryTypes[]>([]);

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };

  return (
    <WorksOutContext.Provider value={sharedData}>
      {children}
    </WorksOutContext.Provider>
  );
};

export default WorksOutProvider;
