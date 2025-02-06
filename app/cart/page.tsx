"use client";
import { Food } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';
import AuthGuard from '@/components/AuthGuard';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

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

  const applyCoupon = () => {
    if (coupon === 'FOODTUCK10') {
      setDiscount(0.1);
      Swal.fire('Success!', 'Coupon applied successfully! 10% discount added.', 'success');
    } else {
      setDiscount(0);
      Swal.fire('Invalid Coupon', 'Please enter a valid coupon code.', 'error');
    }
  };

  const finalTotal = () => {
    return (calculatedTotal() * (1 - discount)).toFixed(2);
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: 'Are you sure you want to proceed to checkout?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("appliedDiscount", discount.toString()); // Store discount for checkout
        Swal.fire("Success!", "Your order has been placed successfully", "success");
        router.push('/checkout');
        setCartItems([]);
      }
    });
  };

  return (
    <AuthGuard>
      <div className="container mx-auto p-4 m-4 bg-white">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg p-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b py-4">
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
                  <button onClick={() => handleDecrement(item._id)} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">-</button>
                  <span className="px-4">{item.inventory}</span>
                  <button onClick={() => handleIncrement(item._id)} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">+</button>
                </div>
                <div className="flex items-center">
                  <p className="font-semibold">${(item.price * item.inventory).toFixed(2)}</p>
                  <button onClick={() => handleRemove(item._id)} className="ml-4 text-red-500 hover:underline">Remove</button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter coupon code" className="border p-2 rounded-md mr-2" />
              <button onClick={applyCoupon} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Apply Coupon</button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-lg font-bold">Total: ${finalTotal()}</h2>
              <button onClick={handleProceed} className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">Proceed to Checkout</button>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">Your cart is empty.</p>
          </div>
        )}
      </div>
    </AuthGuard>
  );
};

export default CartPage;