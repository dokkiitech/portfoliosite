"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

// JSON データを fetch で取得
async function fetchProducts() {
    const res = await fetch("/products.json");
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch(console.error);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-8">
                <h1 className="text-3xl font-jp mb-8">My Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="border border-gray-700 rounded-lg p-4">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={300}
                                height={200}
                                className="mb-4 rounded"
                            />
                            <h2 className="text-xl font-jp mb-2">{product.name}</h2>
                            <p className="text-gray-300 font-jp mb-4">{product.description}</p>
                            <Link href={`/products/${product.slug}`} className="font-jp text-blue-400 hover:text-blue-300">
                                詳細を見る
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}