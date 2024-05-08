import { getProductsApi } from "../../services/apiFacade";
import { API_URL } from "../../settings";
import Product from "../../interfaces/Product";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import '../../styling/product.css'


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
      <div className="product-list-container">
        <div className="product-items-container">
            {products.map((product: Product) => (
                <div key={product.id} className="product-item-wrapper">
                    <ProductItem product={product} />
                </div>
            ))}
        </div>
      </div>
    )
}