import React from 'react';

export const AboutContent: React.FC = () => {
  return (
    <div className="mt-32 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold animate__animated animate__flash">
        WHY A CLOTHING STORE?
      </h3>

      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-lime-700 font-bold mt-2 animate__animated animate__flash">
        WHY THIS THEME?
      </h3>

      <p className="text-white mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
        I am a passionate fan of video games, particularly the competitive aspects of titles such as Gears of War,
        Halo, Call of Duty, and others. The competitive scene in these games involves high-stakes tournaments and
        competitions where teams, composed of professional players, battle it out for prestige and prizes. These players
        are often sponsored by various gaming companies and are outfitted with exclusive apparel designed specifically
        for them, which plays a vital role in their branding and performance.
      </p>

      <p className="text-white mt-8 sm:mt-12 md:mt-10 lg:mt-10 mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
        The clothing made for these gamers is the foundational focus of this website. It is a curated collection of
        gaming-inspired apparel that, from a personal perspective, I believe represents some of the finest designs ever
        created in the world of gaming merchandise. These collections not only capture the essence of gaming culture
        but also highlight the intersection of fashion and the esports industry, where style and performance come
        together seamlessly. The items featured on this site are selected based on their quality, aesthetic appeal,
        and the impact they've had in shaping the competitive gaming community.
      </p>
    </div>
  );
};
