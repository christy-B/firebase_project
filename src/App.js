import React from 'react';
import SignIn from './Component/Auth';

function App() {
  return (
    <div style={{minHeight:'100vh',display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        <h1 style={{color:'#007bff' }}>FIREBASE PROJECT</h1>
        <SignIn/>
      </div>
    </div>
  
  );
}

export default App;
