//Import Necessary modules 
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//Import Pages for Routing
import Home from "./pages/Home";

// Main App Component for Routing
function App() {
  return (
    // Wrap the Routes in Router to enable Routing
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
// Export the App Component
export default App;