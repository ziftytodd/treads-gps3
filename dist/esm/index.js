import { registerPlugin } from '@capacitor/core';
const TreadsGps3 = registerPlugin('TreadsGps3', {
    web: () => import('./web').then(m => new m.TreadsGps3Web()),
});
export * from './definitions';
export { TreadsGps3 };
//# sourceMappingURL=index.js.map