import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);
  const [quote, setQuote] = useState();

  //event handler

  const handleNext = () => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[88px] h-[88px] bg-[#6F6CFF] rounded-full absolute -top-7 -left-7"></div>
      {quote === undefined ? (
        <div className="text-white">Loading...</div>
      ) : (
        <div className="w-[90vw] max-h-[30vh] flex flex-col items-center justify-center translate-y-6">
          <h2 className="font-quote text-[15px] sm:text-[32px] md:font-secondaryQuote text-white w-[90%] lg:text-[47px]">
            {quote.quote}
          </h2>
          <h6 className="font-quote text-[10px] sm:text-[16px] mt-8 w-[90%] text-white text-end lg:text-[20px] md:font-secondaryQuote">
            {quote.character}
          </h6>
        </div>
      )}
      <button
        onClick={handleNext}
        className="mt-[5em] text-white bg-[#6F6CFF] w-[85vw] py-2 sm:py-4 translate-y-6 rounded-sm"
      >
        Next Quote
      </button>
      <p className="w-[85%] text-white mt-[3em] text-[10px] sm:text-[15px]  translate-y-6">
        Anime: {quote?.anime}
      </p>
    </div>
  );
}

export default App;
