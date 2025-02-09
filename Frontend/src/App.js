import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import UserContext from "./utils/UserContext";
import PaymentPage from "./Components/Payment"; // Import Payment Page

const App = () => {
  const [userName, setUserName] = useState("");

  // Simulate an API call to get user data
  useEffect(() => {
    const data = {
      name: "Guest",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, setLoggedInUser: setUserName }}
    >
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/payment" element={<PaymentPage />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
