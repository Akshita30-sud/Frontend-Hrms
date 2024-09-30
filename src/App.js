import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/ComponentsCss/Authentication/authentication';
import Main from './Main';

function App() {
  return (
      <AuthProvider>
        <Main />
      </AuthProvider>
  );
}

export default App;












