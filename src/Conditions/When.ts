interface Props {
  children: any;
  condition: boolean;
}

export const When = ({ children, condition }: Props) => {
  return condition ? children : null;
};
