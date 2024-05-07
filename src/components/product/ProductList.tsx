import { getProductsApi } from "../../services/apiFacade";
import { API_URL } from "../../settings";
import Product from "../../interfaces/Product";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList(){
    const [products, setProducts] = useState<Product[]>([])

    async function fetchProducts(){
        console.log(API_URL);
        const products = await getProductsApi();
        setProducts(products)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div>
            <h1>Product List</h1>
            <p>Here you can see all products</p>
            <div>
                {products.map((product: Product) => (
                    <div key={product.id}>
                       <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}