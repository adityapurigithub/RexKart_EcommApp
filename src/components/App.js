import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";
import Loader from "./Loader";
import Err404 from "./404";

function App() {
  const [product, setProduct] = useState([]);
  const [checked, setChecked] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  const [cartItem, setCartItem] = useState([]);


  useEffect(() => {
    const url =
      " https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json ";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.checked, e.target.id);
    setChecked(!checked);

    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    console.log(checked);

    const tempProducts = product;
    console.log(tempProducts);
    let name = e.target.id;
    const filtProd = tempProducts.filter(
      (prod) =>
        prod.name.toLowerCase().includes(name) ||
        prod.type.toLowerCase().includes(name) ||
        prod.gender.toLowerCase().includes(name)
    );
    console.log(filtProd);
    setFilteredProduct(filtProd);
    if (!e.target.checked) {
      setFilteredProduct([]);
    }
  };

  const handleAddProduct = (e) => {
    const id = e.target.value;
    console.log(id);
    let tempCartItem = product.filter((item) => item.id == id);
    console.log(tempCartItem);

    //to remove a product from cart......
    if (tempCartItem[0].added) {
      tempCartItem[0].added = !tempCartItem[0].added;
      const index = cartItem.indexOf(tempCartItem[0]);
      console.log(index);
      cartItem.splice(index, 1);
      setCartItem([...cartItem]);
      setProduct(product);
    }
    //to add a product to cart......
    else {
      tempCartItem[0].added = true;
      setCartItem([...cartItem, tempCartItem[0]]);
      setProduct(product, tempCartItem);
    }
    console.log(cartItem);
  };

  const handleIncQuantity = (id) => {
    console.log(id);
    let updatedItem = cartItem.filter((item) => item.id == id);
    console.log(updatedItem);
    let incQuantity = updatedItem[0].quantity + 1;
    updatedItem[0].quantity = incQuantity;
    setCartItem([...cartItem]);
  };

  const handleDecQuantity = (id) => {
    let updatedItem = cartItem.filter((item) => item.id == id);
    if (updatedItem[0].quantity == 1) {
      return;
    }
    console.log(updatedItem);
    updatedItem[0].quantity -= 1;
    setCartItem([...cartItem]);
  };

  const handleDeleteProduct=(e)=>{
    console.log(e.target.id)
    const id=e.target.id;
    let item=cartItem.filter((product)=>product.id==id);
    console.log(item);
    let index=cartItem.indexOf(item[0]);
    cartItem.splice(index,1);
    alert("Product will be removed from the cart !!!")
    setCartItem([...cartItem]);

  }

  return (
    <div className="app">
      <Router>
        <Navbar  cartItem={cartItem} />
        <Routes>
          <Route
            path="/RexKart_EcommApp/"
            element={
              <Home
                product={product}
                checked={checked}
                query={query}
                handleChange={handleChange}
                handleSearch={handleSearch}
                filteredProduct={filteredProduct}
                handleAddProduct={handleAddProduct}
                cartItem={cartItem}
                loading={loading}
                Loader={Loader}
              />
            }
          />
          <Route
            path="/RexKart_EcommApp/cart"
            element={
              <Cart
                cartItem={cartItem}
                handleIncQuantity={handleIncQuantity}
                handleDecQuantity={handleDecQuantity}
                handleDeleteProduct={handleDeleteProduct}

              />
            }
          />
          <Route path="*" element={<Err404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
