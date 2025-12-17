const API_URL = 'http://localhost:5003';

export const db = {
  async getDonorById(id) {
    const response = await fetch(`${API_URL}/donor/${id}`);
    return response.json();
  },

  async updateDonorProfile(id, profileData) {
    const response = await fetch(`${API_URL}/donor/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData)
    });
    return response.json();
  },

  async getDonorStats(donorId) {
    const response = await fetch(`${API_URL}/donor/${donorId}/stats`);
    return response.json();
  },

  async getDonorAchievements(donorId) {
    const response = await fetch(`${API_URL}/donor/${donorId}/achievements`);
    return response.json();
  },

  async getAllHospitals() {
    const response = await fetch(`${API_URL}/hospitals`);
    return response.json();
  },

  async scheduleDonation(donationData) {
    const response = await fetch(`${API_URL}/donation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donationData)
    });
    return response.json();
  },

  async getScheduledDonations(donorId) {
    const response = await fetch(`${API_URL}/donor/${donorId}/scheduled`);
    return response.json();
  },

  async authenticateUser(email, password) {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data.user;
  },

  async registerDonor(userData) {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  }
};