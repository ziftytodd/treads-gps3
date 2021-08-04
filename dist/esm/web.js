import { WebPlugin } from '@capacitor/core';
export class TreadsGps3Web extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async checkStatus() {
        return { dataSaver: 'false', ignoreBatteryOptimization: 'false' };
    }
    async keepWebviewAwake() {
        return { success: false };
    }
    async requestIgnoreBatteryOptimization() {
        return { success: false };
    }
    async requestIgnoreDataSaver() {
        return { success: false };
    }
}
//# sourceMappingURL=web.js.map