import Greetings from "~/components/Greetings";

function App() {
  return (
    <>
      <div className="flex items-center justify-start min-h-screen bg-[#272525] px-20">
        {/* <div className="relative min-h-screen bg-[#272525] px-20">
          <h1 className="absolute top-60 text-[188px] leading-none text-white">
            <span className="font-medium">H</span>
            <span className="font-thin">ello</span>
            <span className="font-light">!</span>
          </h1>
        </div> */}
        <Greetings />
      </div>
      <p className="font-thin text-3xl text-[#9E9D9D] absolute bottom-20 left-20">
        My name is Sarvesh,
        <br />
        pursuing first year of
        <span className="font-medium text-[#82C0CC]">
          {" "}
          Btech Computer Science
        </span>
        <br />
        <span className="font-medium text-[#584495]">
          Newton School of Technology
        </span>{" "}
        in Delhi NCR.
      </p>
    </>
  );
}

export default App;
