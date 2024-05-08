
import Product from "../../interfaces/Product"

export default function ProductItem({ product }: { product: Product }) {
    return (
      <div className="product-item">
        <img src={product.img} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price} kr</p>
        <div className="product-controls">
        <div className="quantity-controls">
            <button className="product-button increment">add to order</button>
            <button className="product-button decrement">remove from order</button>
        </div>
        <div className="edit-controls">
            <button className="product-button edit">Edit</button>
            <button className="product-button delete">Delete</button>
        </div>
    </div>
      </div>
    )
}