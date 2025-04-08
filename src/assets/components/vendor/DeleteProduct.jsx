import React, { useEffect, useState } from "react";
import axios from "axios";

export const DeleteProduct = () => {
    const [products, setProducts] = useState([]);

    // Fetch all products
    const fetchProducts = async () => {
        try {
            const res = await axios.get("/product/getAllProducts");
            setProducts(res.data.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Delete product by ID
    const deleteProduct = async (req, res) => {
        try {
            const deletedProduct = await productModel.findByIdAndDelete(req.params.productId);

            if (!deletedProduct) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json({
                message: "Product deleted successfully",
                data: deletedProduct,
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Delete Products</h1>
            {products && products.length > 0 ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {products.map((product) => (
                        <div
                            key={product._id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                padding: "15px",
                                width: "250px",
                            }}
                        >
                            {product.productImageURL1 && (
                                <img
                                    src={product.productImageURL1}
                                    alt={product.name}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "4px",
                                    }}
                                />
                            )}
                            <h3>{product.name}</h3>
                            <p>
                                <strong>Price:</strong> INR: {product.price}
                            </p>
                            <p>
                                <strong>Category:</strong>{" "}
                                {product.categoryId && product.categoryId.name
                                    ? product.categoryId.name
                                    : "N/A"}
                            </p>
                            <p>
                                <strong>Sub Category:</strong>{" "}
                                {product.subCategoryId &&
                                    product.subCategoryId.name
                                    ? product.subCategoryId.name
                                    : "N/A"}
                            </p>
                            <button
                                onClick={() => deleteProduct(product._id)}
                                style={{
                                    backgroundColor: "#dc3545",
                                    color: "#fff",
                                    border: "none",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default DeleteProduct;