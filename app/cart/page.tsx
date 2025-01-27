"use client";
import { Food } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
    cardNumber: '',
  });

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you Sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    setShowModal(true);
  };

  const handlePlaceOrder = () => {
    if (
      !userDetails.name ||
      !userDetails.email ||
      !userDetails.address ||
      !userDetails.paymentMethod ||
      !userDetails.cardNumber
    ) {
      Swal.fire('Error', 'Please fill in all the fields', 'error');
      return;
    }

    Swal.fire('Success', 'Your order has been placed successfully!', 'success');
    setCartItems([]);
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4 m-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between max-sm:items-start max-sm:flex-col max-sm:gap-2 border-b py-4"
            >
              <div className="flex items-center w-[200px]">
                <Image
                  src={urlFor(item.image).url()}
                  width={100}
                  height={100}
                  alt={item.name}
                  className="w-16 h-16 rounded-md mr-4"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-4">{item.inventory}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <div className="flex items-center">
                <p className="font-semibold">${(item.price * item.inventory).toFixed(2)}</p>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-lg font-bold">Total: ${calculatedTotal().toFixed(2)}</h2>
            <button
              onClick={handleProceed}
              className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">Your cart is empty.</p>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[800px] flex">
            {/* Left Side: Order Summary */}
            <div className="w-1/2 border-r pr-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-center justify-between mb-4 border-b pb-2"
                  >
                    <Image
                      src={urlFor(item.image).url()}
                      width={50}
                      height={50}
                      alt={item.name}
                      className="w-12 h-12 rounded-md"
                    />
                    <span className="flex-1 ml-4">{item.name}</span>
                    <span>${(item.price * item.inventory).toFixed(2)}</span>
                  </li>
                ))}
                <li className="flex justify-between font-bold pt-2">
                  <span>Total:</span>
                  <span>${calculatedTotal().toFixed(2)}</span>
                </li>
              </ul>
            </div>

            {/* Right Side: User Details */}
            <div className="w-1/2 pl-4">
              <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
              <input
                type="text"
                placeholder="Name"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                className="w-full p-2 mb-2 border rounded  outline-none"
              />
              <textarea
                placeholder="Address"
                value={userDetails.address}
                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                className="w-full p-2 mb-2 border rounded  outline-none"
              ></textarea>

              <h2 className="text-xl font-bold mb-4">Payment Details</h2>
              <select
                value={userDetails.paymentMethod}
                onChange={(e) => setUserDetails({ ...userDetails, paymentMethod: e.target.value })}
                className="w-full p-2 mb-2 border rounded  outline-none"
              >
                <option value="">Select Payment Method</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
              <input
                type="text"
                placeholder="Card Number"
                value={userDetails.cardNumber}
                onChange={(e) => setUserDetails({ ...userDetails, cardNumber: e.target.value })}
                className="w-full p-2 mb-4 border rounded outline-none"
              />

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
