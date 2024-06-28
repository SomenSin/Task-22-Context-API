import { Fragment, useCallback, useState, useContext, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Usercontext from "./Usercontext";
import { NavLink } from "react-router-dom";

export default function CartSummary() {
  let {
    totalPrice,
    setTotalPrice,
    initialProducts,
    setInitialProducts,
    updateQuantity,
    isPayment,
    setIsPayment,
  } = useContext(Usercontext);

  function countItems() {
    let count = 0;
    initialProducts.forEach((product) => {
      if (product.quantity > 0) {
        count = count + 1;
      }
    });
    return count;
  }

  return (
    <div className="ml-12 relative h-full w-72">
      <div className="absolute inset-0 bg-white shadow-xl overflow-y-auto">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
          </div>
          <ul role="list" className="mt-8 divide-y divide-gray-200">
            {initialProducts.map((product) =>
              product.quantity > 0 ? (
                <li key={product.id} className="py-4">
                  <div className="flex items-center">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-16 w-16 flex-shrink-0 object-cover object-center rounded-md border border-gray-200"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-base font-medium text-gray-900">
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">$ {product.price}</p>
                      </div>

                      <div className="flex justify-between">
                        <p className="mt-1 text-sm text-gray-500">Qty </p>
                        <button
                          onClick={() => {
                            setTotalPrice(totalPrice + product.price);
                            updateQuantity(product, "increment");
                          }}
                          className="text-green-500 text-lg hover:border-green-700 border"
                        >
                          +
                        </button>
                        <p className="py-2">{product.quantity}</p>
                        <button
                          onClick={() => {
                            setTotalPrice(totalPrice - product.price);
                            updateQuantity(product, "decrement");
                          }}
                          className="text-red-500 text-lg border hover:border-red-700"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="border-t border-gray-200 px-4 py-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$ {totalPrice}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <NavLink
              to= {isPayment ? "/" : ((countItems() > 0) ? "/payment" : "/")}
              onClick={() =>{isPayment ? setIsPayment(false) : null} }
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              {isPayment ? ((countItems() > 0) ?"Checkout":"Add Products to Cart" ): ((countItems() > 0) ?"Payment":"Cart is Empty")}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
