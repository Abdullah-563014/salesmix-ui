import { FC, useState } from "react";

const Registration: FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  return (
    <div>
      <h1>Registration page</h1>
    </div>
  );
};

export default Registration;
