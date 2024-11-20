"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeInOut" }}
        className="relative w-[500px] h-[500px] mix-blend-lighten"
      >
        <div>
          <Image
            src="/ritesh.webp"
            priority
            alt="kumarritesh"
            quality={100}
            fill
            className="object-cover rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
