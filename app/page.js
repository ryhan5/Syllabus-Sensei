"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";


export default function Home() {
  const router=useRouter();
  const {user,isLoaded}=useUser();
  useEffect(()=>{
    if(user)
    {
      router.push('/dashboard')
    }
    else{
      isLoaded&&router.push('/courses')
    }
  },[user])
  return (
    <Button variant="outline">Button</Button>
  );
}
