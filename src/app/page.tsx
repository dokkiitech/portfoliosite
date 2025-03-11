import AnimatedLogo from "../components/AnimatedLogo"
import Link from "next/link"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="text-center">
                <AnimatedLogo />
                <nav className="mt-12">
                    <ul className="flex space-x-8 justify-center">
                        <li>
                            <Link
                                href="/about"
                                className="font-dot text-white text-lg hover:text-gray-300 transition-colors duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="font-dot text-white text-lg hover:text-gray-300 transition-colors duration-300"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="font-dot text-white text-lg hover:text-gray-300 transition-colors duration-300"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/appointment"
                                className="font-dot text-white text-lg sm:text-xl hover:text-gray-300 transition-colors duration-300"
                            >
                                Reserve
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    )
}

