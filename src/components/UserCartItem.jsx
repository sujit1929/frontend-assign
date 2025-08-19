"use client";
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Image from 'next/image';

export default function UserCartItem() {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div className="max-w-5xl mx-auto py-12 px-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800"> Your Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">Add items to your cart</p>
                </div>
            ) : (
                <>
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white border rounded-2xl p-5 shadow-md hover:shadow-lg transition"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 relative">
                                        <Image
                                            src={item?.imageUrl || ""}
                                            alt={item?.name}
                                            fill
                                            className="object-cover rounded-xl border"
                                            unoptimized
                                        />
                                    </div>

                                    <div>
                                        <h2 className="font-semibold text-lg text-gray-800">
                                            {item.name}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {item.color} • {item.size}
                                        </p>
                                        <p className="text-blue-600 font-semibold mt-1">
                                            ${item.price} × {item.quantity}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Footer */}
                    <div className="mt-10 bg-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center shadow-inner">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Total:{" "}
                            <span className="text-blue-600">
                                $
                                {cartItems
                                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </h2>
                        <div className="mt-4 sm:mt-0 flex gap-4">
                            <button
                                onClick={clearCart}
                                className="bg-gray-700 text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition"
                            >
                                Clear Cart
                            </button>
                            <button
                                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
