export const HomeCards = () => {
  return (
    <div className="relative mt-20"> 
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-60 justify-center items-center">
        
        <div className="flex justify-center items-center">
          <img
            src="/assets/clothes/jerseyGGB.webp"
            className="h-60 w-38 shadow-lg transition-transform duration-300 transform hover:scale-125 hover:shadow-2xl"
          />
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/assets/clothes/jerseyGGW.webp"
            className="h-60 w-38 shadow-lg transition-transform duration-300 transform hover:scale-125 hover:shadow-2xl"
          />
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/assets/clothes/jerseyGG.webp"
            className="h-60 w-38 shadow-lg transition-transform duration-300 transform hover:scale-125 hover:shadow-2xl"
          />
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/assets/clothes/jerseyGHOST.webp"
            className="h-60 w-38 shadow-lg transition-transform duration-300 transform hover:scale-125 hover:shadow-2xl"
          />
        </div>
        
      </div>
    </div>
  );
};


