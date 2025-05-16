import React, { useState } from 'react';
import './styles/AgriPage.css';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const dataSets = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  data: [
    { name: 'Mon', temp: 20 + i, humidity: 60 - i, soil: 30 + i, water: 70 + i },
    { name: 'Tue', temp: 21 + i, humidity: 58 - i, soil: 35 + i, water: 68 + i },
    { name: 'Wed', temp: 22 + i, humidity: 62 - i, soil: 34 + i, water: 69 + i },
    { name: 'Thu', temp: 23 + i, humidity: 59 - i, soil: 33 + i, water: 65 + i },
    { name: 'Fri', temp: 24 + i, humidity: 61 - i, soil: 31 + i, water: 66 + i },
  ],
  crops: [
    { name: 'Wheat', value: 40 + i },
    { name: 'Rice', value: 30 + i },
    { name: 'Corn', value: 20 + i },
    { name: 'Millet', value: 10 + i },
  ],
  cost: [
    { name: 'Fertilizer', cost: 1000 + i * 50 },
    { name: 'Irrigation', cost: 2000 + i * 80 },
    { name: 'Seeds', cost: 1500 + i * 60 },
  ],
}));

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AgriPage = () => {
  const [setIndex, setSetIndex] = useState(0);
  const currentData = dataSets[setIndex];

  const handleRefresh = () => {
    setSetIndex((prevIndex) => (prevIndex + 1) % dataSets.length);
  };

  return (
    <div className="agri-container">
    <div className="agri-section">

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>🌱 AgriTech Dashboard</h1>
      </div>
      <button onClick={handleRefresh} style={{ marginBottom: '1rem' }}>
        🔁 Refresh Dataset
      </button>

      <h3>🌡️ Temperature & Humidity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={currentData.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp" stroke="#ff7300" />
          <Line type="monotone" dataKey="humidity" stroke="#387908" />
        </LineChart>
      </ResponsiveContainer>

      <h3>🌱 Soil & 💧 Water Resources</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={currentData.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="soil" fill="#82ca9d" />
          <Bar dataKey="water" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h3>🌾 Crop Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={currentData.crops}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {currentData.crops.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <h3>💸 Cost Analysis</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={currentData.cost}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cost" fill="#ff6b6b" />
        </BarChart>
      </ResponsiveContainer>

      <h3>📊 Predictions & 📈 Trends</h3>
      <p>
        Based on current trends, crop yield will improve by {(5 + setIndex)}% in the next week.
        Water usage efficiency is predicted to rise by {(2 + setIndex)}%.
      </p>

      <h3>✅ Suggestions</h3>
      <ul>
        <li>Use nitrogen-rich fertilizers this week.</li>
        <li>Monitor humidity daily in morning hours.</li>
        <li>Deploy irrigation sensors in East fields.</li>
      </ul>

      <h3>🚨 Alerts</h3>
      <p style={{ color: 'red' }}>
        Disease alert in Zone A. Apply protective spray in next 24 hours.
      </p>
    
    </div>
    </div>
  );
};

export default AgriPage;
