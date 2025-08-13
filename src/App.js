import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import RepoList from './components/RepoList';
import ChartsDashboard from './components/ChartsDashboard';
import axios from 'axios';

function App() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [cached, setCached] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setError('');
    try {
      const { data } = await axios.get(`https://github-analyzer-backend-hdi0.onrender.com/search/${username}`);
      setProfile(data.profile);
      setRepos(data.repos);
      setCached(data.cached);
    } catch {
      setError('User not found');
      setProfile(null);
      setRepos([]);
    }
  };

  const handleBack = () => {
    setProfile(null);
    setRepos([]);
    setCached(false);
    setError('');
  };

  // Homepage styles
  const homeStyle = {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #74ABE2, #5563DE)',
    fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  };

  const cardStyle = {
    textAlign: 'center',
    color: '#fff',
    padding: '40px 20px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.15)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    maxWidth: '700px',
    width: '90%',
    animation: 'fadeIn 1.2s ease',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#e0e0e0',
  };

  return (
    <>
      {!profile ? (
        <div style={homeStyle}>
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}
          </style>
          <div style={cardStyle}>
            <h1 style={titleStyle}>GitHub Analyzer</h1>
            <p style={subtitleStyle}>
              Enter a GitHub username to explore repositories with AI-powered summaries.
            </p>
            <SearchBar onSearch={handleSearch} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
          <button
            onClick={handleBack}
            style={{
              marginBottom: 20,
              padding: '8px 16px',
              backgroundColor: '#5563DE',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer'
            }}
          >
            ← Back
          </button>
          <ProfileCard profile={profile} cached={cached} />
          <ChartsDashboard repos={repos} />
          <RepoList repos={repos} />
        </div>
      )}
    </>
  );
}

export default App;
