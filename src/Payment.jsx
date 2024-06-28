import React, { useContext } from "react";
import CartSummary from "./CartSummary";
import Usercontext from "./Usercontext";

export default function Payment() {
    let { totalPrice,setTotalPrice,initialProducts,setInitialProducts,updateQuantity,isPayment,setIsPayment } = useContext(Usercontext)
    setIsPayment(true)
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-5">
            {/* Products Section */}
            <div className="sm:col-span-3">
              <div className="border-2 m-5 w-[40%] pl-10">
                <form>
                  <div>
                    <div className="font-bold">Card Number : </div>
                    <input
                      className="border-2 rounded-xl"
                      type="number"
                      placeholder="card number"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Expiration Date</div>
                    <input className="border-2 rounded-xl" type="Date" />
                  </div>
                  <div>
                    <div className="font-bold">Enter CVV</div>
                    <input
                      className="border-2 rounded-xl"
                      type="number"
                      placeholder="CVV"
                    />
                  </div>
                  <br />
                  <button className="bg-green-500 p-2 rounded-xl text-white font-bold w-40">
                    Pay
                  </button>
                </form>
              </div>
            </div>

            {/* Cart Summary Section */}
            <div className="sm:col-span-2">
              {/* Include your cart summary component here */}

              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
