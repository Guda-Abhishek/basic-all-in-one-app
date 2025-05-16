import React, { useState } from 'react';
import { FaCar, FaBus, FaTrain, FaPlane, FaMoneyBillWave, FaDownload, FaExclamationTriangle, 
  FaMapMarkedAlt, FaWheelchair, FaRoute, FaTicketAlt, FaBell, FaQrcode, FaCalculator } from 'react-icons/fa';

const TrafficPage = () => {
  const [activeTab, setActiveTab] = useState('vehicle');
  const [showModal, setShowModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Vehicle Services Data
  const vehicleServices = [
    { id: 'reg', title: 'Vehicle Registration', status: 'New, Transfer, Duplicate', icon: <FaCar /> },
    { id: 'dl', title: 'Driving License', status: 'Apply, Renew, Duplicate', icon: <FaTicketAlt /> },
    { id: 'ins', title: 'Insurance Status', status: 'Check & Renew', icon: <FaExclamationTriangle /> },
    { id: 'fit', title: 'Fitness Certificate', status: 'Issue & Renewal', icon: <FaCar /> },
    { id: 'puc', title: 'PUC Certificate', status: 'Check Status', icon: <FaBell /> },
    { id: 'echallan', title: 'e-Challan Status', status: 'Check & Pay', icon: <FaMoneyBillWave /> },
    { id: 'tax', title: 'Tax Calculator', status: 'Calculate vehicle tax', icon: <FaCalculator /> },
    { id: 'qr', title: 'Vehicle/Owner Verification', status: 'Via QR Code', icon: <FaQrcode /> },
    { id: 'permit', title: 'Permit Services', status: 'Commercial, National, Local', icon: <FaRoute /> }
  ];

  // Bus Transport Data
  const busServices = [
    { id: 'booking', title: 'Online Bus Ticket Booking', description: 'Book tickets for all State RTCs' },
    { id: 'schedule', title: 'Bus Schedule & Timetable', description: 'Check timings for all routes' },
    { id: 'tracking', title: 'Live Bus Tracking', description: 'Real-time location and ETAs' },
    { id: 'interstate', title: 'Inter-State Bus Integration', description: 'Seamless interstate travel' },
    { id: 'fare', title: 'Fare Estimation', description: 'Calculate fares for your journey' },
    { id: 'cancel', title: 'Ticket Cancellation & Refunds', description: 'Easy refund processing' },
    { id: 'pnr', title: 'PNR Status Checking', description: 'Track your booking status' },
    { id: 'pass', title: 'Conductor-Free Bus Pass', description: 'Digital pass scanning' },
    { id: 'geo', title: 'Geo-Fencing Alerts', description: 'For school/private buses' }
  ];

  // Train Services Data
  const trainServices = [
    { id: 'booking', title: 'Train Ticket Booking', description: 'IRCTC Integration' },
    { id: 'cancel', title: 'Cancellation & Refunds', description: 'Process ticket refunds' },
    { id: 'status', title: 'Real-Time Train Status', description: 'Live updates on train location' },
    { id: 'platform', title: 'Platform/Coach Position', description: 'Find your train easily' },
    { id: 'tatkal', title: 'Special Train & Tatkal Alerts', description: 'Never miss booking windows' },
    { id: 'pnr', title: 'PNR Tracking', description: 'Track your booking status' },
    { id: 'food', title: 'Food Booking On Train', description: 'Order meals in advance' }
  ];

  // Air Transport Data
  const airServices = [
    { id: 'flight', title: 'Flight Status Tracking', description: 'Via UMANG/IRCTC Air' },
    { id: 'shuttle', title: 'Airport Shuttle Bus Info', description: 'Find transport to/from airports' },
    { id: 'delay', title: 'Real-Time Flight Delay Alerts', description: 'Get notified about changes' },
    { id: 'taxi', title: 'Airport Taxi Fare Estimator', description: 'Plan your airport transfers' },
    { id: 'luggage', title: 'Lost Luggage Complaint', description: 'Report and track missing items' }
  ];

  // Advanced Features Data
  const advancedFeatures = [
    { id: 'traffic', title: 'Real-Time Traffic Updates', description: 'Live maps showing congestion, roadblocks & accidents' },
    { id: 'journey', title: 'Multi-Modal Journey Planner', description: 'Plan trips across bus, metro, train & cabs' },
    { id: 'emergency', title: 'Emergency Response', description: 'One-tap SOS alerting for help' },
    { id: 'occupancy', title: 'Real-Time Bus Occupancy', description: 'Check crowd levels before boarding' },
    { id: 'unified', title: 'Unified e-Challan History', description: 'View & dispute traffic violations' },
    { id: 'toll', title: 'Dynamic Toll Calculator', description: 'FASTag insights & recharge' },
    { id: 'lastmile', title: 'Last-Mile Smart Mobility', description: 'Book e-rickshaws, autos & bikes' },
    { id: 'accessible', title: 'Accessible Mobility', description: 'Services for disabled & elderly users' },
    { id: 'offline', title: 'Offline-First Functionality', description: 'SMS/IVRS access in low-connectivity areas' },
    { id: 'theft', title: 'Vehicle Theft Tracking', description: 'Report & track stolen vehicles' }
  ];

  // User Alerts & Notifications
  const userAlerts = [
    { type: 'E-Challan', message: 'No Pending Challans', severity: 'success' },
    { type: 'Vehicle Insurance', message: 'Expires in 45 days', severity: 'warning' },
    { type: 'Driving License', message: 'Renewal due in 2 months', severity: 'info' },
    { type: 'PUC Certificate', message: 'EXPIRED - Renew immediately', severity: 'danger' }
  ];

  // Downloadable Forms
  const downloadableForms = [
    { id: 'reg-form', title: 'Vehicle Registration Form' },
    { id: 'dl-form', title: 'Driving License Form' },
    { id: 'transfer-form', title: 'Ownership Transfer Form' },
    { id: 'insurance-cert', title: 'Insurance Certificate Format' },
    { id: 'puc-form', title: 'PUC Application Form' }
  ];

  const renderServiceCards = (services) => {
    const filtered = searchQuery 
      ? services.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase())) 
      : services;
      
    return (
      <div className="service-grid">
        {filtered.map((service) => (
          <div key={service.id} className="service-card" onClick={() => setShowModal(service.id)}>
            <div className="service-icon">{service.icon || <FaCar />}</div>
            <h4>{service.title}</h4>
            <p>{service.status || service.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderModalContent = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Service Details</h3>
            <button className="close-btn" onClick={() => setShowModal(null)}>×</button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Vehicle Number / ID</label>
              <input type="text" placeholder="Enter vehicle number" />
            </div>
            
            <div className="form-group">
              <label>Service Type</label>
              <select>
                <option>New Application</option>
                <option>Renewal</option>
                <option>Duplicate</option>
                <option>Transfer</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Upload Documents</label>
              <div className="upload-box">
                <p>Click to upload or drag files here</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="primary-btn">Submit Application</button>
            <button className="secondary-btn" onClick={() => setShowModal(null)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="traffic-page">
      <header className="page-header">
        <h1>🚦 Traffic & Vehicle Management</h1>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search services..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <div className="tab-container">
        <div className="tabs">
          <button 
            className={activeTab === 'vehicle' ? 'active' : ''} 
            onClick={() => setActiveTab('vehicle')}
          >
            <FaCar /> Vehicle Services
          </button>
          <button 
            className={activeTab === 'bus' ? 'active' : ''} 
            onClick={() => setActiveTab('bus')}
          >
            <FaBus /> Bus Services
          </button>
          <button 
            className={activeTab === 'train' ? 'active' : ''} 
            onClick={() => setActiveTab('train')}
          >
            <FaTrain /> Train Services
          </button>
          <button 
            className={activeTab === 'air' ? 'active' : ''} 
            onClick={() => setActiveTab('air')}
          >
            <FaPlane /> Air Transport
          </button>
          <button 
            className={activeTab === 'advanced' ? 'active' : ''} 
            onClick={() => setActiveTab('advanced')}
          >
            <FaMapMarkedAlt /> Advanced Features
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'vehicle' && (
            <div>
              <section className="alerts-section">
                <h2>📱 Your Alerts & Notifications</h2>
                <div className="alerts-container">
                  {userAlerts.map((alert, index) => (
                    <div key={index} className={`alert-item ${alert.severity}`}>
                      <strong>{alert.type}:</strong> {alert.message}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2>🚗 Vehicle Services</h2>
                {renderServiceCards(vehicleServices)}
              </section>

              <section className="forms-section">
                <h2>📥 Downloadable Forms</h2>
                <div className="forms-container">
                  {downloadableForms.map((form, index) => (
                    <div key={index} className="form-item">
                      <FaDownload /> <a href={`#${form.id}`}>{form.title}</a>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'bus' && (
            <section>
              <h2>🚌 Public Transport & Bus Services</h2>
              {renderServiceCards(busServices)}
            </section>
          )}

          {activeTab === 'train' && (
            <section>
              <h2>🚆 Railway Services</h2>
              {renderServiceCards(trainServices)}
            </section>
          )}

          {activeTab === 'air' && (
            <section>
              <h2>✈️ Air Transport</h2>
              {renderServiceCards(airServices)}
            </section>
          )}

          {activeTab === 'advanced' && (
            <section>
              <h2>💡 Advanced Features</h2>
              {renderServiceCards(advancedFeatures)}
              
              <div className="accessibility-section">
                <h3><FaWheelchair /> Accessible Mobility Solutions</h3>
                <p>Find transportation options suitable for elderly and physically challenged citizens</p>
                <button className="primary-btn">Find Accessible Services</button>
              </div>
            </section>
          )}
        </div>
      </div>

      {showModal && renderModalContent()}

      <section className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button><FaMoneyBillWave /> Pay E-Challan</button>
          <button><FaExclamationTriangle /> Report Traffic Violation</button>
          <button><FaMapMarkedAlt /> Check Live Traffic</button>
          <button><FaQrcode /> Scan Vehicle QR</button>
        </div>
      </section>

      <footer className="page-footer">
        <p>For emergency assistance, call the Traffic Helpline: <strong>1073</strong></p>
      </footer>
    </div>
  );
};

export default TrafficPage;

