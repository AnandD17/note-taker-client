import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { TNote } from "@/types/note";
import Note from "@/components/note";
import NotesService, { TUpdateNote } from "@/services/notes";
import { useAuth0 } from "@auth0/auth0-react";

const colors = [
  "#FF69B4",
  "#7A3CB2",
  "#3B82F6",
  "#3B82F6",
  "#3B82F6",
  "#FACC15",
];

const NoteContainer = ({ searchTerm }: { searchTerm: string }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<TNote | null>(null);

  const { user } = useAuth0();

  const [notes, setNotes] = useState<TNote[]>([]);

  const getNotes = async () => {
    if (!user) return;
    const notes = await NotesService.GetNotes(user.sub as string);
    setNotes(notes);
  };

  const addNote = async () => {
    if (!user) return;
    const createNoteObj = {
      userId: user.sub as string,
      title: currentNote?.title || "",
      description: currentNote?.description || "",
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    await NotesService.PostCreateNote(createNoteObj);
    getNotes();
  };

  const updateNote = async () => {
    if (!user) return;
    const updateNoteObj = {
      title: currentNote?.title || "",
      description: currentNote?.description || "",
    };
    await NotesService.PutUpdateNote(
      currentNote?._id as string,
      updateNoteObj as TUpdateNote
    );
    getNotes();
  };

  const deleteNote = async (deleteNoteId: string) => {
    if (!user) return;
    await NotesService.DeleteNote(deleteNoteId);
    getNotes();
  };

  useEffect(() => {
    getNotes();
  }, [user]);

  return (
    <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setCurrentNote(null)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Note
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {currentNote?._id ? "Edit Note" : "Create Note"}
              </DialogTitle>
              <DialogDescription>
                {currentNote?._id
                  ? "Make changes to your note here."
                  : "Add a new note to your collection."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  className="col-span-3"
                  value={currentNote?.title || ""}
                  onChange={(e) =>
                    setCurrentNote({
                      ...currentNote,
                      title: e.target.value,
                    } as TNote)
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  className="col-span-3"
                  value={currentNote?.description || ""}
                  onChange={(e) =>
                    setCurrentNote({
                      ...currentNote,
                      description: e.target.value,
                    } as TNote)
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => {
                  if (currentNote?._id) {
                    updateNote();
                  } else if (currentNote) {
                    addNote();
                  }
                  setIsCreateModalOpen(false);
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Note
            key={note._id}
            note={note}
            setCurrentNote={setCurrentNote}
            setIsCreateModalOpen={setIsCreateModalOpen}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </main>
  );
};

export default NoteContainer;
