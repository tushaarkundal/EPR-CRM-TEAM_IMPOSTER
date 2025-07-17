import React from 'react';
import { DollarSign, Users, Package, TrendingUp, ShoppingCart, AlertTriangle } from 'lucide-react';

const stats = [
  { title: 'Total Revenue', value: '₹10,36,525', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
  { title: 'Active Customers', value: '1,234', change: '+8.2%', icon: Users, color: 'text-blue-600' },
  { title: 'Products in Stock', value: '5,678', change: '-2.4%', icon: Package, color: 'text-purple-600' },
  { title: 'Monthly Sales', value: '892', change: '+15.3%', icon: ShoppingCart, color: 'text-orange-600' },
];

const recentOrders = [
  { id: '#1234', customer: 'John Smith', product: 'Laptop Pro', amount: '₹1,08,225', status: 'Completed' },
  { id: '#1235', customer: 'Sarah Johnson', product: 'Wireless Mouse', amount: '₹7,415', status: 'Processing' },
  { id: '#1236', customer: 'Mike Wilson', product: 'Keyboard', amount: '₹13,235', status: 'Shipped' },
  { id: '#1237', customer: 'Emma Davis', product: 'Monitor', amount: '₹24,915', status: 'Pending' },
];

const lowStockItems = [
  { name: 'Wireless Mouse', stock: 5, minStock: 20 },
  { name: 'USB Cable', stock: 3, minStock: 15 },
  { name: 'Phone Case', stock: 8, minStock: 25 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.customer} • {order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{order.amount}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="text-orange-500" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">Low Stock Alert</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {lowStockItems.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">Min stock: {item.minStock}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-orange-600">{item.stock} left</p>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full" 
                        style={{ width: `${(item.stock / item.minStock) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};