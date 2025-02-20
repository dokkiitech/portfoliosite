"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedLogo() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null // または、ローディングプレースホルダーを表示
    }

    return (
        <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.h1
                className="text-5xl font-thin tracking-widest text-white"
                style={{
                    textShadow: "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.2)",
                }}
            >
                DOKKIITECH
            </motion.h1>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                animate={{
                    opacity: [0, 0.5, 0],
                    x: ["-100%", "100%", "100%"],
                }}
                transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 3,
                    ease: "linear",
                }}
            />
        </motion.div>
    )
}

