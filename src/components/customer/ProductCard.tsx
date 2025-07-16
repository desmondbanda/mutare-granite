import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const getAvailabilityBadge = () => {
    switch (product.availability) {
      case 'in-stock':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">In Stock</span>;
      case 'limited':
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Limited</span>;
      case 'out-of-stock':
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Out of Stock</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            {getAvailabilityBadge()}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">{product.name}</h3>
          <p className="text-slate-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-slate-900">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4 pt-0 flex space-x-2">
        <Link
          to={`/products/${product.id}`}
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Eye className="h-4 w-4" />
          <span>View Details</span>
        </Link>
        
        <button
          onClick={handleAddToCart}
          disabled={product.availability === 'out-of-stock'}
          className="flex-1 bg-slate-800 hover:bg-slate-900 disabled:bg-slate-400 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;