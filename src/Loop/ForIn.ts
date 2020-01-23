interface Props {
  children: any;
  data: object;
  property: string;
  as: any;
}

export const ForIn = ({ children, data, as, property }: Props) => {
  for (property in data) {
    // return children;
    return as(property);
  }
};
