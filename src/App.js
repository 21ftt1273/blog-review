import blogimage from "./illustration-article.svg";
import avatarimage from "./image-avatar.webp";
import "./App.css";

function App() {
  return (
    <div className=" flex flex-col h-screen items-center justify-center bg-custom-yellow px-7">
      <div
        className=" sm:w-96 sm:text-left bg-white rounded-[25px] border-[1px] border-black shadow-sm overflow-hidden "
        style={{ boxShadow: "0.5rem 0.5rem black" }}
      >
        <div>
          <img
            className=" rounded-[30px] p-5 w-full"
            src={blogimage}
            alt="blogimage"
          />
          <div className=" font-figtree text-left px-5 space-y-5">
            <span className=" bg-yellow-300 pl-4 pr-4 pt-1 pb-1 font-bold rounded-[6px] text-sm ">
              Learning
            </span>
            <h1 className=" text-[13px] font-medium ">Published 21 Dec 2023</h1>
            <h1 className=" font-bold text-xl">HTML & CSS Foundations</h1>
            <h1 className=" text-gray-400 text-[16px]">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </h1>
            <div className=" flex flex-row items-center pb-5 ">
              <img className=" size-8" src={avatarimage} alt="men" />
              <h1 className=" px-2 font-extrabold text-sm ">Greg Hooper</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
