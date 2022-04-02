import { useState } from "react";
import Header from "./components/Header";

function App() {

  const [product, setProduct] = useState ([
    { id: 1, title: 'Product 1', price: 889 },
    { id: 2, title: 'Product 2', price: 890 },
    { id: 3, title: 'Product 3', price: 789 },
    { id: 4, title: 'Product 4', price: 589 },
    { id: 5, title: 'Product 5', price: 877 }
  ]);

  return (
    <div className="App">
      <Header />

      <ul>
        { product.map((product) => (
          <li key={product.id}>{product.title} - {product.price}</li>
        )) }
      </ul>
    </div>
  );
}

export default App;
