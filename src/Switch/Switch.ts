import { Case } from './Case';
import { Default } from './Default';

interface Props<T> {
  switchValue: T;
  children: JSX.Element[];
  requireDefault?: boolean;
  allowDuplicates?: boolean;
  onChange?: (prev: any, curr: any) => void;
  onCase?: (switchValue: string, casesCount?: number) => void;
  onDefault?: (switchValue: string) => void;
}

export const Switch = <T>({
  switchValue,
  children,
  requireDefault,
  allowDuplicates,
  onChange,
  onCase,
  onDefault,
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

    results.push(component ? component : null);
  }

  return results[0];
};
