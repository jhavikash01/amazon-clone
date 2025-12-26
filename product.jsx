function Product({ id, title, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="rating">⭐⭐⭐⭐☆</div>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default Product;
