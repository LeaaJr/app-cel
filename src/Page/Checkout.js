import React from 'react';
import { useLocation } from 'react-router-dom'; // Importar useLocation
import product from './Service'

const CheckoutForm = () => {
  const location = useLocation();
  const products = location.state?.products || []; // Asegurémonos de que recibimos los productos correctamente

  console.log('Productos recibidos en CheckoutForm:', products); // Verificar en consola

  // Si los productos no están llegando, no continuamos con los cálculos
  if (products.length === 0) {
    console.error('No se recibieron productos!');
  }

  // Calcular el precio total de los productos
  const totalPrice = products.reduce((sum, item) => {
    // Limpiamos el precio (eliminamos cualquier cosa que no sea un número o punto decimal)
    const cleanedPrice = item.price.replace(/[^\d.-]/g, '');  // Eliminar todo excepto números y puntos
    const priceValue = parseFloat(cleanedPrice);  // Convertimos el precio a un número flotante

    // Sumar el precio, asegurándonos de que el valor sea válido
    return sum + (isNaN(priceValue) ? 0 : priceValue);
  }, 0);

  console.log('Precio total calculado:', totalPrice);

  // Aquí puedes añadir los cálculos de impuestos, envío, descuento, etc.
  const tax = totalPrice * 0.1; // Ejemplo: 10% de impuesto
  const shipping = 50; // Costo de envío fijo
  const savings = 100; // Ejemplo de descuento
  const finalTotal = totalPrice - savings + tax + shipping;

  console.log(`Impuestos: ${tax}`);
  console.log(`Envío: ${shipping}`);
  console.log(`Descuento: ${savings}`);
  console.log(`Total final: ${finalTotal}`);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment</h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            {/* Formulario de pago */}
            <form action="#" className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Full name (as displayed on card)*</label>
                  <input type="text" id="full_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card number*</label>
                  <input type="text" id="card-number-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                </div>
              </div>

              <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay now</button>
            </form>

            {/* Resumen de precio */}
            <div className="mt-6 grow sm:mt-8 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">${totalPrice.toFixed(2)}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                    <dd className="text-base font-medium text-green-500">-${savings.toFixed(2)}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">${shipping}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">${tax.toFixed(2)}</dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">${finalTotal.toFixed(2)}</dd>
                </dl>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
            Payment processed by <a href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Paddle</a> for <a href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Flowbite LLC</a>
            - United States Of America
          </p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
