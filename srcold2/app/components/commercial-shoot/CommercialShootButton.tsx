"use client";

import { useCommercialShoot } from "./CommercialShootProvider";

export default function CommercialShootButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openCommercialShoot } =
    useCommercialShoot();

  return (
    <button
      type="button"
      className={className}
      onClick={openCommercialShoot}
    >
      {children || "Get Quote"}
    </button>
  );
}