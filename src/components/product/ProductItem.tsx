
import Product from "../../interfaces/Product"

export default function ProductItem({ product }: { product: Product }) {
    return (
        <div >
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    )
}