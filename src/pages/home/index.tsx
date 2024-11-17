import Navbar from "@/components/common/navbar";
import LandingPage from "@/components/landing-page";
import NoteContainer from "@/components/note-container";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isAuthenticated ? (
        <NoteContainer searchTerm={searchTerm} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default Home;
