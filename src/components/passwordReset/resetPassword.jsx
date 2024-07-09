import React, { useState } from 'react'

const ResetPassword = () => {
    const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/reset-password`, { token, newPassword });
      setMessage(response.data); // Assuming backend sends a success message
    } catch (error) {
      setMessage(error.response.data); // Display error message from backend
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter your token"
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
  
}

export default ResetPassword
