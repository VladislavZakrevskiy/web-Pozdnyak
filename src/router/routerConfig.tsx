import { RouteObject } from 'react-router-dom';
import { LazyCardPage } from '../pages/CardPage/CardPage.lazy';
import { Suspense } from 'react';
import { Loader } from '@/components/common/Loader/Loader';
export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <LazyCardPage />
      </Suspense>
    ),
  },
];
