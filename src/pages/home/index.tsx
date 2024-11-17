import Navbar from "@/components/common/navbar";
import NoteContainer from "@/components/note-container";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <NoteContainer />
    </div>
  );
};

export default Home;
