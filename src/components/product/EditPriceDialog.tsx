import { useState, useEffect } from 'react';
import Product from '../../interfaces/Product';

interface EditPriceModalProps {
    open: boolean;
    product: Product | null;
    onSave: (product: Product) => void;
    onClose: () => void;
}

export default function EditPriceDialog({
    open,
    product,
    onSave,
    onClose,
}: EditPriceModalProps) {
    const [editedProduct, setEditedProduct] = useState<Product | null>(null);

    useEffect(() => {
        setEditedProduct(product);
    }, [product]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (editedProduct) {
            setEditedProduct({ ...editedProduct, [name]: value });
        }
    };

    const handleSave = () => {
        if (editedProduct) {
            onSave(editedProduct);
        }
    };

    return (
        <dialog className="modal" open={open} onClose={onClose}>
            <div className="modal-content">
                <h2>Edit Price</h2>
                <div className="modal-input-group">
                <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                    value={editedProduct?.price || ""}
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
