import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
const Navbar = () => {
  return (
    
    <nav className="bg-primary text-secondary py-4 w-full fixed top-0 left-0 right-0 flex justify-between items-center px-4 z-50">
          <h1 className="text-lg font-semibold">shadcn</h1>
        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>

          <Button variant="outline">login</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="profile" className="w-full">
                  Profile
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="Settings" className="w-full">
                  Settings
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </nav>
  );
};

export default Navbar;
