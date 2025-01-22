"use client";
import { useCart } from "@/app/context/cartcontext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";


export default function ShoppingCart() {
  const {
    cart,
    subtotal,
    tax,
    total,
    increment,
    decrement,
    removeItem,
  } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/shipping"); // Redirect to the shipping page
  };
  return (
    <>
    <Header />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image
                  src={item.imageUrl}
                  alt={typeof item.name === 'string' ? item.name : 'Product Image'}
                  width={348}
                  height={348}
                  className="object-cover rounded w-24 h-24 md:w-32 md:h-32"
                />
                <div className="flex flex-col space-y-2">
                  <span className="font-medium">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decrement(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="px-2 py-1 bg-green-500 text-white rounded"
                    >
                      +
                    </button>
                    <span className="font-semibold">
                      ${item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-2 py-1 bg-gray-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

    
          <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md space-y-4">
            <div className="font-medium flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="font-medium flex justify-between">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="font-bold text-lg flex justify-between">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-2 bg-black text-white rounded font-semibold hover:bg-slate-400"
            >
               Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

