import { Case } from "./Case";
import { Default } from "./Default";

interface Props {
  switchValue: any;
  children: any;
}

export const Switch = ({ switchValue, children }: Props) => {
  children.forEach((child) => {
    switch() {
      case 'case': {}

      case 'default': {}
    }
  });

  // const data = []
  //   .concat(children as any)
  //   .find((c: any) => c.type === Case && c.props.case === switchValue);

  // const defaultValue = []
  //   .concat(children as any)
  //   .find((c: any) => c.type === Default);

  // if (data) {
  //   return data;
  // } else if (defaultValue) {
  //   return defaultValue;
  // } else {
  //   return null;
  // }
};
