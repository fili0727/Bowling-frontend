
import Product from "../../interfaces/Product"

interface ProductItemProps {
    product: Product;
    onEdit: () => void;
    onDelete: () => void;
}

function ProductItem({ product, onEdit, onDelete }: ProductItemProps) {
    return (
        <div className="product-item">
            <img src={product.img} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price} kr</p>
            <div className="product-controls">
                <button className="product-button edit" onClick={onEdit}>Edit</button>
                <button className="product-button delete" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}

export default ProductItem;
