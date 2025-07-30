import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  Users, 
  AlertTriangle, 
  MessageCircle, 
  Calendar, 
  FolderOpen, 
  LogOut,
  Menu,
  X,
  Search,
  Filter,
  Download,
  ChevronDown
} from "lucide-react";

const AdminResidents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Users, label: "Residents", active: true },
    { icon: AlertTriangle, label: "Alerts" },
    { icon: MessageCircle, label: "Communication" },
    { icon: Calendar, label: "Events" },
    { icon: FolderOpen, label: "Resources" },
    { icon: LogOut, label: "Log Out" },
  ];

  const residents = [
    {
      name: "Killini Moh",
      contact: "09954440558",
      email: "killinimoh@gmail.com",
      unit: "Blk 2 Lot 3"
    },
    {
      name: "Ulla Gloria",
      contact: "09998447736",
      email: "gloria@gmail.com",
      unit: "Blk 4 Lot 9"
    },
    {
      name: "Stephen Curry",
      contact: "09663325444",
      email: "stephen@gmail.com",
      unit: "Blk 8 Lot 2"
    },
    {
      name: "Lucas Modie",
      contact: "09887744456",
      email: "lucas@gmail.com",
      unit: "Blk 2 Lot 8"
    },
    {
      name: "Mak Naynok",
      contact: "09885647777",
      email: "makmak@gmail.com",
      unit: "Blk 3 Lot 2"
    },
    {
      name: "Balwarte Alfredo",
      contact: "09885544775",
      email: "balwarte@gmail.com",
      unit: "Blk 18 Lot 5"
    }
  ];

  return (
    <div className="admin-residents">
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
            <h1 className="page-title">Admin Residents</h1>
            <p className="page-subtitle">An organized and reliable office professional.</p>
          </div>
          <button className="about-btn">About</button>
        </header>

        {/* Controls */}
        <div className="residents-controls">
          <div className="search-section">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <Input 
                placeholder="Search residents..." 
                className="search-input"
              />
            </div>
            
            <div className="filter-dropdown">
              <button className="dropdown-btn">
                All Units
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="filter-btn">
              <Filter size={20} />
            </button>
            <button className="export-btn">
              <Download size={20} />
            </button>
          </div>
        </div>

        {/* Residents Table */}
        <div className="residents-section">
          <h2 className="section-title">Manage Resident</h2>
          
          <div className="table-container">
            <div className="table-wrapper">
              <table className="residents-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Unit</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {residents.map((resident, index) => (
                    <tr key={index}>
                      <td className="name-cell">{resident.name}</td>
                      <td className="contact-cell">{resident.contact}</td>
                      <td className="email-cell">{resident.email}</td>
                      <td className="unit-cell">{resident.unit}</td>
                      <td className="actions-cell">
                        <Button className="view-btn">View</Button>
                        <Button className="remove-btn">Remove</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && <div className="mobile-overlay" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
};

export default AdminResidents;