type Props = {
  name: string;
  age: number;
};

const Login = ({ name, age }: Props) => {
  return (
    <div>
      <h1>Login page</h1>
      <p>name is: {name}</p>
      <p>age is: {age}</p>
    </div>
  );
};

export default Login;
