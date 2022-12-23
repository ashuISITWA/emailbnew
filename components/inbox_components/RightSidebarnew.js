import React from "react";
import projectPhoto1 from "../../public/images/user.bmp";
import projectPhoto2 from "../../public/images/user.bmp";
import projectPhoto3 from "../../public/images/user.bmp";
import Image from "next/image";
const people = [
  {
    name: "Calvin Hawkins",
    subText: "Cillum occaecat fugiat sunt laboris .",
    number: "5443",
    image: projectPhoto1,
  },
  {
    name: "Kristen Ramos",
    subText: "Culpa nostrud duis id culpa ea do officia exercitation labore.",
    number: "43",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    subText: "Occaecat ea sunt fugiatlabore est Lorem ex ea.",
    number: "655",
    image: projectPhoto3,
  },
];

function RightSidebar() {
  return (
    <>
      <aside className="hidden xl:block xl:flex-shrink-0 w-80">
        <div className="relative flex h-full w-full flex-col border-r border-gray-200 bg-gray-100">
          <div className="block p-4 bg-slate-100">
            <form action="">
              <div className="flex items-center gap-1">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="grow">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-slate-100 text-black fs-14"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="px-2">
            <ul role="list" className="block">
              {people.map((person) => (
                <li
                  key={person.name}
                  className="block bg-slate-100 hover:bg-slate-200 rounded-xl mb-1 overflow-hidden"
                >
                  <a href="#" className="flex gap-2 p-2">
                    <Image
                      width={400}
                      height={400}
                      className="h-10 w-10 rounded-full"
                      src={person.image}
                      alt="images"
                    />
                    <div className="flex flex-col gap-1 w-[200px]">
                      <p className="text-sm font-medium text-gray-900">
                        {person.name}
                      </p>
                      <p className="text-[12px] w-[170px] text-gray-500 truncate overflow-hidden">
                        {person.subText}
                      </p>
                    </div>
                    <p className="bg-slate-300 text-[11px] py-1 px-2 rounded-lg self-start">
                      {person.number}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default RightSidebar;
