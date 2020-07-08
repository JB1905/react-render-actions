interface Props {
  readonly data: any;
  readonly children: any;
  readonly pattern: any;
}

export const Reduce = ({ data, children, pattern }: Props) => {
  return children(data.reduce(pattern));
};
