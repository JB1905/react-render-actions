interface Props {
  data: any[];
  children: any;
}

export const ForEach = ({ children, data }: Props): any => {
  return data.forEach((item, index) => {
    return children(item, index);
  });
};
