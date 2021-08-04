import { WebPlugin } from '@capacitor/core';

import type { TreadsGps3Plugin } from './definitions';

export class TreadsGps3Web extends WebPlugin implements TreadsGps3Plugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
