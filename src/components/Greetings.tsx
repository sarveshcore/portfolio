import React from "react";
import { GooeyText } from "~/components/ui/gooey-text-morphing";

const Greetings = () => {
  return (
    <div className="relative min-h-screen bg-[#272525] px-20">
      <div className="absolute top-100 left-140">
        <GooeyText
          texts={["Hello!", "Ciao!", "Hola!", "Namaste!"]}
          morphTime={1}
          cooldownTime={0.25}
          textClassName="font-medium text-white leading-none"
        />
      </div>
    </div>
  );
};

export default Greetings;
