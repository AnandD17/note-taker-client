import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Pencil, Trash2 } from "lucide-react";
import { TNote } from "@/types/note";
import { Button } from "@/components/ui/button";
type Props = {
  note: TNote;
  setCurrentNote: (note: TNote) => void;
  setIsCreateModalOpen: (open: boolean) => void;
  deleteNote: (deleteNoteId: string) => void;
};

const Note = ({
  note,
  setCurrentNote,
  setIsCreateModalOpen,
  deleteNote,
}: Props) => {
  return (
    <div
      key={note._id}
      className={` bg-opacity-10 border-l-4 rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg transition-opacity transform duration-200 ease-in-out opacity-100`}
      style={{
        opacity: 1,
        transform: "translateY(0)",
        backgroundColor: note.color + "20",
        borderColor: note.color,
      }}
    >
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{note.title}</h2>
      <p className="text-gray-600 mb-4">{note.description}</p>
      <div className="flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setCurrentNote(note);
            setIsCreateModalOpen(true);
          }}
          className="text-gray-600 hover:text-gray-900"
        >
          <Pencil className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                note.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteNote(note._id)}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Note;
