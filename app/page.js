"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/courses');
      }
    }
  }, [user, isLoaded, router]);

  return (
    <div>
      <UserButton afterSwitchSessionUrl="/sign-in" />
    </div>
  );
}