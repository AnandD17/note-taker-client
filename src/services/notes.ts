import { TNote } from "@/types/note";
import api from "./api";

export type TPostCreateNote = {
    title: string;
    description: string;
    userId: string;
    color: string;
};

export type TUpdateNote = {
  title?: string;
  description?: string;
};

class NotesService {

  async GetNotes(userId: string, searchTerm?: string) {
    try {
      const response = await api.get(`/notes?userId=${userId}${searchTerm ? `&search=${searchTerm}` : ""}`);
      return response.data.notes as TNote[];
    } catch (error) {
      throw error;
    }
  }

  async PostCreateNote(data: TPostCreateNote) {
    try {
      const response = await api.post("/notes", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async PutUpdateNote(id: string, data: TUpdateNote) {
    try {
      const response = await api.put(`/notes/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async DeleteNote(id: string) {
    try {
      const response = await api.delete(`/notes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new NotesService();
    