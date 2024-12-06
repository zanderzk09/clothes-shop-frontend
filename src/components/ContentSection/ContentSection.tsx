import React from 'react';

import { HomeCards } from '../Home';
import { MainSubtitles } from '../Home';
import { MainTitles } from '../Home';
import { TeamIcons } from '../Home';

export const ContentSection: React.FC = () => {
  return (
    <div className="text-center mt-16 z-10">

      <MainTitles />

      <TeamIcons />

      <MainSubtitles />

      <HomeCards />
      
    </div>

  );
};
