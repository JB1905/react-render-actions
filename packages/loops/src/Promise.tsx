import React, { useState, Suspense } from 'react';
import { Resolve } from './Resolve';
import { Reject } from './Reject';

interface Props {
  children: any;
  promise: Promise<any>;
  type: any;
  fallback: any;
}

export const RPromise = ({ children, promise, type, fallback }: Props) => {
  const [renderItem, setRenderItem] = useState(null);

  const renderData = () => {};

  promise
    .then(() => children.findIndex((c: any) => (c.type = Resolve)))
    .catch(() => children.findIndex((c: any) => (c.type = Reject)));

  return <Suspense fallback={fallback}>{renderItem}</Suspense>;
};
