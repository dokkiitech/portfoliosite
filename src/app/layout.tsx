import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "../components/Header" ;

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "MyPortfolio",
    description: "木戸亮輔のポートフォリオサイトです。Productの他にも各種SNSや取り組みなどの情報も掲載しています。",
    icons: {
        icon: "/favicon.ico",
    },
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
        <body className={`${inter.className} bg-black text-white`}>{children}</body>
        </html>
    )
}

