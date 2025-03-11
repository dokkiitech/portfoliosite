import Header from "../../components/Header"
import { Calendar } from "lucide-react"

export default function Reserve() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center p-8">
                <div className="max-w-2xl text-center">
                    <h1 className="text-3xl font-dot mb-8">Appointment</h1>
                    <p className="text-xl font-jp mb-10">お打ち合わせのご予約は<br/>こちらからお願いします。<br/>お急ぎの場合は各種SNSよりご連絡ください。</p>
                    <a
                        href="https://calendar.app.google/36ZkSsxR12yCumsC7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-black font-dot py-3 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300"
                    >
                        <Calendar className="mr-2" />
                        予約
                    </a>
                </div>
            </main>
        </div>
    )
}

