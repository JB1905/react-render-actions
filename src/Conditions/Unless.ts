interface Props {
  readonly children: JSX.Element;
  readonly condition: boolean;
}

export const Unless = ({ children, condition }: Props) => {
  return condition ? null : children;
};
