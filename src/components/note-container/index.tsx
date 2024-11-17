import React, { useState } from "react";
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
const NoteContainer = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<TNote | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const notes: TNote[] = [];

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                {currentNote ? "Edit Note" : "Create Note"}
              </DialogTitle>
              <DialogDescription>
                {currentNote
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
                <Label htmlFor="content" className="text-right">
                  Content
                </Label>
                <Textarea
                  id="content"
                  className="col-span-3"
                  value={currentNote?.content || ""}
                  onChange={(e) =>
                    setCurrentNote({
                      ...currentNote,
                      content: e.target.value,
                    } as TNote)
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => {
                  // if (currentNote?.id) {
                  //   updateNote(currentNote)
                  // } else if (currentNote) {
                  //   addNote(currentNote)
                  // }
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
        {filteredNotes.map((note) => (
          <Note
            key={note.id}
            note={note}
            setCurrentNote={setCurrentNote}
            setIsCreateModalOpen={setIsCreateModalOpen}
          />
        ))}
      </div>
    </main>
  );
};

export default NoteContainer;
