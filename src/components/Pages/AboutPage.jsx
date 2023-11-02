import Card from "../shared/Card";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>This is an about page</h1>
        <p>Version 1.0</p>
        <p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <FaBackward style={{ color: " #ff6a95" }} beat /> Go back to home
            Page
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
