import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { FeedbackProvider } from "./Context/FeedbackContext";
// -----------> Components <--------------//
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/Pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <div>
        <Router>
          <Link style={{ textDecoration: "none" }} to="/">
            <Header />
          </Link>

          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                    <AboutIconLink />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </FeedbackProvider>
  );
}

export default App;
