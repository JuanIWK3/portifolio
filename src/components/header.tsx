"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./theme/toggle";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between p-4 sticky top-0 bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(10,10,10,0.9)] z-10">
      <ModeToggle />
    </header>
  );
};
