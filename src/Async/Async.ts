import { Await } from './Await';
import { Try } from './Try';
import { Catch } from './Catch';
import { Finally } from './Finally';

interface Props {
  children: any[];
}

export const Async = async ({ children }: Props) => {
  return children.find((c: any) => {
    if (c.type === Try) {
      return null;
    }

    if (c.type === Await) {
      return null;
    }

    if (c.type === Catch) {
      return null;
    }

    if (c.type === Finally) {
      return null;
    }
  });
};
