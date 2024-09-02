import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/Cartslice'

const CartItem = ({ Item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(Item.id));
    }

    return (
        <div className="flex items-center border-b py-4">
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0">
                <img src={Item.image} alt="" className="w-full h-full object-cover" />
            </div>
            {/* Details */}
            <div className="ml-4 flex-1">
                <p className="font-medium">{Item.title}</p>
                <p className="text-gray-600">$ {Item.price}</p>
            </div>
            {/* Delete Icon */}
            <MdDelete size={24} onClick={removeFromCart} className="text-red-600 cursor-pointer" />
        </div>
    )
}

export default CartItem
