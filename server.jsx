import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p className={product.stock ? "in-stock" : "out-of-stock"}>
        {product.stock ? "In Stock" : "Out of Stock"}
      </p>
      <button onClick={() => addToCart(product)} disabled={!product.stock}>
        Add to Cart
      </button>
      <button onClick={() => alert("Proceed to Buy Now")} disabled={!product.stock}>
        Buy Now
      </button>
    </div>
  );
};

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const products = [
    { id: 1, name: "Candles (Set of 3)", price: 299, stock: true, image: "candles.jpg" },
    { id: 2, name: "Incense and Burners", price: 699, stock: false, image: "incense.jpg" },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
      <div className="cart">
        <h2>Cart ({cart.length} items)</h2>
      </div>
    </div>
  );
};

export default ProductList;
