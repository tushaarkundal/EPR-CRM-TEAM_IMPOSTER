
# Team Imposter - CRM ERP Inventory Management System

A modern, responsive CRM, ERP, and Inventory Management system built with React, TypeScript, and Tailwind CSS.

## Features

- **Dashboard** - Overview of key metrics and recent activities
- **Customer Management** - Manage customer information and relationships
- **Product Management** - Track inventory, stock levels, and product details
- **Order Management** - Process and track customer orders
- **Supplier Management** - Manage supplier relationships and contacts
- **Analytics** - View sales trends and performance metrics

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd team-imposter-crm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Analytics.tsx
│   ├── CustomerManagement.tsx
│   ├── Dashboard.tsx
│   ├── Header.tsx
│   ├── OrderManagement.tsx
│   ├── ProductManagement.tsx
│   ├── Sidebar.tsx
│   └── SupplierManagement.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Features Overview

### Dashboard
- Key performance metrics
- Recent orders overview
- Low stock alerts
- Revenue and sales tracking

### Customer Management
- Customer database with contact information
- Order history and spending analytics
- Search and filter capabilities

### Product Management
- Inventory tracking with stock levels
- Product categorization
- Low stock alerts and management

### Order Management
- Order processing and status tracking
- Customer order history
- Order fulfillment workflow

### Supplier Management
- Supplier contact database
- Product sourcing information
- Supplier performance ratings

### Analytics
- Sales trend analysis
- Top-performing products
- Revenue metrics and growth tracking

## Currency
All monetary values are displayed in Indian Rupees (₹).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Live Demo

Visit the live application: [https://curious-fairy-d8700a.netlify.app](https://curious-fairy-d8700a.netlify.app)
