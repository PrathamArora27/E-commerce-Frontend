import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const [TotalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, current) => acc + current.price, 0));
    }, [cart]);

    return (
        <div className="max-w-4xl mx-auto p-4">
            {
                cart.length > 0
                    ? (
                        <>
                            <div className="grid grid-cols-1 gap-4 mb-8">
                                {
                                    cart.map((cartItem) => (
                                        <CartItem key={cartItem.id} Item={cartItem} />
                                    ))
                                }
                            </div>
                            <div className="bg-gray-100 p-4 rounded-md shadow-md">
                                <p className="text-xl font-bold">Your Cart Summary</p>
                                <p>Total items: {cart.length}</p>
                                <div className="mt-4">
                                    <p className="text-lg font-semibold">Total amount: $ {TotalAmount}</p>
                                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Checkout</button>
                                </div>
                            </div>
                        </>
                    )
                    : (<div className="text-center text-lg">No items in cart</div>)
            }
        </div>
    )
}

export default Cart
 