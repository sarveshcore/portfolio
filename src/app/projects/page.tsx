const Projects = () => {
  return (
    <ul>
      <li className="absolute top-50 left-20">
        <a
          href="https://github.com/sarveshcore/simple-todo-list"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <span className="font-thin text-5xl text-[#9E9D9D] transition hover:text-[#4DFFFF]">
            A simple todo list.
          </span>
        </a>
        <p className="text-s text-red-300 mt-3 pl-20">
          A simple todo list that can perform all the basic CRUD operations,
          built using react,tailwindCSS and Javascript.
        </p>
      </li>
      <li className="absolute top-80 left-20">
        <a
          href="https://github.com/sarveshcore/simple-todo-list"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <span className="font-thin text-5xl text-[#9E9D9D] transition hover:text-[#4DFFFF]">
            Random sport/workout generator.
          </span>
        </a>
        <p className="text-s text-red-300 mt-3 pl-20">
          Built using the documentation from official swiftUI, using Xcode and
          swiftUI.
        </p>
      </li>
    </ul>
  );
};

export default Projects;
