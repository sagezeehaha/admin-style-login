import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Users, 
  AlertTriangle, 
  MessageCircle, 
  Calendar, 
  FolderOpen, 
  LogOut,
  Menu,
  X
} from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Residents" },
    { icon: AlertTriangle, label: "Alerts" },
    { icon: MessageCircle, label: "Communication" },
    { icon: Calendar, label: "Events" },
    { icon: FolderOpen, label: "Resources" },
    { icon: LogOut, label: "Log Out" },
  ];

  return (
    <div className="admin-dashboard">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🛡️</span>
            <span className="logo-text">VigiLink</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-brand">
            <span className="brand-icon">🛡️</span>
            <span className="brand-text">VigiLink</span>
          </div>
          
          {navigationItems.map((item, index) => (
            <div 
              key={index} 
              className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
            >
              <item.icon size={20} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="content-header">
          <div>
            <h1 className="page-title">Admin Dashboard</h1>
            <p className="page-subtitle">An organized and reliable office professional.</p>
          </div>
          <button className="about-btn">About</button>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-grid">
          {/* Charts Section */}
          <div className="charts-section">
            <Card className="chart-card">
              <CardContent className="chart-container">
                {/* Pie Chart */}
                <div className="pie-chart">
                  <svg viewBox="0 0 200 200" className="pie-svg">
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="80" 
                      fill="none" 
                      stroke="#6366f1" 
                      strokeWidth="40"
                      strokeDasharray="362 100"
                      transform="rotate(-90 100 100)"
                    />
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="80" 
                      fill="none" 
                      stroke="#22d3ee" 
                      strokeWidth="40"
                      strokeDasharray="90 372"
                      strokeDashoffset="-362"
                      transform="rotate(-90 100 100)"
                    />
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="80" 
                      fill="none" 
                      stroke="#fb7185" 
                      strokeWidth="40"
                      strokeDasharray="60 402"
                      strokeDashoffset="-452"
                      transform="rotate(-90 100 100)"
                    />
                  </svg>
                  <div className="pie-center">
                    <div className="pie-label">Residents</div>
                    <div className="pie-value">72.3%</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-color" style={{backgroundColor: '#6366f1'}}></div>
                    <span>Residents</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color" style={{backgroundColor: '#22d3ee'}}></div>
                    <span>Alerts</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color" style={{backgroundColor: '#fb7185'}}></div>
                    <span>Events</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bar Chart */}
            <Card className="chart-card">
              <CardContent className="bar-chart-container">
                <div className="bar-chart">
                  <div className="chart-y-axis">
                    {[100, 80, 60, 40, 20, 0].map(value => (
                      <div key={value} className="y-axis-label">{value}</div>
                    ))}
                  </div>
                  <div className="chart-bars">
                    {[40, 80, 60, 90, 30].map((height, index) => (
                      <div key={index} className="bar-group">
                        <div 
                          className="bar" 
                          style={{height: `${height}%`}}
                        ></div>
                        <div className="bar-label">Week {index + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chart-period">
                  <span>2020</span>
                  <span>2021</span>
                  <span>2022</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Verification Form */}
          <Card className="verification-card">
            <CardHeader>
              <CardTitle className="form-title">Admin Verifications</CardTitle>
              <p className="form-subtitle">Secure Residents Access</p>
            </CardHeader>
            <CardContent>
              <form className="verification-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <Input 
                      placeholder="your@email.com" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Neighborhood/Community Name</label>
                    <Input 
                      placeholder="your@email.com" 
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Middle Name</label>
                    <Input 
                      placeholder="your@email.com" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <Input 
                      placeholder="your@email.com" 
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <Input 
                      placeholder="your@email.com" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Verification Number</label>
                    <Input 
                      placeholder="your@email.com" 
                      className="form-input"
                    />
                  </div>
                </div>

                <Button className="submit-btn">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="dashboard-footer">
          <div className="footer-content">
            <p>Footer</p>
          </div>
        </footer>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && <div className="mobile-overlay" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
};

export default AdminDashboard;