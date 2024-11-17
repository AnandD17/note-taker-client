import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a className="flex items-center space-x-2" href="/">
              <PlusCircle className="h-6 w-6 text-indigo-600" />
              <span className="hidden sm:inline-block text-xl font-bold text-gray-900">
                NoteTaker
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search notes..."
                className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
