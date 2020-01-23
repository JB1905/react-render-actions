interface Props {
  data: any[];
  children: any;
  pattern: any;
}

export const Reduce = ({ data, children, pattern }: Props) => {
  return children(data.reduce(pattern));
};
