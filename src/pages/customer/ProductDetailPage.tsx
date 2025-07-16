import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Phone, Mail, Minus, Plus, Check } from 'lucide-react';
import { products } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import InquiryForm from '../../components/customer/InquiryForm';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [showInquiry, setShowInquiry] = useState(false);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Product not found</h2>
          <Link
            to="/products"
            className="text-slate-600 hover:text-slate-900 flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const getAvailabilityColor = () => {
    switch (product.availability) {
      case 'in-stock':
        return 'text-green-600';
      case 'limited':
        return 'text-yellow-600';
      case 'out-of-stock':
        return 'text-red-600';
      default:
        return 'text-slate-600';
    }
  };

  const getAvailabilityText = () => {
    switch (product.availability) {
      case 'in-stock':
        return 'In Stock';
      case 'limited':
        return 'Limited Stock';
      case 'out-of-stock':
        return 'Out of Stock';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/products"
            className="text-slate-600 hover:text-slate-900 flex items-center space-x-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Additional Images (placeholder) */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    className="w-full h-20 object-cover opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-slate-900 mt-2">{product.name}</h1>
              <p className="text-slate-600 mt-2">{product.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-slate-900">
                ${product.price.toLocaleString()}
              </span>
              <span className={`font-medium ${getAvailabilityColor()}`}>
                {getAvailabilityText()}
              </span>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-sm text-slate-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="block text-slate-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm font-medium text-slate-700">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleAddToCart}
                  disabled={product.availability === 'out-of-stock'}
                  className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  onClick={() => setShowInquiry(!showInquiry)}
                  className="w-full border border-slate-300 hover:border-slate-400 text-slate-700 py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Inquiry</span>
                </button>
              </div>

              <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Free delivery available</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4" />
                  <span>Call for custom sizing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        {showInquiry && (
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Inquiry</h3>
            <InquiryForm 
              productId={product.id}
              productName={product.name}
            />
          </div>
        )}

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {relatedProduct.name}
                    </h4>
                    <p className="text-2xl font-bold text-slate-900">
                      ${relatedProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;