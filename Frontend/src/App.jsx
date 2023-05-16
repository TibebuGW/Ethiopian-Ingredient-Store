import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Profile,
  Login,
  Signup,
  Cart,
  Checkout,
  Orders,
  CreateAccount,
} from "./components";
import { StoreContextProvider } from "./contexts/store-context";
function App() {
  return (
    <div className="w-full">
      <StoreContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </Router>
      </StoreContextProvider>
    </div>
  );
}

export default App;
