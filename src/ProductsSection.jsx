import CartSummary from "./CartSummary";
import { useState,useContext } from "react";
import Usercontext from "./Usercontext";
import Payment from "./Payment";
import Products from "./Products";

export default function ProductsSection() {


  return (
    
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-5">
            {/* Products Section */}
            <div className="sm:col-span-3">
              <Products /> 
            </div>

            {/* Cart Summary Section */}
            <div className="sm:col-span-2">
              {/* Include your cart summary component here */}

              <CartSummary />
            </div>
          </div>
        </div>
      </div>
  );
}
