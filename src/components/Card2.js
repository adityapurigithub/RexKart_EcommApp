const Card2 = ({
  query,
  handleAddProduct,
  product,
  filteredProduct,
  loading,
  Loader,
}) => {
  if (loading) {
    return <Loader />;
  }
  console.log(product);
  const products = product.filter(
    (item) =>
      item.name.toLowerCase().includes(query) || item.name.includes(query)
  );

  return (
    <div className="card2-wrapper">
      {products.length === 0 ? (
        <h2>Please Search Using a Proper Product Name!!!</h2>
      ) : filteredProduct.length !== 0 ? (
        filteredProduct.map((product) => {
          return (
            <div className="product">
              <div className="product-name">
                <b>{product.name}</b>
              </div>
              <div className="img-container">
                <img src={product.imageURL} />
              </div>
              <div className="price-btn">
                <span>₹ {product.price}</span>
                <button onClick={handleAddProduct} value={product.id}>
                  {product.added ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        products.map((product) => {
          return (
            <div className="product">
              <div className="product-name">
                <b>{product.name}</b>
              </div>
              <div className="img-container">
                <img src={product.imageURL} />
              </div>
              <div className="price-btn">
                <span>₹ {product.price}</span>
                <button onClick={handleAddProduct} value={product.id}>
                  {product.added ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Card2;
