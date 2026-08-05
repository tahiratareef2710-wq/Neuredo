import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Legal from "./pages/Legal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/legal/:page" element={<Legal />} />
    </Routes>
  );
}

export default App;