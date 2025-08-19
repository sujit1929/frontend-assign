"use client";
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Image from 'next/image';
export default function UserCartItem() {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-6"> Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item?.imageUrl || ""}
                                        alt={item?.name}
                                        width={64}
                                        height={64}
                                        className="object-cover rounded"
                                        unoptimized
                                    />
                                    <div>
                                        <h2 className="font-semibold">{item.name}</h2>
                                        <p className="text-sm text-gray-500">
                                            {item.color}, {item.size}
                                        </p>
                                        <p className="text-blue-600 font-bold">
                                            ${item.price} × {item.quantity}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-between items-center border-t pt-4">
                        <h2 className="text-xl font-bold">
                            Total: $
                            {cartItems
                                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                                .toFixed(2)}
                        </h2>
                        <button
                            onClick={clearCart}
                            className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}