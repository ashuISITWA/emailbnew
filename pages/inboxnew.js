
import Link from "next/link";
import Image from "next/image";
import userimg from "../public/images/user.bmp";
import { Fragment, useState } from "react";
import pdficon from "../public/images/icons/pdf-icon.png";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArchiveBoxIcon as ArchiveBoxIconMini,
  ArrowUturnLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  FolderArrowDownIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  Bars3Icon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import LeftSidebar from "../components/inbox_components/LeftSidebar";
import RightSidebarnew from "../components/inbox_components/RightSidebarnew";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl: "/public/images/user.bmp",
};
const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

// const message = {
//   subject: 'Re: New pricing for existing customers',
//   sender: 'joearmstrong@example.com',
//   status: 'Open',
// items: [
//   {
//     id: 1,
//     author: 'Joe Armstrong',
//     date: 'Yesterday at 7:24am',
//     datetime: '2021-01-28T19:24',
//     body: "<p>Thanks so much! Can't wait to try it out.</p>",
//   },
//   {
//     id: 2,
//     author: 'Monica White',
//     date: 'Wednesday at 4:35pm',
//     datetime: '2021-01-27T16:35',
//     body: `
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
//       <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
//       <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
//     `,
//   },
//   {
//     id: 3,
//     author: 'Joe Armstrong',
//     date: 'Wednesday at 4:09pm',
//     datetime: '2021-01-27T16:09',
//     body: `
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
//       <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
//       <p>– Joe</p>
//     `,
//   },
// ],
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Inboxnew() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex h-full flex-col">
        {/* Top nav*/}
        <header className="relative flex h-16 flex-shrink-0 items-center bg-white md:ml-60">
          <div className="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
            <a
              href="#"
              className="flex h-16 w-16 items-center justify-center bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
            >
              <Image
                width={500}
                height={500}
                className="h-8 w-auto"
                src={userimg}
                alt="Your Company"
              />
            </a>
          </div>

          <div className="mx-auto lg:hidden">
            <div className="relative">
              <label htmlFor="inbox-select" className="sr-only">
                Choose inbox
              </label>
              <select
                id="inbox-select"
                className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-blue-600"
              >
                <option value="/open">Open</option>
                <option value="/archived">Archived</option>
                <option value="/assigned">Assigned</option>
                <option value="/flagged">Flagged</option>
                <option value="/spam">Spam</option>
                <option value="/drafts">Drafts</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 lg:hidden">
            <button
              type="button"
              className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="relative max-w-2xl text-gray-400 focus-within:text-gray-500">
                <label htmlFor="desktop-search" className="sr-only">
                  Search all inboxes
                </label>
                <input
                  id="desktop-search"
                  type="search"
                  placeholder="Search all inboxes"
                  className="block w-full bg-white border-transparent pl-12 placeholder-gray-500 focus:border-transparent focus:ring-0 sm:text-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4">
              <nav aria-label="Global" className="flex space-x-10">
                {navigation.map((item) =>
                  item.children.length ? (
                    <Menu
                      as="div"
                      key={item.name}
                      className="relative text-left"
                    >
                      <Menu.Button className="flex items-center rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                        <span>{item.name}</span>
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {item.children.map((child) => (
                              <Menu.Item key={child.name}>
                                {({ active }) => (
                                  <a
                                    href={child.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {child.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-900"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </nav>
              <div className="flex items-center space-x-8">
                <span className="inline-flex">
                  <a
                    href="#"
                    className="-mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </span>

                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <Image
                      width={500}
                      height={500}
                      className="h-8 w-8 rounded-full"
                      src={user.imageUrl}
                      alt="image"
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign Out
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                  enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                  enterTo="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                  leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                  leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                  leaveTo="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                >
                  <Dialog.Panel
                    className="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
                    aria-label="Global"
                  >
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                      <a href="#">
                        <Image
                          width={500}
                          height={500}
                          className="block h-8 w-auto"
                          src={userimg}
                          alt="Your Company"
                        />
                      </a>
                      <button
                        type="button"
                        className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="max-w-8xl mx-auto mt-2 px-4 sm:px-6">
                      <div className="relative text-gray-400 focus-within:text-gray-500">
                        <label htmlFor="mobile-search" className="sr-only">
                          Search all inboxes
                        </label>
                        <input
                          id="mobile-search"
                          type="search"
                          placeholder="Search all inboxes"
                          className="block w-full rounded-md border-gray-300 pl-10 placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                          <MagnifyingGlassIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                      {navigation.map((item) => (
                        <Fragment key={item.name}>
                          <a
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          >
                            {item.name}
                          </a>
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                            >
                              {child.name}
                            </a>
                          ))}
                        </Fragment>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4 pb-3">
                      <div className="max-w-8xl mx-auto flex items-center px-4 sm:px-6">
                        <div className="flex-shrink-0">
                          <Image
                            width={500}
                            height={500}
                            className="h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3 min-w-0 flex-1">
                          <div className="truncate text-base font-medium text-gray-800">
                            {user.name}
                          </div>
                          <div className="truncate text-sm font-medium text-gray-500">
                            {user.email}
                          </div>
                        </div>
                        <a
                          href="#"
                          className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
                        {userNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </header>

        {/* Bottom section */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* Narrow sidebar*/}
          <LeftSidebar />

          {/* Main area */}
          <main className="min-w-0 flex-1 border-t border-gray-200 xl:flex md:ml-60">
            <section
              aria-labelledby="message-heading"
              className="flex h-full min-w-0 flex-1 flex-col overflow-hidden"
            >
              {/* Top section */}
              <div className="flex-shrink-0 border-b border-gray-200 bg-white">
                {/* Toolbar*/}
                <div className="flex h-16 flex-col justify-center">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between py-3">
                      {/* Left buttons */}
                      <div>
                        <div className="isolate inline-flex rounded-md shadow-sm sm:space-x-3 sm:shadow-none">
                          <span className="inline-flex sm:shadow-sm">
                            <button
                              type="button"
                              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            >
                              <ArrowUturnLeftIcon
                                className="mr-2.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Reply</span>
                            </button>
                            <button
                              type="button"
                              className="relative -ml-px hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                            >
                              <PencilIcon
                                className="mr-2.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Note</span>
                            </button>
                            <button
                              type="button"
                              className="relative -ml-px hidden items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                            >
                              <UserPlusIcon
                                className="mr-2.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Assign</span>
                            </button>
                          </span>

                          <span className="hidden space-x-3 lg:flex">
                            <button
                              type="button"
                              className="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                            >
                              <ArchiveBoxIconMini
                                className="mr-2.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Archive</span>
                            </button>
                            <button
                              type="button"
                              className="relative -ml-px hidden items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:inline-flex"
                            >
                              <FolderArrowDownIcon
                                className="mr-2.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Move</span>
                            </button>
                          </span>

                          <Menu
                            as="div"
                            className="relative -ml-px block sm:shadow-sm lg:hidden"
                          >
                            <div>
                              <Menu.Button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 sm:rounded-md sm:px-3">
                                <span className="sr-only sm:hidden">More</span>
                                <span className="hidden sm:inline">More</span>
                                <ChevronDownIcon
                                  className="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm sm:hidden"
                                        )}
                                      >
                                        Note
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm sm:hidden"
                                        )}
                                      >
                                        Assign
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Archive
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        Move
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>

                      {/* Right buttons */}
                      <nav aria-label="Pagination">
                        <span className="isolate inline-flex rounded-md shadow-sm">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          >
                            <span className="sr-only">Next</span>
                            <ChevronUpIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </a>
                          <a
                            href="#"
                            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          >
                            <span className="sr-only">Previous</span>
                            <ChevronDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </a>
                        </span>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Message header */}
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="bg-white pt-5 pb-6 shadow">
                  <div className="flex items-center justify-between sm:px-3 md:px-5">
                    <div className="flex gap-3 items-center">
                      <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                        <Image
                          src={userimg}
                          alt="image"
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-black font-medium text-[18px]">
                        Alice Hawthrone
                      </h4>
                      <h5 className="text-[14px] text-gray-400 font-normal">
                        {" "}
                        From: <span>admin@gmail.com</span>
                      </h5>
                    </div>
                    <h5 className="text-[14px] text-gray-400 font-normal">
                      {" "}
                      To: <span>user@gmail.com</span>
                    </h5>
                  </div>

                  {/* <div className="px-4 flex items-start justify-between sm:px-6 lg:px-8 gap-2 align-middle">
                    <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                      <image width={400} height={400} src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"  alt="image" className='w-full h-full object-cover' width=""/>
                    </div>
                    <div className="sm:w-0 sm:flex-1">
                      <h1 id="message-heading" className="text-lg font-medium text-gray-900">
                        {message.subject}
                      </h1>
                      <p className="mt-1 truncate text-sm text-gray-500">{message.sender}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                      <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-0.5 text-sm font-medium text-cyan-800">
                        {message.status}
                      </span>
                      <Menu as="div" className="relative ml-3 inline-block text-left">
                        <div>
                          <Menu.Button className="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <span className="sr-only">Open options</span>
                            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex w-full justify-between px-4 py-2 text-sm'
                                    )}
                                  >
                                    <span>Copy email address</span>
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex justify-between px-4 py-2 text-sm'
                                    )}
                                  >
                                    <span>Previous conversations</span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'flex justify-between px-4 py-2 text-sm'
                                    )}
                                  >
                                    <span>View original</span>
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div> */}
                </div>
                <div className="flex flex-col gap-4 sm:p-3 md:p-5 bg-white">
                  <div className="flex flex-col gap-4 border-b  border-gray-300 pb-4">
                    <h3 className="text-[26px] font-semibold text-black">
                      Project report - Feedback
                    </h3>
                    <h5 className="text-[14px] text-black font-normal">Hi</h5>
                    <p className="text-[14px] text-black font-normal">
                      Dolore irure sint nisi amet. Non aliqua non ea minim nisi
                      non fugiat quis ullamco. Consectetur nisi laborum aute
                      cillum fugiat ullamco consectetur id do sunt ea.
                    </p>
                    <p className="text-[14px] text-black font-normal">Best </p>
                    <p className="text-[14px] text-black font-normal">
                      Alice Hawthrone
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-[14px] text-gray-400">1 attachment</h3>
                    <Link
                      href="/"
                      className="text-blue-400 hover:text-blue-500 text-[14px]"
                    >
                      Download
                    </Link>
                  </div>
                  <div className="flex">
                    <div className="flex w-[200px] p-3 rounded-lg bg-gray-100 items-center gap-3">
                      <div className="shrink-0 w-[25px]">
                        <Image
                          src={pdficon}
                          alt="logo"
                          width={500}
                          height={500}
                          className="w-full"
                        />
                      </div>
                      <div className="grow flex flex-col">
                        <h5 className="text-[14px] text-gray-500">
                          Project report.pdf
                        </h5>
                        <h6 className="text-[12px] text-gray-500 font-light">
                          1.3MP
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="block border rounded-lg border-slate-300">
                    <div className="flex gap-3 items-center justify-between border-slate-300 border-b p-3">
                      <div className="flex items-center gap-3">
                        <h5 className="text-[14px] text-slate-400">
                          Reply to:
                        </h5>
                        <div className="flex items-center gap-2 px-2 py-1 rounded-lg text-slate-500 bg-slate-200">
                          <h6 className="text-[14px] text-slate-500 ">
                            admin@gmail.com
                          </h6>
                          <button type="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <button
                          type="button"
                          className="text-slate-400 text-[14px]"
                        >
                          Cc
                        </button>
                        <button
                          type="button"
                          className="text-slate-400 text-[14px]"
                        >
                          Bcc
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col p-3 h-[300px]">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-[14px] text-black">Hello</h3>
                        <h3 className="text-[14px] text-black">Thank You.</h3>
                      </div>
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex gap-3 items-center">
                          <button type="button" className="text-slate-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                              />
                            </svg>
                          </button>
                          <button type="button" className="text-slate-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                              />
                            </svg>
                          </button>
                          <button type="button" className="text-slate-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="flex gap-3 items-center">
                          <button type="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-three-dots w-4 h-4 rotate-90 text-slate-400"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="bg-blue-600 text-white text-[14px] rounded-lg px-4 py-2"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thread section*/}
                {/*  <ul role="list" className="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8">
                  {message.items.map((item) => (
                    <li key={item.id} className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                      <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h3 className="text-base font-medium">
                          <span className="text-gray-900">{item.author}</span>{' '}
                          <span className="text-gray-600">wrote</span>
                        </h3>
                        <p className="mt-1 whitespace-nowrap text-sm text-gray-600 sm:mt-0 sm:ml-3">
                          <time dateTime={item.datetime}>{item.date}</time>
                        </p>
                      </div>
                      <div
                        className="mt-4 space-y-6 text-sm text-gray-800"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </li>
                  ))} 
                </ul>*/}
              </div>
            </section>

            {/* Message list*/}
            <RightSidebarnew />
          </main>
        </div>
      </div>
    </>
  );
}

export default Inboxnew;
