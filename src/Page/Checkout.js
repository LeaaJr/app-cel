import React, { useState } from 'react';
import Service from './Service';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'United States',
    city: 'San Francisco',
    address: '',
    phone: '',
    paymentMethod: 'credit-card',
    deliveryMethod: 'standard',
    voucher: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyVoucher = () => {
    alert(`Voucher applied: ${formData.voucher}`);
  };

  const YourComponent = () => {
    const [cart, setCart] = useState([]); // Aquí puedes gestionar los productos en el carrito
  
    const getPrice = (productId) => {
        const product = products.find(item => item.id === productId);
        return product ? product.price : "No price available";
      };
  
    // Función para manejar el agregado de productos al carrito
    const addToCart = (productId) => {
      const product = products.find(item => item.id === productId);
      if (product) {
        setCart([...cart, product]);
      }
    };

  return (
    <section className="bg-white py-8 antialiased dark:bg-black md:py-16" >
    <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
  <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
    <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
      <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
        <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Cart
      </span>
    </li>

    <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-['/'] md:w-full xl:after:mx-10">
      <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
        <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Checkout
      </span>
    </li>

    <li className="flex shrink-0 items-center">
      <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      Order summary
    </li>
  </ol>

  <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
    <div className="min-w-0 flex-1 space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
            <input
              type="text"
              id="your_name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Bonnie Green"
              required
            />
          </div>

          <div>
            <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
            <input
              type="email"
              id="your_email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Address </label>
            <input
              type="text"
              id="address"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="123 Main St"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number </label>
            <input
              type="tel"
              id="phone"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="+1 234 567 890"
            />
          </div>

          <div>
            <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
            <select
              id="country"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            >
              <option>United States</option>
              <option>Australia</option>
              <option>France</option>
              <option>Spain</option>
              <option>United Kingdom</option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
            <select
              id="city"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            >
              <option>San Francisco</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Houston</option>
            </select>
          </div>

        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Method</h2>

        <div>
          <label htmlFor="payment_method" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Select Payment Method </label>
          <select
            id="payment_method"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">Paypal</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <label htmlFor="voucher" className="block text-sm font-medium text-gray-900 dark:text-white"> Voucher Code </label>
        <div className="flex gap-4">
          <input
            type="text"
            id="voucher"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Enter your voucher code"
          />
          <button
            type="button"
            className="w-24 rounded-lg bg-primary-700 px-4 py-2.5 text-sm text-white hover:bg-primary-800 focus:outline-none"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full rounded-lg bg-primary-700 px-6 py-3 text-lg text-white hover:bg-primary-800 focus:outline-none"
        >
          Confirm Order
        </button>
      </div>
    </div>

    <div className="mt-8 lg:mt-0 lg:max-w-xs">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-lg dark:border-gray-600 dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Order Summary</h3>
        <ul className="space-y-2 text-sm text-gray-900 dark:text-white">
        </ul>
        <hr className="my-4" />
        <p className="text-lg font-semibold text-gray-900 dark:text-white">${price}</p>
      </div>
    </div>
  </div>
</form>

    </section>
  );
}};

export default CheckoutForm;
