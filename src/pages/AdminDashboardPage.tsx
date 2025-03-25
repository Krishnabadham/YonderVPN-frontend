
const AdminDashboardPage = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome, Admin! Manage VPNs, Users, and more here.</p>

      {/* You can add components here for managing VPNs, users, etc. */}
      <div className="admin-actions">
        <button className="btn">Manage VPNs</button>
        <button className="btn">Manage Users</button>
        {/* Add more admin actions here */}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
