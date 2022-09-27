import { useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Home = ({
  product,
  filteredProduct,
  checked,
  query,
  handleChange,
  handleSearch,
  handleAddProduct,
  loading,
  Loader,
}) => {
  return (
    <div className="home-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a product..."
          onChange={handleSearch}
        />
      </div>
      <div className="cards">
        <div className="card-left">
          <Card1 checked={checked} handleChange={handleChange} />
        </div>
        <div className="card-right">
          <Card2
            checked={checked}
            query={query}
            product={product}
            filteredProduct={filteredProduct}
            handleAddProduct={handleAddProduct}
            loading={loading}
            Loader={Loader}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
