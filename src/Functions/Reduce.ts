interface Props {
  children: any;
  data: any[];
  pattern: any;
}

export const Reduce = ({ data, pattern, children }: Props) => {
  const reduced = data.reduce(pattern);

  return children(reduced);
};
