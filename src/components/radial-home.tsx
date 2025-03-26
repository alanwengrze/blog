"use client"
import { motion } from "framer-motion";
export function RadialHome(){
  return(
  <>
    <motion.div
    className="-z-50 size-[400px] md:size-[600px] lg:size-[800px] absolute top-0 right-0 rounded-full bg-radial from-orange-400 from-10% via-red-500 via-35% to-70% to-blue-950 blur-2xl  "
    >
    </motion.div>
  </>
  )
}