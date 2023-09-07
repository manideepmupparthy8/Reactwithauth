import React, { useState } from 'react';
import axios from 'axios';
import { PasswordResetSuccess } from './PasswordResetSuccess';
import { PasswordResetFail } from './PasswordResetFail';

export const PasswordResetLandingPage = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleResetPassword = async () => {
    try {
      const response = await axios.put('/api/users/reset-password', {
        email,
        newPassword,
      });
      
      if (response.status === 200) {
        setIsSuccess(true);
      }
    } catch (error) {
      setIsFailure(true);
    }
  };

  if (isFailure) return <PasswordResetFail />
  if (isSuccess) return <PasswordResetSuccess />

  return (
    <div>
      <h2>Reset Password</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
}