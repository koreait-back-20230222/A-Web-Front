import { Route, Routes, useLocation } from "react-router-dom";

import MainView from "src/view/MainView";
import SignUpView from "src/view/Authentication/SignUpView";
import SignInView from "src/view/Authentication/SignInView";
import FindEmailView from "src/view/Authentication/FindEmailView";
import FindPasswordView from "src/view/Authentication/FindPasswordView";
import RecommendationMain from "src/view/Recommendation/Main";
import Navigation from "src/view/Navigation";
import Footer from "src/view/Footer";
import CustomerServiceNotice from "src/view/CustomerService/Notice";
import CustomerServiceInquiry from "src/view/CustomerService/Inquiry";
import DestinationCourseMain from "src/view/DestinationCourse";
import DestinationCourseDetail from "src/view/DestinationCourse/Detail";
import DestinationCourseWrite from "src/view/DestinationCourse/Write";
import RecommendationDetail from "src/view/Recommendation/Detail";
import RecommendationWrite from "src/view/Recommendation/Write";
import "./App.css";
import AdminLayout from "./view/Admin";

function App() {

  const { pathname } = useLocation();

  return (
    <>
      {pathname.indexOf('/admin') === -1 && (<Navigation />)}
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/auth">
          <Route path="sign-in" element={<SignInView />} />
          <Route path="sign-up" element={<SignUpView />} />
          <Route path="find-email" element={<FindEmailView />} />
          <Route path="find-password" element={<FindPasswordView />} />
        </Route>
        <Route path="/course">
          <Route index element={<DestinationCourseMain />} />
          <Route path="detail" element={<DestinationCourseDetail />} />
          <Route path="write" element={<DestinationCourseWrite />} />
        </Route>
        <Route path="/recommedation">
          <Route index element={<RecommendationMain />} />
          <Route path="write" element={<RecommendationWrite />} />
          <Route path="detail/:recommedationNumber" element={<RecommendationDetail />} />
        </Route>
        <Route path="/customer-service">
          <Route index element={<CustomerServiceNotice />} />
          <Route path="notice" element={<CustomerServiceNotice />} />
          <Route path="inquiry" element={<CustomerServiceInquiry />} />
        </Route>
        <Route path="/destination">
          <Route path="write" element={<></>} />
          <Route path="detail" element={<></>} />
        </Route>
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
      {pathname.indexOf('/admin') === -1 && (<Footer />)}
    </>
  );
}

export default App;
