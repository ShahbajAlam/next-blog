"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimateProvider({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{
                opacity: 0.5,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.15,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
