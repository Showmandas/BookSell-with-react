import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* header  */}
      <Header />
      <Outlet />
      {/* footer  */}
      <Footer />
    </div>
  );
}

export default App;
