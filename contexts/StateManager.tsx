import InputContext from "./InputContext";

interface StateManagerProps {
  children: React.ReactNode;
}

const StateManager = ({ children }: StateManagerProps) => {
  return (
    <>
      <InputContext>{children}</InputContext>
    </>
  );
};

export default StateManager;
