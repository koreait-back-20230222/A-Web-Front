import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainView from "./view/MainView";
import SignUpView from "./view/Authentication/SignUpView";
import SignInView from "./view/Authentication/SignInView";
import { Route, Routes } from "react-router-dom";
import FindEmailView from "./view/Authentication/FindEmailView";
import FindPasswordView from "./view/Authentication/FindPasswordView";
import RecommendationMainView from "./view/Recommendation/MainView";
import Navigation from "./view/Navigation";
import Footer from "./view/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/auth">
          <Route path="sign-in" element={<SignInView />} />
          <Route path="sign-up" element={<SignUpView />} />
          <Route path="find-email" element={<FindEmailView />} />
          <Route path="find-password" element={<FindPasswordView />} />
        </Route>
        <Route path="/recommedation">
          <Route index element={<RecommendationMainView />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
