interface Props {
  children: any;
  condition: boolean;
}

export const Unless = ({ children, condition }: Props) => {
  return condition ? null : children;
};
