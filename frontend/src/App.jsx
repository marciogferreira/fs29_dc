import { createContext, useState } from 'react';
import Login from './pages/Login';
import Painel from './pages/Painel';
import AppRoutes from './routes/AppRoutes';

export const AuthContext = createContext();

function App() {

  const[logado, setLogado] = useState(false);
  return ( 
    <AuthContext.Provider value={{ logado, setLogado }}>
      {logado ? <AppRoutes /> : <Login />}
    </AuthContext.Provider>
  )
}

export default App
