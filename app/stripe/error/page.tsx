import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ErrorStripe() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-10">
      <h1>Something went wrong</h1>
      <Button asChild className="mt-5">
        <Link href="/">GO back</Link>
      </Button>
    </div>
  );
}
