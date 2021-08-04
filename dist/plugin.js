var capacitorTreadsGps3 = (function (exports, core) {
    'use strict';

    const TreadsGps3 = core.registerPlugin('TreadsGps3', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.TreadsGps3Web()),
    });

    class TreadsGps3Web extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TreadsGps3Web: TreadsGps3Web
    });

    exports.TreadsGps3 = TreadsGps3;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
