interface Props {
  children: JSX.Element | any;
  condition: boolean;
}

export const Unless = ({ children, condition }: Props) => {
  return condition ? null : children;
};
