import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BottomNavigation from "./components/custom/botton-navigation";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen-fixed touch-pan-y no-link-highlight">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BottomNavigation />
    </div>
  );
};

export default App;
