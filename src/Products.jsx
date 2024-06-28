import { useContext } from "react";
import Usercontext from "./Usercontext";

export default function Products() {
  let {
    totalPrice,
    setTotalPrice,
    initialProducts,
    setInitialProducts,
    updateQuantity,
    isPayment,
    setIsPayment,
  } = useContext(Usercontext);
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {initialProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <a href={product.href}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                $ {product.price}
              </p>
            </a>
            <button
              onClick={() => {
                setTotalPrice(totalPrice + product.price);
                updateQuantity(product, "increment");
              }}
              className="mt-auto border-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
