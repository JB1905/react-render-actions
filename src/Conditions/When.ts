interface Props {
  readonly children: JSX.Element;
  readonly condition: boolean;
}

export const When = ({ children, condition }: Props) => {
  return condition ? children : null;
};
