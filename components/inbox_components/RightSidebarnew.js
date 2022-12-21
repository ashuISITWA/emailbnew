import React from "react";
import projectPhoto1 from "../../public/images/user.bmp";
import projectPhoto2 from "../../public/images/user.bmp";
import projectPhoto3 from "../../public/images/user.bmp";
import Image from "next/image";
const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image: projectPhoto1,
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image: projectPhoto2,
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image: projectPhoto3,
  },
];

function RightSidebar() {
  return (
    <>
      <aside className="hidden xl:block xl:flex-shrink-0 w-80">
        <div className="relative flex h-full w-96 flex-col border-r border-gray-200 bg-gray-100">
          <div className="flex-shrink-0">
            <div className="flex h-16 flex-col justify-center bg-white px-6">
              <div className="flex items-baseline space-x-3">
                <h2 className="text-lg font-medium text-gray-900">Inbox</h2>
                <p className="text-sm font-medium text-gray-500">messages</p>
              </div>
            </div>
            <div className="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">
              Sorted by date
            </div>
          </div>
          <div className="px-3">
            <ul role="list" className="divide-y divide-gray-200">
              {people.map((person) => (
                <li key={person.email} className="flex py-4">
                  <Image
                    width={400}
                    height={400}
                    className="h-10 w-10 rounded-full"
                    src={person.image}
                    alt="images"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500">{person.email}</p>
                  </div>
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
