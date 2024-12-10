import { FC } from "react";

type Props = {
  text: string;
  className: string;
  restProps: unknown[];
};

const Button: FC<Props> = ({ text, className, ...restProps }) => {
  return (
    <button className={className} {...restProps}>
      {text}
    </button>
  );
};

export default Button;
