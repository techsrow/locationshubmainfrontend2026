"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import CommercialShootModal from "./CommercialShootModal";

interface CommercialShootContextType {
  openCommercialShoot: () => void;
  closeCommercialShoot: () => void;
}

const CommercialShootContext =
  createContext<CommercialShootContextType | null>(
    null
  );

export function CommercialShootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openCommercialShoot = () =>
    setOpen(true);

  const closeCommercialShoot = () =>
    setOpen(false);

  return (
    <CommercialShootContext.Provider
      value={{
        openCommercialShoot,
        closeCommercialShoot,
      }}
    >
      {children}

      <CommercialShootModal
        open={open}
        onClose={closeCommercialShoot}
      />
    </CommercialShootContext.Provider>
  );
}

export function useCommercialShoot() {
  const context = useContext(
    CommercialShootContext
  );

  if (!context) {
    throw new Error(
      "useCommercialShoot must be used inside CommercialShootProvider"
    );
  }

  return context;
}