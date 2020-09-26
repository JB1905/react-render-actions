interface Props {
  children: JSX.Element;
  condition: boolean;
}

export const Unless = ({ children, condition }: Props) => {
  return condition ? null : children;
};
