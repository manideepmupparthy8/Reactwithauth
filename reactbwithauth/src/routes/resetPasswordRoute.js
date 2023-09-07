import bcrypt from 'bcrypt';
import { getDbConnection } from '../db';

export const resetPasswordRoute = {
    path: '/api/users/reset-password',
    method: 'put',
    handler: async (req, res) => {
        const { email, newPassword } = req.body;

        // Check if the email and newPassword are provided
        if (!email || !newPassword) {
            return res.status(400).json({ message: 'Email and newPassword are required' });
        }

        const db = getDbConnection('react-auth-db');

        // Hash the new password
        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        // Find the user by email and update the password
        const result = await db.collection('users')
            .findOneAndUpdate({ email }, {
                $set: { passwordHash: newPasswordHash },
            });

        res.sendStatus(200);
    },
};
