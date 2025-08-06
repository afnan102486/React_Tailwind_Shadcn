import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decrementQuantity,  incrementQuantity, clearCart } from '../features/cart/cartSlice';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 bg-indigo-700 text-white">
            <h2 className="text-3xl font-bold">Your Shopping Cart</h2>
            <p className="mt-1 opacity-90">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="p-8 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
              <p className="mt-1 text-gray-500">Start adding some products to your cart</p>
              <div className="mt-6">
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                  Clear Cart
                </button>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-full sm:w-32 h-32 bg-gray-200 rounded-md overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                    <div className="flex justify-between">
                      <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-lg font-medium text-gray-900">${(item.quantity * item.price).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-gray-600">${item.price.toFixed(2)} each</p>
                    <div className="mt-4 flex items-center">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="ml-4 text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center"
                      >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-6 bg-gray-50">
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-600">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <button className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-4 text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
                    Checkout
                  </button>
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="/"
                    className="text-indigo-600 hover:text-indigo-500 font-medium flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                    </svg>
                    Continue Shopping
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}