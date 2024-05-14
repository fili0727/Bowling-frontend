import { useState } from 'react';
import Product from '../../interfaces/Product';

interface AddProductDialogProps {
    open: boolean;
    onSave: (product: Product) => void;
    onClose: () => void;
}

const initialProductState: Product = {
    img: '',
    name: '',
    price: 0,
};

export default function AddProductDialog({
    open,
    onSave,
    onClose,
}: AddProductDialogProps) {
    const [newProduct, setNewProduct] = useState<Product>(initialProductState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSave = () => {
        onSave(newProduct);
        setNewProduct(initialProductState); // Reset form after save
    };

    return (
        <dialog className="modal" open={open} onClose={onClose}>
            <div className="modal-content">
                <h2>Create Product</h2>
                <div className="modal-input-group">
                    <label htmlFor="img" className="modal-label">Image URL:</label>
                    <input
                        type="text"
                        name="img"
                        onChange={handleChange}
                        value={newProduct.img}
                        className="modal-input"
                    />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="name" className="modal-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={newProduct.name}
                        className="modal-input"
                    />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="price" className="modal-label">Price:</label>
                    <input
                        type="number"
                        name="price"
                        onChange={handleChange}
                        value={newProduct.price}
                        className="modal-input"
                    />
                </div>
                <div className="modal-actions">
                    <button onClick={handleSave} className="modal-button edit">Save</button>
                    <button onClick={onClose} className="modal-button cancel">Cancel</button>
                </div>
            </div>
        </dialog>
    );
}
