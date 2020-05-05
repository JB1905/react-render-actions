interface Props {
  children: any;
  data: object;
}

export const ForIn = ({ children, data }: Props) => {
  for (let value in data) {
    return children(value);
  }
};
