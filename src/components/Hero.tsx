const Hero = () => {
  return (
    <section className="flex justify-center mt-6 mb-20">
      <div className="relative w-full max-w-152 @container">
        <img src="/computer2.png" alt="" className="w-full" />

        <p className="absolute top-[42%] left-[29%] whitespace-nowrap text-game-text text-xs min-[444px]:text-sm min-[544px]:text-lg sm:text-xl">
          <span className="typing">Wanna play a game..</span>
          <span className="blinking-dot">?</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
