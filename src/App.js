import blogimage from "./illustration-article.svg";
import avatarimage from "./image-avatar.webp";
import "./App.css";

function App() {
  return (
    <div className=" flex flex-col h-screen items-center justify-center bg-custom-yellow px-7">
      <div className=" sm:text-left bg-white rounded-[30px] border shadow-sm overflow-hidden ">
        <div>
          <img className=" rounded-[30px] p-5 " src={blogimage} />
          <div className=" text-left px-5 space-y-5">
            <h1>Learning</h1>
            <h1>Published 21 December 2023</h1>
            <h1>HTML & CSS FOUNDATION</h1>
            <h1>
              These languages are the backbone of every website, defining
              structure, content, and presentation
            </h1>
            <div className=" flex flex-row items-center pb-5">
              <img className="" src={avatarimage} />
              <h1 className=" px-2">Greg Hooper</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
