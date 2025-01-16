import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;