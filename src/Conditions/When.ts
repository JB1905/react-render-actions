interface Props {
  children: JSX.Element;
  condition: boolean;
}

export const When = ({ children, condition }: Props) => {
  return condition ? children : null;
};
