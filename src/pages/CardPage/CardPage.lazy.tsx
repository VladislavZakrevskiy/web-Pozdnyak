import { lazy } from 'react';

export const LazyCardPage = lazy(async () => await import('./CardPage'));
