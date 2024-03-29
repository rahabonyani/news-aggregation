import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "../pages/News";

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route path="/" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesProvider;
