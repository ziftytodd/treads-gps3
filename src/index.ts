import { registerPlugin } from '@capacitor/core';

import type { TreadsGps3Plugin } from './definitions';

const TreadsGps3 = registerPlugin<TreadsGps3Plugin>('TreadsGps3', {
  web: () => import('./web').then(m => new m.TreadsGps3Web()),
});

export * from './definitions';
export { TreadsGps3 };
