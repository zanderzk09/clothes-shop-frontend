import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';

export const ClothesApp: React.FC = () => {
  return (
    <div>

      <Routes>

        {publicRoutes.map(({ path, Component }) => (

          <Route key={path} path={path} element={<Component />} />

        ))}
        
        <Route path="*" element={<Navigate to="/home" />} />

      </Routes>

    </div>
  );
};



