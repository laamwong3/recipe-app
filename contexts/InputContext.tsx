import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { cuisines } from "../constants/cuisineDetails";

interface InputContextProps {
  children: React.ReactNode;
}
interface InputContextTypes {
  cuisine: string | null;
  setCuisine: Dispatch<SetStateAction<string | null>>;
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}

const InputContextStore = createContext({} as InputContextTypes);

const InputContext = ({ children }: InputContextProps) => {
  const [cuisine, setCuisine] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>("");

  return (
    <>
      <InputContextStore.Provider
        value={{ cuisine, keyword, setCuisine, setKeyword }}
      >
        {children}
      </InputContextStore.Provider>
    </>
  );
};

export default InputContext;

export const useInput = () => useContext(InputContextStore);
