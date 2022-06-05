import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactPage,
  PageNoFound,
  LoginPage,
  RegisterPage,
  ChatPage,
  ProfilePage,
} from "./components/ListAsyncPage";
import { UserAuthContext } from "./context/ChatContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <UserAuthContext>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <ChatPage />
                </ProtectedRoute>
              }
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<PageNoFound />} />
          </Routes>
        </Router>
      </div>
    </UserAuthContext>
  );
}

export default App;
