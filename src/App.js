import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {

  const [product, setProduct] = useState ([
    { id: 1, title: 'Product 1', price: 889 },
    { id: 2, title: 'Product 2', price: 890 },
    { id: 3, title: 'Product 3', price: 789 },
    { id: 4, title: 'Product 4', price: 589 },
    { id: 5, title: 'Product 5', price: 877 }
  ]);

  const deleteProduct = (productId) => {
    const newProducts = product.filter(product => product.id !== productId);
    setProduct(newProducts);
  }

  const [name, setName] = useState ('Zall');

  useEffect(() => {
    console.log('use Effect Is Running')
  }, [name])

  return (
    <div className="App">
      <Header />
      <ProductList product={product} deleteProduct={deleteProduct}/>
      <button onClick={() => setName('Fzall')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
}

export default App;
