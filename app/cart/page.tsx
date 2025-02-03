"use client";
import { useCart } from "@/app/context/cartcontext";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

interface OrderDetails {
  userName: string;
  address: string;
  city: string;
  postalCode: string;
  paymentMethod: string;
  orderDate: string;
  orderTime: string;
}

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
  
  const { isSignedIn } = useAuth(); 
  const { user } = useUser(); 
  const router = useRouter();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false); 
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCheckout = () => {
    if (!isSignedIn) {
      router.push("/signin?redirectTo=/cart");
  
      return;
    }
    setShowCheckoutForm(true); 
  };

  const handleOrderPlacement = () => {
    const currentDate = new Date();
    const orderSummary: OrderDetails = {
      userName: user?.fullName ?? '',
      address,
      city,
      postalCode,
      paymentMethod,
      orderDate: currentDate.toLocaleDateString(),
      orderTime: currentDate.toLocaleTimeString(),
    };

    setOrderDetails(orderSummary);
    setShowCheckoutForm(false);
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

         {showCheckoutForm && (
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4 mt-6">
            <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
            <div className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Payment Method
                </label>
                <div className="mt-1 flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      checked={paymentMethod === "Cash on Delivery"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-green-500 border-gray-300"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="PayPal"
                      checked={paymentMethod === "PayPal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-green-500 border-gray-300"
                    />
                    <span>PayPal</span>
                  </label>
                </div>
              </div>
            </div>
            <button
              onClick={handleOrderPlacement}
              className="w-full py-2 bg-green-500 text-white rounded font-semibold hover:bg-green-700"
            >
              Place Order
            </button>
          </div>
        )}
        {orderDetails && (
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4 mt-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <p><strong>User Name:</strong> {orderDetails.userName}</p>
              <p><strong>Address:</strong> {orderDetails.address}</p>
              <p><strong>City:</strong> {orderDetails.city}</p>
              <p><strong>Postal Code:</strong> {orderDetails.postalCode}</p>
              <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
              <p><strong>Order Date:</strong> {orderDetails.orderDate}</p>
              <p><strong>Order Time:</strong> {orderDetails.orderTime}</p>
              <button
              onClick={() => router.push("/shipping")}
              className="w-full py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-700"
            >
              Proceed to Shipping
            </button>
            </div>
          </div>
        )}
      </div>
    <Footer />
    </>
  );
}

