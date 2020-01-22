interface Props {
  data: any[];
  pattern: any;
  children: any;
}

export const Filter = ({ data, pattern, children }: Props) => {
  const filtered = data.filter(item => pattern(item));

  return children(filtered);
};
