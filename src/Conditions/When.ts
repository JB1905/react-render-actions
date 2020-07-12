interface Props {
  children: JSX.Element | any;
  condition: boolean;
}

export const When = ({ children, condition }: Props) => {
  return condition ? children : null;
};
