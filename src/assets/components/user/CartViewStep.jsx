import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem, clearCart } from '../../../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

export const CartViewStep = ({ onNext }) => {

    const navigate = useNavigate();
    const handleProceed = () => {
        navigate('/user/shippingstep');
    };
    const { control, handleSubmit, getValues } = useForm();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);

    const handleUpdate = () => {
        const values = getValues();
        Object.keys(values).forEach((id) => {
            const quantity = parseInt(values[id], 10);
            if (quantity > 0) {
                dispatch(updateCartItem({ id, quantity }));
            }
        });

        alert('Cart updated!');
    };

    const handleRemove = (id) => dispatch(removeFromCart(id));
    const handleClearCart = () => dispatch(clearCart());

    const grandTotal = cartItems.reduce((acc, product) => {
        const qty = product.quantity || 1;
        const price = product.offerPrice ?? product.price;
        return acc + price * qty;
    }, 0);

    if (cartItems.length === 0) return <p className="mt-5 text-center fs-5">Your cart is empty.</p>;

    return (
        <form>
            <h2>Step 1: Review Cart</h2>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Product</th>
                        <th>Details</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((product) => {
                        const qty = product.quantity || 1;
                        const price = product.offerPrice ?? product.price;
                        return (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.productImageURL} alt={product.name} width="60" height="60" />
                                </td>
                                <td>{product.name}</td>
                                <td>
                                    <Controller
                                        name={product.id}
                                        control={control}
                                        defaultValue={qty}
                                        render={({ field }) => (
                                            <input type="number" min="1" {...field} className="form-control" />
                                        )}
                                    />
                                </td>
                                <td>${price}</td>
                                <td>${price * qty}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleRemove(product.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center">
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>

            {/* Separate action buttons */}
            <div className="text-end mt-3">
                <button type="button" className="btn btn-primary me-2" onClick={handleUpdate}>
                    Update Cart
                </button>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleProceed}
                    disabled={cartItems.length === 0}
                >
                    Proceed to Shipping
                </button>
            </div>
        </form>
    );
};
