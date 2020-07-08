interface Props {
  readonly data: any;
  readonly children: any;
  readonly pattern: any;
}

export const Filter = ({ data, children, pattern }: Props) => {
  return children(data.filter((item: any) => pattern(item)));
};
