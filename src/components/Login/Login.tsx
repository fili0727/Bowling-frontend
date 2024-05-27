import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styling/login.css';

interface LoginProps {
    checkLogin: () => void;
}

export default function Login({ checkLogin }: LoginProps) {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<string | null>(null);

    const navigate = useNavigate();

    function handleEnterKeyPress(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            handleLogin();
        }
    }

    function handleLogin() {
        checkLogin();
        setUsername('');
        setPassword('');
        setErrors(null);
        navigate('/booking'); // Redirect to /booking after successful login
    }

    return (
        <div className="login-container">
            <h2 className="login-container-title">Login</h2>
            <div className="input-group">
                <label className="login-label" htmlFor="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    className="login-input"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                />
            </div>
            <div className="input-group">
                <label className="login-label" htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    className="login-input"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    onKeyDown={handleEnterKeyPress}
                />
            </div>
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
            {errors && <p className="login-error-text">Invalid login</p>}
        </div>
    );
}
