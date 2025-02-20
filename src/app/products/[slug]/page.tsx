import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { Github } from "lucide-react";

// `products.json` をローカルから読み込む
const filePath = path.join(process.cwd(), "public/products.json");
const productsData = JSON.parse(fs.readFileSync(filePath, "utf8"));

export async function generateStaticParams() {
    return productsData.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductDetail({ params }) {
    const product = productsData.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-8">
                <Link href="/products" className="font-dot text-blue-400 hover:text-blue-300 mb-4 inline-block">
                    ← 製品一覧に戻る
                </Link>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-dot mb-4">{product.name}</h1>
                    <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="mb-6 rounded"
                    />
                    <p className="text-xl font-jp mb-6">{product.description}</p>

                    <h2 className="text-2xl font-dot mb-4">特徴</h2>
                    <ul className="list-disc list-inside mb-6 font-jp">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-dot mb-4">使用技術</h2>
                    <div className="flex flex-wrap gap-2 font-jp mb-6">
                        {product.technologies.map((tech, index) => (
                            <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {product.githubUrl && (
                        <div className="mt-6">
                            <a
                                href={product.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-dot inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                <Github className="mr-2" />
                                GitHubで見る
                            </a>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}