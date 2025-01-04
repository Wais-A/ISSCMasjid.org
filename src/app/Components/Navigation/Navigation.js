"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import styles from "./Navigation.module.css";

export default function NavigationBar() {
  // State to manage mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Navigation structure defining all dropdown menus and their respective links
  const dropdownItems = {
    About: [
      { name: "About ISSC", path: "/about" },
      { name: "Our Imam", path: "/imam" },
      { name: "Explore Masjid", path: "/explore" },
      { name: "Board Members", path: "/board" },
    ],
    Events: [
      { name: "Upcoming Events", path: "/events" },
      { name: "Khutbah Archive", path: "/khutbah" },
      { name: "Announcements", path: "/announcements" },
    ],
    Programs: [
      { name: "Education", path: "/education" },
      { name: "Islamic Resources", path: "/resources" },
      { name: "Community Dinner", path: "/dinner" },
    ],
    Services: [
      { name: "Polls", path: "/polls" },
      { name: "Suggestion Box", path: "/suggestions" },
      { name: "New Muslims", path: "/new-muslims" },
    ],
    Media: [
      { name: "Mecca Live", path: "/mecca-live" },
      { name: "Medina Live", path: "/medina-live" },
    ],
  };

  // Helper function to determine if current path matches given path
  const isPathActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path.toLowerCase());
  };

  // Helper function to check if any item in a dropdown menu is active
  const isDropdownActive = (items) => {
    return items.some((item) => isPathActive(item.path));
  };

  return (
    // Main wrapper for navigation
    <div className="relative">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        height="64px"
        className="bg-[#28508d] text-white max-lg:bg-transparent max-lg:!backdrop-filter-none "
        maxWidth="full"
      >
        {/* Mobile Navigation Content */}
        <NavbarContent className="lg:hidden flex justify-between items-center w-full">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-white"
          />
          {/* Mobile CTA Buttons */}
          <div className="flex gap-3 w-full justify-end  ">
            <Button
              as={Link}
              href="/volunteer-form"
              size="lg"
              className="bg-[#28508d] text-white border border-white rounded-full min-w-[150px] hover:bg-[#1c3861]"
            >
              Volunteer
            </Button>
            <Button
              as={Link}
              href="/donate"
              size="lg"
              className="bg-[#28508d] text-white border border-white rounded-full min-w-[150px] hover:bg-[#1c3861]"
            >
              Donate
            </Button>
          </div>
        </NavbarContent>

        {/* Desktop Navigation Content */}
        <NavbarContent
          className="hidden lg:flex gap-4 ml-6 md:w-32 sm:w-20 "
          justify="start"
        >
          {/* Home Link */}
          <NavbarItem>
            <Link
              href="/"
              className={`text-white px-4 py-2 rounded-md transition-all duration-200 hover:text-gray-300 ${
                isPathActive("/") ? "bg-[#1c3861]" : ""
              }`}
            >
              Home
            </Link>
          </NavbarItem>

          {/* Desktop Dropdown Menus */}
          {Object.entries(dropdownItems).map(([key, items]) => (
            <NavbarItem key={key} className="group relative">
              <button
                className={`text-white px-4 py-2 rounded-md transition-all duration-200 hover:text-gray-300 focus:outline-none inline-flex items-center gap-1 ${
                  isDropdownActive(items) ? "bg-[#1c3861]" : ""
                }`}
              >
                {key}
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>
              {/* Dropdown Menu Content */}
              <div className="absolute left-0 pt-2 hidden w-48 group-hover:block hover:block z-50 ">
                <div className="bg-[#28508d] rounded-md shadow-lg overflow-hidden">
                  {items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      className={`block px-4 py-2 text-white hover:bg-[#1c3861] transition-colors duration-150 ${
                        isPathActive(item.path) ? "bg-[#1c3861]" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Desktop CTA Buttons */}
        <NavbarContent className="hidden lg:flex gap-4" justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="/volunteer-form"
              className="bg-transparent text-white border border-white w-[100px]  rounded-full px-6 hover:bg-white hover:text-[#28508d] transition-all duration-200"
              variant="flat"
              size="lg"
            >
              Volunteer
            </Button>
          </NavbarItem>
          <NavbarItem className="mr-6">
            <Button
              as={Link}
              href="/donate"
              className="bg-transparent text-white border border-white w-[100px] rounded-full px-6 hover:bg-white hover:text-[#28508d] transition-all duration-200"
              variant="flat"
              size="lg"
            >
              Donate
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu - Rendered conditionally when menu is open */}

        <div
          className={`absolute top-[64px] left-0 right-0 bg-white z-50 shadow-lg transition-all duration-300 ease-in-out  ${
            isMenuOpen ? "h-[calc(100vh-64px)] opacity-100 backdrop-filter-none " : "h-0 opacity-0"
          }`}
        >
          <div
            className={`px-4 py-4 transform transition-transform duration-300 h-full overflow-y-auto ${
              isMenuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            <NavbarMenuItem>
              <Link
                href="/"
                className={`w-full text-lg mb-4 px-4 py-2 rounded-md transition-colors duration-150 ${
                  isPathActive("/")
                    ? "text-white bg-[#28508d]"
                    : "text-gray-700"
                }`}
              >
                Home
              </Link>
            </NavbarMenuItem>
            {/* Mobile Menu Dropdown Items */}
            {Object.entries(dropdownItems).map(([key, items]) => (
              <NavbarMenuItem key={key} className="mb-4">
                <div className="w-full">
                  <p
                    className={`text-lg mb-2 px-4 py-2 rounded-md transition-colors duration-150 ${
                      isDropdownActive(items)
                        ? "text-white bg-[#28508d]"
                        : "text-gray-700"
                    }`}
                  >
                    {key}
                  </p>
                  {/* Mobile Menu Dropdown Links */}
                  <div className="ml-4 flex flex-col gap-2">
                    {items.map((item, idx) => (
                      <Link
                        href={item.path}
                        key={idx}
                        className={`block px-4 py-2 transition-colors duration-100 ${
                          isPathActive(item.path)
                            ? "text-white bg-[#28508d]"
                            : "text-gray-700 hover:text-white hover:bg-[#28508d]"
                        } rounded-md`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </NavbarMenuItem>
            ))}
            {/* Add padding at the bottom for better scrolling experience */}
            <div className="pb-[50px]"></div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
