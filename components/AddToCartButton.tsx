"use client";

import { addToCart } from "@/app/actions/actions";
import { Food } from "@/types/products";
import Swal from "sweetalert2";

interface AddToCartButtonProps {
  food: Food;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ food }) => {
  const handleAddToCart = () => {
    if (!food.available) {
      Swal.fire("Oops!", "This product is not available.", "error");
      return;
    }

    addToCart(food); // Add the product to the cart
    Swal.fire("Success!", `${food.name} has been added to your cart.`, "success");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex ml-auto h-[100%] text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
