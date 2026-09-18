import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Landing from "./pages/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
