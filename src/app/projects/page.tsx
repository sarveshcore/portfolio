"use client";

export default function Projects() {
  return (
    <main className="bg-[#272525] min-h-screen text-white px-10 md:px-24 py-24">
      <h1 className="text-[140px] md:text-[180px] leading-none font-light mb-24">
        <span className="text-red-500 font-light">P</span>rojects
      </h1>

      <ul className="space-y-32">
        <li>
          <a
            href="https://github.com/sarveshcore/simple-todo-list"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="font-thin text-5xl text-[#9E9D9D] transition hover:text-[#4DFFFF]">
              A simple todo list.
            </div>
          </a>
          <p className="text-base text-red-300 mt-3 pl-5 md:pl-20 max-w-3xl">
            A simple todo list that can perform all the basic CRUD
            operations,built using React, TailwindCSS, and JavaScript.
          </p>
        </li>

        <li>
          <a
            href="https://github.com/sarveshcore/simple-todo-list"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="font-thin text-5xl text-[#9E9D9D] transition hover:text-[#4DFFFF]">
              Random sport/workout generator.
            </div>
          </a>
          <p className="text-base text-red-300 mt-3 pl-5 md:pl-20 max-w-3xl">
            Built using the documentation from official SwiftUI, using Xcode and
            SwiftUI.
          </p>
        </li>
      </ul>
    </main>
  );
}
