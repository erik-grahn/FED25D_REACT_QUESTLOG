const Hero = () => {
  return (
    <section className="flex justify-center my-32">
      <div className="relative w-full max-w-204 @container">
        <img src="/computer2.png" alt="" className="w-full" />

        <p className="absolute top-[42%] left-1/2 -translate-x-1/2 whitespace-nowrap text-game-text">
          <span className="typing">Wanna play a game..</span>
          <span className="blinking-dot">.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
