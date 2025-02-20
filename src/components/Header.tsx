"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    // メニューが開いているときにスクロールを無効にする
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/products", label: "Products" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <>
            {/* ヘッダー（固定） */}
            <header className="fixed top-0 left-0 w-full bg-gray-900 p-4 shadow-md z-50">
                <nav className="container mx-auto flex justify-between items-center">
                    {/* ロゴ */}
                    <Link href="/" className="text-xl font-jp text-white hover:text-gray-300">
                        DOKKIITECH
                    </Link>

                    {/* PC メニュー */}
                    <ul className="hidden md:flex space-x-4">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="font-jp text-white hover:text-gray-300">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* ハンバーガーボタン（スマホ用） */}
                    <button className="md:hidden z-50 text-white" onClick={toggleMenu}>
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </nav>
            </header>

            {/* メニューがヘッダーの高さで隠れないよう調整 */}
            <div className="pt-16"></div>

            {/* モバイルメニュー（アニメーション付き） */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40 md:hidden"
                    >
                        <ul className="flex flex-col space-y-6 text-center">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="font-jp text-2xl text-white block py-2 hover:text-gray-300"
                                        onClick={toggleMenu}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}