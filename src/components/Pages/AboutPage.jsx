import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>This is an about page</h1>
        <p>Version 1.0</p>
        <p>
          <a href="/">Go back to home Page</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
