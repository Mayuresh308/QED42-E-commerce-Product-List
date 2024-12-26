# E-commerce Product List

A modern e-commerce application built with Next.js, featuring product listing, filtering, and cart functionality.

## Features

- Product listing with search and category filtering
- Sort products by price and rating
- Detailed product view
- Shopping cart functionality with quantity adjustment
- Responsive design
- Modern UI with shadcn/ui components

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand (State Management)
- Fake Store API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `/app` - Next.js app router pages
- `/components` - Reusable UI components
- `/lib` - Utility functions and types
- `/public` - Static assets

## Features Implemented

1. Product Listing
   - Fetch and display products from Fake Store API
   - Product cards with image, title, price, and category
   - Rating display

2. Product Details
   - Detailed view page for each product
   - Full product information
   - Add to cart functionality

3. Filtering and Search
   - Search products by name
   - Filter by category
   - Sort by price and rating

4. Shopping Cart
   - Add/remove products
   - Adjust quantities
   - Calculate total price
   - Persistent cart state with Zustand

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
