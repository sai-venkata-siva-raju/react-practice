import "./Card.css";

export default function Card({ user }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2>{user.name}</h2>
          <span className="status">Active User</span>
        </div>
      </div>

      <div className="card-body">
        <div className="info">
          <span>🎂 Age</span>
          <strong>{user.age}</strong>
        </div>

        <div className="info">
          <span>📍 City</span>
          <strong>{user.city}</strong>
        </div>
      </div>

      <button className="btn">View Profile</button>
    </div>
  );
}