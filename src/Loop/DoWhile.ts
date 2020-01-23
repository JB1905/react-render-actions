interface Props {
  children: any;
  condition: boolean;
}

export const DoWhile = ({ children, condition }: Props) => {
  do {
    return children;
  } while (condition);
};
