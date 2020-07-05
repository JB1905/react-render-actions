interface Props {
  data: any;
  children: any;
  pattern: any;
}

export const Filter = ({ data, children, pattern }: Props) => {
  return children(data.filter((item: any) => pattern(item)));
};
