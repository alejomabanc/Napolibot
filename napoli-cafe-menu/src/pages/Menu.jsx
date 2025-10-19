import { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";
import FloatingCart from "@/components/FloatingCart";
import CartDrawer from "@/components/CartDrawer";
import { menuData } from "@/data/menuData";
import create from "zustand";

const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
  getTotal: () => set((state) => state.items.reduce((total, item) => total + item.price, 0)),
}));

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("gelatos");
  const [cartOpen, setCartOpen] = useState(false);
  const { addItem } = useCartStore();

  const filteredProducts = menuData.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#FFF9F4]">
      <Header />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-[#E3E6EA] rounded-lg shadow hover:shadow-md p-5 transition duration-300">
              <ProductCard product={product} onAdd={() => addItem(product)} />
            </div>
          ))}
        </div>
      </main>

      <FloatingCart onClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Menu;