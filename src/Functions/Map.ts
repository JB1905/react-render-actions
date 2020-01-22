interface Props {
  data: any[];
  children: any;
}

export const Map = ({ data, children }: Props) => {
  return data.map(item => children(item));
};
