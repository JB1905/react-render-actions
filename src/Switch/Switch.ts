import { Case } from './Case';
import { Default } from './Default';

interface Props<T> {
  readonly switchValue: T;
  readonly children: JSX.Element[];
  readonly requireDefault?: boolean;
  readonly allowDuplicates?: boolean;
  readonly onChange?: (prev: any, curr: any) => void;
  readonly onCase?: (switchValue: string, casesCount?: number) => void;
  readonly onDefault?: (switchValue: string) => void;
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
