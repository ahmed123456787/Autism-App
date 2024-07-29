import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/Information';
import Information from './components/Information';
import ScannerResult from './components/ScannerResult';
import FormChoice from './components/FormChoice';
import LongForm from './components/LongForm';
import ShortForm from './components/ShortForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormChoice />} />
        <Route path="/ShortForm" element={<ShortForm />} />
        <Route path="/LongForm" element={<LongForm />} />
        <Route path="/ScannerResult" element={<ScannerResult />} />
      </Routes>
    </Router>
  );
}

export default App;
