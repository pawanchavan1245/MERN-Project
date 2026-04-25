function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome! You have successfully logged in.</p>
      <button onClick={() => window.location.reload()}>Logout</button>
    </div>
  );
}

export default Dashboard;