import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../Img/Img";

  const Service = () => {
    // Definimos los productos (puedes agregar más productos en este array)
    const product = [
      { id: 1, img: "#121415", imgAlt: "Apple iPhone 16 Pro Black Titanium 128GB", discount: "Up to 15% off", rating: 4, reviews: 210, price: "€1.099" },
      { id: 2, img: "#333739", imgAlt: "Apple iPhone 16 Pro Natural Titanium 256GB", discount: "Up to 15% off", rating: 4, reviews: 210, price: "€1.199" },
      { id: 3, img: "#585f63", imgAlt: "Apple iPhone 16 Pro White Titanium 128GB", discount: "Up to 15% off", rating: 4, reviews: 210, price: "€1.099" },
      { id: 4, img: "#776353", imgAlt: "Apple iPhone 16 Pro Desert Titanium 256GB", discount: "Up to 30% off", rating: 4.7, reviews: 180, price: "€1,199" },
      { id: 5, img: "iPhone16blue", imgAlt: "Apple iPhone 16 Blue 256GB", discount: "Up to 25% off", rating: 4.8, reviews: 50, price: "€920" },
      { id: 6, img: "iPhone16green", imgAlt: "Apple iPhone 16 Light Green 256GB ", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€920" },
      { id: 7, img: "iPhone15rosa", imgAlt: "Apple iPhone 14 Light Pink Limited Edition 128GB", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€705" },
      { id: 8, img: "iPhone14amarillo", imgAlt: "Apple iPhone 14 Yellow Limited Edition 128GB", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€705" },
      { id: 9, img: "watchS10", imgAlt: "Apple Watch S10", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€495" },
      { id: 10, img: "watchultra2black", imgAlt: "Apple Watch Ultra2 Black", discount: "Up to 40% off", rating: 5, reviews: 500, price: "€909" },
      // Agrega más productos si lo necesitas
    ];
  
    const [visibleCards, setVisibleCards] = useState(8); // Muestra inicialmente 4 tarjetas
    
    const showMoreCards = () => {
      setVisibleCards(prev => prev + 12); // Incrementa el número de tarjetas visibles
    };

    return (
      <section className="bg-black py-8 antialiased dark:bg-black md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* Mostrar las tarjetas */}
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {product.slice(0, visibleCards).map(product => (
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
  
                  <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                    {product.imgAlt}
                  </a>
  
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg key={index} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
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
                    <button
                      type="button"
                      className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Botón para ver más productos */}
          {visibleCards < product.length && (
            <div className="w-full text-center">
              <button
                onClick={showMoreCards}
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default Service;