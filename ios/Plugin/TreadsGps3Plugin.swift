import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TreadsGps3Plugin)
public class TreadsGps3Plugin: CAPPlugin {
    private let implementation = TreadsGps3()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func keepWebviewAwake(_ call: CAPPluginCall) {
      call.resolve([
          "success": true
      ])
    }

    @objc func checkStatus(_ call: CAPPluginCall) {
      call.resolve([
          "dataSaver": "unknown",
          "ignoreBatteryOptimization": "unknown"
      ])
    }

    @objc func requestIgnoreBatteryOptimization(_ call: CAPPluginCall) {
      call.resolve([
          "success": false
      ])
    }

    @objc func requestIgnoreDataSaver(_ call: CAPPluginCall) {
      call.resolve([
          "success": false
      ])
    }
}
