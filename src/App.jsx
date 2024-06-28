import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Nav";
import Usercontext from "./Usercontext";
import CartSummary from "./CartSummary";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: 48,
    quantity: 0,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: 35,
    quantity: 0,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: 89,
    quantity: 0,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: 35,
    quantity: 0,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];



function App() {
  let [total, setTotal] = useState(0);
  let [initialProducts, setInitialProducts] = useState(products);
  let [isPayment, setIsPayment] = useState(false);

  const updateQuantity = (product, action) => {
    const updatedProducts = [...products]; // Create a copy of the products array
    const productIndex = updatedProducts.findIndex((item) => item.id === product.id);
  
    if (productIndex !== -1) {
      if (action === 'increment') {
        updatedProducts[productIndex].quantity += 1;
          setTotalPrice(totalPrice + product.price);
      } else if (action === 'decrement' && updatedProducts[productIndex].quantity > 0) {
          updatedProducts[productIndex].quantity -= 1;
            setTotalPrice(totalPrice - product.price);
        // Remove item if quantity reaches 0
        if (updatedProducts[productIndex].quantity === 0) {
          updatedProducts.splice(productIndex, 1); // Remove the item from the array
        }
      }
      // Update the state with the modified products array
      setInitialProducts(updatedProducts);
    }
  };

  return (
    <>
      <Usercontext.Provider
        value={{
          totalPrice: total,
          setTotalPrice: setTotal,
          initialProducts,
          setInitialProducts,
          updateQuantity,
          isPayment,
          setIsPayment
        }}
      >
        <Navbar />
        <Outlet />
        <CartSummary />
      </Usercontext.Provider>
    </>
  );
}

export default App;
