import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout(props) {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('token');
        props.showAlert('Logged out successfully', 'success');
        navigate('/login');
    }, []);

    return null;  // No need to render anything in this component
}
