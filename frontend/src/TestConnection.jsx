import { useState } from 'react';
import apiService from './services/api';

function TestConnection() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/health');
      const data = await response.json();
      setResult(`✅ Backend connected: ${JSON.stringify(data)}`);
    } catch (error) {
      setResult(`❌ Connection failed: ${error.message}`);
    }
    setLoading(false);
  };

  const testRegistration = async () => {
    setLoading(true);
    try {
      const testData = {
        email: 'test' + Date.now() + '@example.com',
        password: 'password123',
        userType: 'donor',
        firstName: 'Test',
        lastName: 'User',
        phone: '+250123456789',
        bloodType: 'O+',
        dateOfBirth: '1990-01-01',
        weight: 70,
        country: 'Rwanda'
      };
      
      const response = await apiService.register(testData);
      setResult(`✅ Registration successful: ${JSON.stringify(response)}`);
    } catch (error) {
      setResult(`❌ Registration failed: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>API Connection Test</h2>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testConnection}
          disabled={loading}
          style={{ 
            padding: '10px 20px', 
            marginRight: '10px',
            backgroundColor: '#701C45',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Test Backend Connection
        </button>
        <button 
          onClick={testRegistration}
          disabled={loading}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Test Registration
        </button>
      </div>
      {loading && <p>Testing...</p>}
      {result && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: result.includes('✅') ? '#d4edda' : '#f8d7da',
          border: `1px solid ${result.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '5px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}>
          {result}
        </div>
      )}
    </div>
  );
}

export default TestConnection;