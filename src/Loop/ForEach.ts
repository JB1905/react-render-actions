interface Props {
  data: any[];
  children: any;
}

export const ForEach = ({ data, children }: Props) => {
  return data.forEach((item, index) => children(item, index));
};
