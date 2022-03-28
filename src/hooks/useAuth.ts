import { useContext } from 'react';
import AuthContext from 'src/contexts/JWTContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
