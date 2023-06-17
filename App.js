import "./App.css";
import Shirt from "./components/shirt";
import ApparelList from "./components/ApparelList";

import { products } from "./style/data";

function App() {
  return (
    <main>
      <h1 className="title"> T-Shirt Collection </h1>
      <ApparelList products={products} />
    </main>
  );
}

export default App;
