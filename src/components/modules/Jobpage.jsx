import React, { useState } from 'react';
import './styles/Jobpage.css';

const officialLinks = {
  'Delhi': {
    Railway: 'https://indianrailways.gov.in/recruitment',
    Police: 'https://delhipolice.nic.in/recruitment',
    Teacher: 'https://education.delhi.gov.in/teacher-recruitment',
    GroupExams: 'https://delhigroup.exams.gov.in',
  },
  'Punjab': {
    Railway: 'https://indianrailways.gov.in/recruitment',
    Police: 'https://punjabpolice.gov.in/jobs',
    Teacher: 'https://education.punjab.gov.in/teacher-jobs',
    GroupExams: 'https://punjabpsc.gov.in',
  },
  'Central': {
    Railway: 'https://indianrailways.gov.in/recruitment',
    Police: 'https://mha.gov.in/police-jobs',
    Teacher: 'https://teindia.gov.in/teacher-recruitment',
    GroupExams: 'https://upsc.gov.in',
  }
  // add other states and UTs similarly
};

const allJobs = [
  {
    id: 1,
    title: 'Junior Engineer',
    location: 'Delhi',
    type: 'Central',
    ministry: 'Ministry of Railways',
    industry: 'Engineering',
    category: 'Railway',
    lastDate: '2025-05-20',
  },
  {
    id: 2,
    title: 'Agricultural Officer',
    location: 'Punjab',
    type: 'State',
    ministry: 'Ministry of Agriculture',
    industry: 'Farming',
    category: 'GroupExams',
    lastDate: '2025-05-22',
  },
  {
    id: 3,
    title: 'IT Officer',
    location: 'Karnataka',
    type: 'State',
    ministry: 'Ministry of IT',
    industry: 'Technology',
    category: 'Teacher',
    lastDate: '2025-06-01',
  },
  {
    id: 4,
    title: 'Clerk',
    location: 'Maharashtra',
    type: 'Central',
    ministry: 'Ministry of Finance',
    industry: 'Administration',
    category: 'GroupExams',
    lastDate: '2025-05-18',
  },
];

const Jobpage = () => {
  const [filterType, setFilterType] = useState('All');
  const [filterState, setFilterState] = useState('');
  const [filterMinistry, setFilterMinistry] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('');

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi' // UT
  ];

  const ministries = [
    // ... your ministries
  ];

  const industries = [
    // ... your industries
  ];

  const filteredJobs = allJobs.filter(job => {
    return (
      (filterType === 'All' || job.type === filterType) &&
      (!filterState || job.location === filterState) &&
      (!filterMinistry || job.ministry === filterMinistry) &&
      (!filterIndustry || job.industry === filterIndustry)
    );
  });

  return (
    <div className="agri-container">
      <div className="agri-section">
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>🇮🇳 India Government Job Portal</h1>

        {/* Filters Section */}
        <div className="filters">
          <div>
            <label>Job Type: </label>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="All">All</option>
              <option value="Central">Central</option>
              <option value="State">State</option>
            </select>
          </div>
          <div>
            <label>State: </label>
            <select value={filterState} onChange={(e) => setFilterState(e.target.value)}>
              <option value="">All</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Ministry: </label>
            <select value={filterMinistry} onChange={(e) => setFilterMinistry(e.target.value)}>
              <option value="">All</option>
              {ministries.map((min) => (
                <option key={min} value={min}>{min}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Industry: </label>
            <select value={filterIndustry} onChange={(e) => setFilterIndustry(e.target.value)}>
              <option value="">All</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job List Section */}
        <div className="job-list">
          {filteredJobs.length === 0 ? (
            <p>No jobs found for the selected filters.</p>
          ) : (
            filteredJobs.map(job => (
              <div className="job-card" key={job.id}>
                <h3>{job.title}</h3>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Ministry:</strong> {job.ministry}</p>
                <p><strong>Industry:</strong> {job.industry}</p>
                <p><strong>Last Date to Apply:</strong> {job.lastDate}</p>
                <a
                  href={
                    officialLinks[job.location]?.[job.category] ||
                    officialLinks[job.type]?.[job.category] ||
                    '#'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="official-link"
                >
                  Official Job Notification
                </a>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Jobpage;