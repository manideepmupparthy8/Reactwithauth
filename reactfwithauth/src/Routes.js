import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path="/" exact>
                <PrivateRoute>
                    <UserInfoPage />
                </PrivateRoute>
            </Route>
            <Route path="/login">
                <LogInPage />
            </Route>
            <Route path="/reset-password">
                <PasswordResetLandingPage />
            </Route>
            <Route path="/signup">
                <SignUpPage />
            </Route>
            </Switch>
        </Router>
    );
}
