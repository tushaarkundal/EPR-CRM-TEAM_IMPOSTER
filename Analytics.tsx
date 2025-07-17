import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Calendar } from 'lucide-react';

const salesData = [
  { month: 'Jan', sales: 3750000, orders: 234 },
  { month: 'Feb', sales: 4330000, orders: 287 },
  { month: 'Mar', sales: 4000000, orders: 251 },
  { month: 'Apr', sales: 5083000, orders: 324 },
  { month: 'May', sales: 4583000, orders: 298 },
  { month: 'Jun', sales: 5583000, orders: 356 },
];

const topProducts = [
  { name: 'Laptop Pro', sales: 1234, revenue: 133549650 },
  { name: 'Wireless Mouse', sales: 892, revenue: 6616180 },
  { name: 'Monitor 4K', sales: 567, revenue: 28307805 },
  { name: 'Keyboard', sales: 445, revenue: 5889575 },
  { name: 'USB Cable', sales: 1123, revenue: 1403750 },
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
        <div className="flex items-center space-x-2">
          <Calendar size={20} className="text-gray-400" />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Last 6 months</option>
            <option>Last 12 months</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">₹2,73,30,000</p>
              <div className="flex items-center mt-1">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-sm text-green-600">+12.5%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-green-50">
              <BarChart3 size={24} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-semibold text-gray-900">2,150</p>
              <div className="flex items-center mt-1">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-sm text-green-600">+8.2%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-50">
              <PieChart size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-2xl font-semibold text-gray-900">₹12,713</p>
              <div className="flex items-center mt-1">
                <TrendingDown size={16} className="text-red-500 mr-1" />
                <span className="text-sm text-red-600">-2.1%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-purple-50">
              <BarChart3 size={24} className="text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Customers</p>
              <p className="text-2xl font-semibold text-gray-900">1,234</p>
              <div className="flex items-center mt-1">
                <TrendingUp size={16} className="text-green-500 mr-1" />
                <span className="text-sm text-green-600">+5.7%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-orange-50">
              <PieChart size={24} className="text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Sales Trend</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {salesData.map((data, index) => (
                <div key={data.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 text-sm text-gray-600">{data.month}</div>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(data.sales / 5800000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">₹{data.sales.toLocaleString('en-IN')}</div>
                    <div className="text-xs text-gray-500">{data.orders} orders</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.sales} units sold</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">₹{product.revenue.toLocaleString('en-IN')}</div>
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