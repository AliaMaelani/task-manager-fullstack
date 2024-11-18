import { create } from "zustand";
import { createTask, getAllTask, toggleTask, deleteTask } from "../api/network";

const initialState = {
  tasks: [],
  error: null,
  isLoading: false,
};

export const useTaskStore = create((set, get) => ({
  ...initialState,
  createTask: async (title) => {
    try {
      set({ error: null });
      await createTask(title);
      await get().getTasks();
    } catch (error) {
      set({ error });
    }
  },
  getTasks: async () => {
    try {
      set({ isLoading: false, error: null });

      const { data } = await getAllTask();
      set({ tasks: data });
    } catch (error) {
      set({ error });
    } finally {
      set({ isLoading: false });
    }
  },
  toggleTask: async (taskId) => {
    try {
      await toggleTask(taskId);
      await get().getTasks(); 
    } catch (error) {
      set({ error });
    }
  },
  deleteTask: async (taskId) => {
    try {
      await deleteTask(taskId);
      await get().getTasks(); 
    } catch (error) {
      set({ error });
    }
  },
}));
