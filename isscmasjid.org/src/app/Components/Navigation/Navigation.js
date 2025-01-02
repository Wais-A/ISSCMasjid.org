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

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

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

  const isPathActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path.toLowerCase());
  };

  const isDropdownActive = (items) => {
    return items.some((item) => isPathActive(item.path));
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height="64px"
      position="sticky"
      className="bg-[#28508d] text-white"
      maxWidth="full"
    >
      {/* Mobile Layout */}
      <NavbarContent className="sm:hidden flex justify-between items-center w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />

        {/* Right side - Mobile Buttons */}
        <div className="flex gap-2 w-full justify-end">
          <Button
            as={Link}
            href="/volunteer-form"
            size="lg"
            className="bg-[#28508d] text-white border border-white rounded-full min-w-[100px] hover:bg-[#1c3861]"
          >
            Volunteer
          </Button>
          <Button
            as={Link}
            href="/donate"
            size="lg"
            className="bg-[#28508d] text-white border border-white rounded-full min-w-[100px] hover:bg-[#1c3861]"
          >
            Donate
          </Button>
        </div>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4 ml-6" justify="start">
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
            <div className="absolute left-0 pt-2 hidden w-48 group-hover:block hover:block z-50">
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

      {/* Desktop Buttons */}
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/volunteer-form"
            className="bg-transparent text-white border border-white rounded-full px-6 hover:bg-white hover:text-[#28508d] transition-all duration-200"
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
            className="bg-transparent text-white border border-white rounded-full px-6 hover:bg-white hover:text-[#28508d] transition-all duration-200"
            variant="flat"
            size="lg"
          >
            Donate
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white pt-4 pb-20 top-[220px] overflow-y-auto max-h-[calc(100vh-220px)]">
        <div className="px-4">
          <NavbarMenuItem>
            <Link
              href="/"
              className={`w-full text-lg mb-4 px-4 py-2 rounded-md transition-colors duration-150 ${
                isPathActive("/") ? "text-white bg-[#28508d]" : "text-gray-700"
              }`}
            >
              Home
            </Link>
          </NavbarMenuItem>
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
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
