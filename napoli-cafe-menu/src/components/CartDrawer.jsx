import React from "react";
import { useCartStore } from "@/stores/cartStore";

const CartDrawer = ({ open, onClose }) => {
  const { cartItems, removeItem, getTotal } = useCartStore();

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 w-80 bg-white shadow-lg transition-transform transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Tu Carrito</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Tu carrito está vacío.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-olive-green">${item.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4 border-t">
          <h3 className="font-semibold">Total: ${getTotal().toFixed(2)}</h3>
          <button className="w-full mt-2 bg-olive-green text-white py-2 rounded-md">
            Proceder a la compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;