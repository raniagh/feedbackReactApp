import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div>
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or service </p>
        <p>
          <Link to="/"> Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
