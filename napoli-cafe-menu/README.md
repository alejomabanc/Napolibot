# Napoli Café Interactive Menu

Welcome to the Napoli Café Interactive Menu project! This application serves as a digital menu for Napoli Café, showcasing a variety of delicious offerings in a warm and inviting style.

## Project Structure

The project is organized as follows:

```
napoli-cafe-menu
├── public
│   └── images          # Contains product images used in the menu.
├── src
│   ├── components      # Reusable components for the application.
│   │   ├── Header.jsx
│   │   ├── CategoryTabs.jsx
│   │   ├── ProductCard.jsx
│   │   ├── FloatingCart.jsx
│   │   ├── CartDrawer.jsx
│   │   └── IconTags.jsx
│   ├── pages           # Main pages of the application.
│   │   └── Menu.jsx
│   ├── stores          # Zustand store for managing cart state.
│   │   └── cartStore.js
│   ├── data            # JSON data for menu items.
│   │   └── menuData.js
│   ├── styles          # Global styles and TailwindCSS configurations.
│   │   └── index.css
│   ├── App.jsx         # Main application component.
│   └── index.jsx       # Entry point of the application.
├── package.json        # npm configuration file.
├── tailwind.config.js  # TailwindCSS configuration.
├── postcss.config.js   # PostCSS configuration.
├── .gitignore          # Files and directories to be ignored by Git.
└── README.md           # Project documentation.
```

## Features

- **Responsive Design**: The menu adapts to different screen sizes, providing a seamless experience on mobile, tablet, and desktop devices.
- **Interactive Elements**: Users can navigate through categories, view product details, and add items to their cart without page reloads.
- **Global Cart Management**: Utilizing Zustand for state management, the cart persists in local storage, allowing users to manage their selections easily.
- **Accessibility**: The application follows semantic HTML practices and ensures keyboard navigability.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd napoli-cafe-menu
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.