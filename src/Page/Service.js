import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import img from "../Img/Img";

const Service = () => {
  const product = [
    { id: 1, price: "€ 1.099", img: "#121415", imgAlt: "Apple iPhone 16 Pro Black Titanium 128GB", rating: 5, reviews: 210 },
    { id: 2, price: "€ 1.199", img: "#333739", imgAlt: "Apple iPhone 16 Pro Natural Titanium 256GB", discount: "Up to 15% off", rating: 4.7, reviews: 210 },
    { id: 3, img: "#585f63", imgAlt: "Apple iPhone 16 Pro White Titanium 128GB", discount: "Up to 15% off", rating: 4, reviews: 210, price: "€ 1.099" },
    { id: 4, img: "#776353", imgAlt: "Apple iPhone 16 Pro Desert Titanium 256GB", discount: "Up to 30% off", rating: 4.7, reviews: 180, price: "€ 1,199" },
    { id: 5, img: "iPhone16blue", imgAlt: "Apple iPhone 16 Blue 256GB", discount: "Up to 25% off", rating: 4.8, reviews: 50, price: "€ 920" },
    { id: 6, img: "iPhone16green", imgAlt: "Apple iPhone 16 Light Green 256GB", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€ 920" },
    { id: 7, img: "iPhone15rosa", imgAlt: "Apple iPhone 14 Light Pink Limited Edition 128GB", discount: "Up to 40% off", rating: 4.3, reviews: 500, price: "€705" },
    { id: 8, img: "iPhone14amarillo", imgAlt: "Apple iPhone 14 Yellow Limited Edition 128GB", discount: "Up to 40% off", rating: 4.3, reviews: 500, price: "€705" },
    { id: 9, img: "watchS10", imgAlt: "Apple Watch S10", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€ 459" },
    { id: 10, img: "watchultra2black", imgAlt: "Apple Watch Ultra2 Black", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€ 909" },
    { id: 11, img: "watchYellow", imgAlt: "Apple Watch SE", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€ 259" },
    { id: 12, img: "watchPink", imgAlt: "Apple Watch Hermès Series 10", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€ 1.409" },
  ];

    const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddToCart = (product) => {
    setSelectedProducts((prevSelected) => [...prevSelected, product]);
  };

  const [visibleCards, setVisibleCards] = useState(8);
  const [sortBy, setSortBy] = useState("default");

  const showMoreCards = () => {
    setVisibleCards((prev) => prev + 12);
  };

  // Limpiar los precios de los productos para trabajar correctamente con ellos
  const cleanPrice = (price) => {
    // Eliminamos el símbolo de euro y las comas
    const cleaned = price.replace(/[^\d.-]/g, '');
    return parseFloat(cleaned);
  };

  // Filtrado de productos
  const filteredProducts = () => {
    if (sortBy === "price-asc") {
      return [...product].sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
    } else if (sortBy === "price-desc") {
      return [...product].sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
    } else if (sortBy === "rating") {
      return [...product].sort((a, b) => b.rating - a.rating);
    } else {
      return product;
    }
  };


  return (
    <section className="bg-black py-8 antialiased dark:bg-black md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Products</a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Apple</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">iPhone</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setSortBy("default")} className="text-sm text-gray-500 ">All</button>
            <button onClick={() => setSortBy("price-asc")} className="text-sm text-gray-500 ">Price Ascending</button>
            <button onClick={() => setSortBy("price-desc")} className="text-sm text-gray-500 ">Price Descending</button>
            <button onClick={() => setSortBy("rating")} className="text-sm text-gray-500 ">Rating</button>
          </div>
        </div>

        {/* Mostrar las tarjetas */}
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts().slice(0, visibleCards).map((product) => (
            <div key={product.id} className="rounded-lg border-2 border-gray-300 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border-gray-600 dark:bg-gray-800">
              <div className="h-56 w-full">
                <a href="#">
                  <img src={img[product.img]} alt={product.imgAlt} className="w-full h-60 object-cover" />
                </a>
              </div>

              <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-red-600">
                    {product.discount}
                  </span>
                </div>

                <Link to="/Checkout" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                  {product.imgAlt}
                </Link>

                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg key={index} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0=" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{product.rating}</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({product.reviews})</p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    {product.price}
                  </p>
                  <Link 
                    to={{ 
                      pathname: "/Checkout", 
                      state: { products: selectedProducts }  // Pasamos solo los productos seleccionados
                    }}
                  >
                    <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más productos */}
        {visibleCards < product.length && (
          <div className="w-full text-center">
            <button onClick={showMoreCards} className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Service;
