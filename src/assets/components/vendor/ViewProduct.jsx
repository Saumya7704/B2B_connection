import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./ViewProduct.css"; // Optional: Add custom styles here



export const ViewProduct = () => {
    const [products, setProducts] = useState([]);

    // Fetch all products
    const fetchProducts = async () => {
        try {
            const res = await axios.get("/product/getAllProducts");
            console.log(res.data.data);
            setProducts(res.data.data);

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>View Products</h1>
            {products && products.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {products.map((product) => (
                        <div
                            key={product._id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '15px',
                                width: '250px',
                            }}
                        >
                            {product.productImageURL1 && (
                                <img
                                    src={product.productImageURL1}
                                    alt={product.name}
                                    style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                                />
                            )}
                            <h3>{product.name}</h3>
                            <p>
                                <strong>Price:</strong> INR: {product.price}
                            </p>
                            {/* Assuming that product includes category information */}
                            <p>
                                <strong>Category:</strong>{' '}
                                {product.categoryId && product.categoryId.name ? product.categoryId.name : 'N/A'}
                            </p>
                            <p>
                                <strong>Sub Category:</strong>{' '}
                                {product.subCategoryId && product.subCategoryId.name ? product.subCategoryId.name : 'N/A'}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    )
}

export default ViewProduct