import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Zap, Search } from "lucide-react";

const LandingPage = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Capture Your Thoughts,{" "}
            <span className="text-indigo-600">Anytime, Anywhere</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            NoteTaker is your personal digital notebook. Organize your ideas,
            to-dos, and memories with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Lock className="h-12 w-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Secure & Private</h2>
            <p className="text-gray-600">
              Your notes are encrypted and only accessible by you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="h-12 w-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Fast & Reliable</h2>
            <p className="text-gray-600">
              Access your notes instantly, even offline.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Search className="h-12 w-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Easy to Search</h2>
            <p className="text-gray-600">
              Find any note quickly with our powerful search feature.
            </p>
          </div>
        </div>

        <div className="bg-indigo-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Sign up now and start organizing your thoughts!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Sign Up Free
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} NoteTaker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
