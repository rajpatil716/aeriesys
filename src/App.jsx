import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage"; // Assuming LoginPage is a separate component
import HomePage from "./HomePage"; // Assuming HomePage is a separate component
import "@fontsource/source-sans-3";
import "bootstrap-icons/font/bootstrap-icons.css";
import "admin-lte/dist/css/adminlte.css";
// import 'overlayscrollbars/styles/overlayscrollbars.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const App = () => {
  

  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route path="/" element={<LoginPage />} />
        {/* Route for home page, only visible after login */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
