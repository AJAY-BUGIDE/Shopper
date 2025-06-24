import React, { useContext } from 'react';
import { ShopContext } from '../Pages/ShopContext';
import cart_cross_icon from '../../../Ecommerce_Assets/Assets/Frontend_Assets/cart_cross_icon.png';

const CartItems = () => {
  const { cartItems, all_product, removeFromCart, addToCart, deleteFromCart } = useContext(ShopContext);

  // Get cart products
  const cartProducts = all_product.filter((product) => cartItems[product.id] > 0);

  return (
    <div className="px-4 sm:px-10 md:px-20 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {/* Show Empty Cart */}
      {cartProducts.length === 0 ? (
        <div className="text-center text-black-500 text-sm py-10">
          Your cart is empty. Add some products!
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="hidden sm:grid grid-cols-6 gap-4 font-semibold text-gray-600 border-b pb-3 text-xs uppercase">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {/* Cart Items */}
          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center text-sm text-gray-700 py-4 border-b"
            >
              {/* Image */}
              <div className="col-span-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <div className="col-span-1 text-sm w-50">{product.name}</div>

              {/* Price */}
              <div className="col-span-1">${product.new_price.toFixed(2)}</div>

              {/* Quantity */}
              {/* <div className="col-span-1">
                <span className="inline-block border px-3 py-1 rounded-md text-center">
                  {cartItems[product.id]}
                </span>
              </div> */}
              <div className="col-span-1 flex items-center gap-2">
              <button
                onClick={() => removeFromCart(product.id)}
                className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-200"
              >
                −
                </button>

                <span className="px-3 py-1 border rounded text-center">
                  {cartItems[product.id]}
                </span>

                <button
                  onClick={() => addToCart(product.id)}
                  className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-200 cursor-copy"
                >
                  +
                </button>
              </div>


              {/* Total */}
              <div className="col-span-1 font-medium">
                ${(cartItems[product.id] * product.new_price).toFixed(2)}
              </div>

              {/* Remove */}
              <div className="col-span-1">
                <button onClick={() => deleteFromCart(product.id)}>
                  <img
                    src={cart_cross_icon}
                    alt="Remove"
                    className="w-5 h-5 hover:opacity-70 transition"
                  />
                </button>
              </div>
            </div>
          ))}
            <div className="px-6 md:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
  {/* Cart Summary Section */}
  <div className="bg-white p-6 shadow-md rounded-md border border-gray-200">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Cart Total</h1>

    <div className="space-y-4 text-sm text-gray-700">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>
          $
          {cartProducts
            .reduce(
              (sum, product) =>
                sum + product.new_price * cartItems[product.id],
              0
            )
            .toFixed(2)}
        </p>
      </div>
      <hr />
      <div className="flex justify-between">
        <p>Shipping Fee</p>
        <p> $20.00 </p>
      </div>
      <hr />
      <div className="flex justify-between font-semibold text-gray-800 text-base">
        <p>Total</p>
        <p>
          $
          {cartProducts
            .reduce(
              (sum, product) =>
                sum + (product.new_price * cartItems[product.id]),
              20
            )
            .toFixed(2)}
        </p>
      </div>
    </div>

    <button className="mt-6 w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition cursor-pointer">
      PROCEED TO CHECKOUT
    </button>
  </div>

  {/* Promo Code Section */}
  <div className="bg-white p-6 shadow-md rounded-md border border-gray-200">
    <p className="text-sm text-gray-600 mb-4">
      If you have any promo code, enter it here
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Promo code"
        className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
        Submit
      </button>
    </div>
  </div>
</div>

          {/* Total Price Section (Optional) */}
          {/* <div className="flex justify-end mt-6">
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-800">
                Total: $
                {cartProducts
                  .reduce((sum, product) => sum + product.new_price * cartItems[product.id], 0)
                  .toFixed(2)}
              </p>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default CartItems;
