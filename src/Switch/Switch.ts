import { Case } from './Case';
import { Default } from './Default';

// import { isFunction } from '../helpers/isFunction';

interface Props<T> {
  readonly switchValue: T;
  readonly children: JSX.Element[];
  readonly requireDefault?: boolean;
  readonly allowDuplicates?: boolean;
  readonly onChange?: (prev: any, curr: any) => void;
  readonly onCase?: (switchValue: string, casesCount?: number) => void;
  readonly onDefault?: (switchValue: string) => void;
  readonly onError?: (err: Error) => void; // add silent error (in console) if is onChange
}

export const Switch = <T>({
  switchValue,
  children,
  requireDefault,
  allowDuplicates,
  onChange,
  onCase,
  onDefault,
  onError,
}: Props<T>) => {
  const results = [];

  children.forEach((child) => {
    if (!allowDuplicates && results.length > 0) {
      return;
    }

    if (child.type === Case && child.props.case === switchValue) {
      results.push(child);
    }
  });

  if (results.length === 0) {
    const component = children.find((child) => child.type === Default);

    if (component) {
      results.push(component);

      // if (typeof onDefault === 'function') {
      //   onDefault(switchValue);
      // }
    } else {
      if (requireDefault) {
        const error = new Error(
          `Default component is required. You can set requireDefault to false in Switch component to disable this error.`
        );

        if (typeof onError === 'function') {
          onError(error);
        } else {
          throw error;
        }
      } else {
        results.push(null);
      }
    }
  }

  return results[0];
};
