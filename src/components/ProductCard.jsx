import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
          <img 
            src={product.image} 
            alt={product.title}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Quick View Badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Quick View
          </span>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          {/* Category Tag */}
          <span className="inline-block px-2 py-1 bg-violet-100 text-violet-800 text-xs font-medium rounded-full mb-2">
            {product.category}
          </span>

          {/* Title */}
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-violet-600 transition-colors">
              {product.title}
            </h3>
          </Link>

          {/* Price & Rating */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.rating && (
              <div className="flex items-center">
                <svg 
                  className="w-4 h-4 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-600 ml-1">
                  {product.rating.rate}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          className="mt-4 w-full bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center transition-colors duration-200"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
