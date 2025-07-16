import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Upload, Download, Mail, Phone } from 'lucide-react';
import { Order } from '../../types';

const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const order: Order = location.state?.order;

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Order not found</h2>
          <Link
            to="/products"
            className="text-slate-600 hover:text-slate-900"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentProof(file);
    }
  };

  const handleUploadProof = async () => {
    if (!paymentProof) return;

    setIsUploading(true);
    
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsUploading(false);
    setUploadComplete(true);

    // In real app, update order status
    const existingOrders = JSON.parse(localStorage.getItem('mutare_orders') || '[]');
    const updatedOrders = existingOrders.map((o: Order) => 
      o.id === order.id ? { ...o, paymentProof: paymentProof.name } : o
    );
    localStorage.setItem('mutare_orders', JSON.stringify(updatedOrders));
  };

  const generateInvoice = () => {
    // In real app, generate PDF invoice
    const invoiceData = {
      orderId: order.id,
      customer: order.customer,
      items: order.items,
      total: order.total,
      date: order.orderDate
    };
    
    console.log('Invoice data:', invoiceData);
    alert('Invoice would be generated here');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Order Confirmed!</h1>
          <p className="text-slate-600">
            Your order has been successfully placed. Order ID: <span className="font-semibold">#{order.id}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Order Details</h2>
            
            <div className="space-y-4 mb-6">
              {order.items.map(item => (
                <div key={item.product.id} className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900">{item.product.name}</h3>
                    <p className="text-slate-600 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-slate-900">
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${order.total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold text-slate-900 mb-3">Delivery Information</h3>
              <div className="text-slate-600 space-y-1">
                <p><strong>Name:</strong> {order.customer.name}</p>
                <p><strong>Address:</strong> {order.customer.address}</p>
                <p><strong>City:</strong> {order.customer.city}</p>
                <p><strong>Phone:</strong> {order.customer.phone}</p>
              </div>
            </div>

            <button
              onClick={generateInvoice}
              className="w-full mt-6 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download Invoice</span>
            </button>
          </div>

          {/* Payment Instructions */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Payment Instructions</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Bank Transfer</h3>
                  <div className="text-slate-600 space-y-1">
                    <p><strong>Bank:</strong> CBZ Bank</p>
                    <p><strong>Account:</strong> 1234567890</p>
                    <p><strong>Branch:</strong> Mutare Branch</p>
                    <p><strong>Reference:</strong> Order #{order.id}</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Mobile Money</h3>
                  <div className="text-slate-600 space-y-1">
                    <p><strong>EcoCash:</strong> 0777 123 456</p>
                    <p><strong>OneMoney:</strong> 0777 123 456</p>
                    <p><strong>Reference:</strong> Order #{order.id}</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Cash on Delivery</h3>
                  <p className="text-slate-600">
                    Pay in cash when your order is delivered. Additional delivery charges may apply.
                  </p>
                </div>
              </div>
            </div>

            {/* Upload Payment Proof */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Upload Payment Proof</h2>
              
              {uploadComplete ? (
                <div className="text-center py-4">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <p className="text-green-600 font-medium">Payment proof uploaded successfully!</p>
                  <p className="text-slate-600 text-sm mt-1">
                    We'll process your order once payment is verified.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select payment proof (screenshot, receipt, etc.)
                    </label>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    onClick={handleUploadProof}
                    disabled={!paymentProof || isUploading}
                    className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {isUploading ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="h-5 w-5" />
                        <span>Upload Proof</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Need Help?</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">+263 20 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">orders@mutaregaranite.co.zw</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;