"use client";

import Link from "next/link";
import { useModal } from "./ModalProvider";

export default function CostumeModal() {
  const { closeModal } = useModal();

  return (
    <div className="max-w-[600px] rounded-xl bg-white p-2 md:p-4">
      <div className="flex flex-col gap-6">
       <Link
  href="/add-on-services/groom"
  className="w-full rounded-xl bg-[#5A1838] py-2 px-2 text-center text-white font-semibold text-sm sm:text-xl"
>
  Groom
</Link>

<Link
  href="/add-on-services/bride"
  className="w-full rounded-xl bg-[#5A1838] py-2 px-2 text-center text-white font-semibold text-sm sm:text-xl"
>
  Bride
</Link>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={closeModal}
          className="rounded-lg bg-[#ff8c1a] px-4 py-2 text-white font-semibold transition hover:bg-[#e57c14]"
        >
          Close
        </button>
      </div>
    </div>
  );
}