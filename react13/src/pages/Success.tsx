import { useLocation, Link } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const data = location.state as any;

  if (!data) {
    return (
      <div>
        <h2>No registration data found.</h2>
        <Link to="/register">Go back to Register</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Registration Successful!</h2>
      <p><strong>First Name:</strong> {data.firstName}</p>
      <p><strong>Last Name:</strong> {data.lastName}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <Link to="/register">Back to Register</Link>
    </div>
  );
}
