import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ClothesApp } from './routes/ClothesApp';
import './index.css';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <ClothesApp />
    </StrictMode>
  </BrowserRouter> 

);
