import {  editProductPriceApi, deleteProductApi, getProductsApi, addProductApi } from "../../services/apiFacade";

import Product from "../../interfaces/Product";
import { useEffect, useState } from "react";

import '../../styling/product.css'
import AddProductDialog from "./AddProductDialog";
import EditPriceDialog from "./EditPriceDialog";

export default function ProductList() {
    const [products, setProducts] = useState<Array<Product>>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [addingProduct, setAddingProduct] = useState(false);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);


 useEffect(() => {
    getProductsApi()
      .then((res) => setProducts(res))
      .catch(() => setError("Error fetching products. Is the server running?"));
  }, []);

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setAddingProduct(false);
    setOpen(true);
  };

    const handleAddProductClick = () => {
    setEditingProduct(null);
    setAddingProduct(true);
    setOpen(true);
  };

  const handleSave = async (product: Product) => {
    try {
      let savedProduct: Product;
        if ("id" in product && product.id !== 0) {
            savedProduct = await editProductPriceApi(product);
            setProducts(products.map((p) => (p.id === savedProduct.id ? savedProduct : p)));
        } else {
            savedProduct = await addProductApi(product);
            setProducts([...products, savedProduct]);
 
        }
             setOpen(false);
      setError("");
    } catch (error) {
      console.error("Failed to save product:", error);
      setError("Failed to save product. Please try again.");
    }
  };


    const handleDeleteClick = async (id: number) => {
        const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
        );
        if (confirmDelete) {
        try {
            await deleteProductApi(id);
            setProducts(products.filter((product) => product.id !== id));
        } catch (error) {
            console.error("Failed to delete product:", error);
            setError("Failed to delete product.");
        }
        
        }
    };

 

  const productListItem = products.map((product, index) => (
 <div key={index} className="product-item">
            <img src={product.img} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price} kr</p>
            <div className="product-controls">
                <button className="product-button edit" onClick={ ()=> handleEditClick(product)}>Edit</button>
                <button className="product-button delete" onClick={() => handleDeleteClick(product.id || 0)}>Delete</button>
            </div>
        </div>
  ))

    return (
        <div className="product-list-container">
             <button className="add-product-button" onClick={handleAddProductClick}>Add Product</button>
            {error && <p className="error-message">{error}</p>}
            <div className="product-items-container">
                 {productListItem}
                
            </div>
        {editingProduct ? (
                <EditPriceDialog
                    open={open}
                    product={editingProduct}
                    onSave={(product: Product) => {
                        handleSave(product);
                        setOpen(false);
                    }}
                    onClose={() => setOpen(false)}
                />
            ) : (
                <AddProductDialog
                    open={open && addingProduct}
                    onSave={(newProduct: Product) => {
                        handleSave(newProduct);
                        setOpen(false);
                    }}
                    onClose={() => setOpen(false)}
                />
            )}
        </div>
    );
}
