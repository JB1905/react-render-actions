interface Props {
  readonly data: any;
  readonly children: any;
}

export const Map = ({ data, children }: Props) => {
  return data.map((item: any) => children(item));
};
