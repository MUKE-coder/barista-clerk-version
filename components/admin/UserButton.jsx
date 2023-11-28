"use client";
import Image from "next/image";
import { LayoutDashboard, Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function UserButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button>
          <Image
            src="/profile.JPG"
            alt="User profile"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-2 px-4 pr-8">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button className="flex items-center space-x-2">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="flex items-center space-x-2">
            <Settings className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="flex items-center space-x-2">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
