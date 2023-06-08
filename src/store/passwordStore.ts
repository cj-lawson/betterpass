import { create } from "zustand";

interface PasswordState {
  password: string;
  useUppercase: boolean;
  useLowercase: boolean;
  useSymbols: boolean;
  useNumbers: boolean;
}

interface Action {}

const usePasswordStore = create<PasswordState>((set) => ({
  password: "P4$5W0rD!",
  useUppercase: false,
  useLowercase: false,
  useSymbols: false,
  useNumbers: false,
}));

export default usePasswordStore;
