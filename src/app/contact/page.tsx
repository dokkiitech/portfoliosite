import { Twitter, Instagram } from "lucide-react"
import Link from "next/link"
import Header from "../../components/Header"

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-jp mb-8">Contact Me</h1>
                    <div className="flex justify-center space-x-8">
                        <Link href="https://x.com/dokkiitech" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-8 h-8 hover:text-gray-300" />
                        </Link>
                        <Link href="https://instagram.com/dokkiitech" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-8 h-8 hover:text-gray-300" />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

