import React from 'react';
import { Link } from 'react-router-dom';
import { Package, MessageSquare, ShoppingCart, TrendingUp, Users, DollarSign } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  // In a real app, these would come from an API
  const stats = {
    totalProducts: 6,
    totalOrders: 12,
    totalInquiries: 8,
    totalRevenue: 45000,
    pendingOrders: 5,
    completedOrders: 7
  };

  const recentOrders = [
    { id: '1', customer: 'John Smith', total: 5400, status: 'pending' },
    { id: '2', customer: 'Mary Johnson', total: 12000, status: 'completed' },
    { id: '3', customer: 'David Brown', total: 3800, status: 'processing' }
  ];

  const recentInquiries = [
    { id: '1', customer: 'Sarah Wilson', product: 'Black Galaxy Countertop', date: '2024-01-16' },
    { id: '2', customer: 'Mike Davis', product: 'Granite Floor Tiles', date: '2024-01-15' },
    { id: '3', customer: 'Lisa Chen', product: 'Classic Memorial Stone', date: '2024-01-14' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Welcome back! Here's an overview of your business.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Total Products</p>
                <p className="text-2xl font-bold text-slate-900">{stats.totalProducts}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Total Orders</p>
                <p className="text-2xl font-bold text-slate-900">{stats.totalOrders}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Total Inquiries</p>
                <p className="text-2xl font-bold text-slate-900">{stats.totalInquiries}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-slate-900">${stats.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/admin/products"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Manage Products</h3>
                <p className="text-slate-600 text-sm">Add, edit, or remove products</p>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/orders"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <ShoppingCart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">View Orders</h3>
                <p className="text-slate-600 text-sm">Process and manage orders</p>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/inquiries"
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Customer Inquiries</h3>
                <p className="text-slate-600 text-sm">Respond to customer questions</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Recent Orders</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentOrders.map(order => (
                  <div key={order.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">Order #{order.id}</p>
                      <p className="text-slate-600 text-sm">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-slate-900">${order.total.toLocaleString()}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/admin/orders"
                className="block text-center mt-4 text-slate-600 hover:text-slate-900 text-sm"
              >
                View all orders →
              </Link>
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Recent Inquiries</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentInquiries.map(inquiry => (
                  <div key={inquiry.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{inquiry.customer}</p>
                      <p className="text-slate-600 text-sm">{inquiry.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-600 text-sm">{inquiry.date}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                        New
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/admin/inquiries"
                className="block text-center mt-4 text-slate-600 hover:text-slate-900 text-sm"
              >
                View all inquiries →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;