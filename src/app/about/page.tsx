"use client";

const About = () => {
  return (
    <main className="bg-[#272525] min-h-screen text-white px-10 md:px-24 py-24 space-y-20">
      <h1 className="text-[140px] md:text-[180px] leading-none font-light">
        <span className="text-white font-light">
          <span className="text-red-500 font-medium">A</span>bout
        </span>
      </h1>

      <section className="space-y-6 border-l-4 border-cyan-600 pl-6 max-w-4xl text-2xl text-gray-300 font-extralight">
        <p>
          Hey! I’m Sarvesh Srinath, a Computer Science & Artificial Intelligence
          undergraduate at Newton School of Technology, Delhi. My journey into
          tech began in 11th grade with Python and MySQL, and since then, I’ve
          been passionate about building meaningful software that blends
          simplicity with purpose. <br />I love simple, message-conveying design
          — clean UIs that do what they’re supposed to, without unnecessary
          complexity. I enjoy working across the stack, especially with{" "}
          <strong className="text-white">Swift</strong>,{" "}
          <strong className="text-white">React</strong>, and{" "}
          <strong className="text-white">Next.js</strong>, and I’ve been diving
          deeper into app development and modern web technologies.
        </p>
      </section>
      <section className="border-l-4 border-cyan-600 pl-6 text-2xl font-extralight">
        <p>
          You’ll often find me working on fintech ideas, building side projects,
          or experimenting with product concepts that <br /> make life a little
          easier. I’m also active on Codeforces and HackerRank, where I hold a
          5-star rating in Python, and I’m <br />
          always looking for new challenges to grow as a developer. <br />{" "}
          Outside of code, I enjoy staying fit, playing the piano, and engaging
          in sports.
        </p>
      </section>
    </main>
  );
};

export default About;
