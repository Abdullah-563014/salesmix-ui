import { FC, ReactNode, useState } from "react";
import Login from "./login";

type ChildProps = {
  title: string; // A required string prop
  count?: number; // An optional number prop
  onAction: (value: string) => void; // A function prop
  children: ReactNode;
};

const Registration: FC<ChildProps> = ({ title, count, onAction, children }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  return (
    <div>
      <h1>Registration page</h1>
      <Login name={name} />
    </div>
  );
};

export default Registration;
