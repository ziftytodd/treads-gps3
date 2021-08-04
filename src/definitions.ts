export interface TreadsGps3Plugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  keepWebviewAwake(): Promise<{ success: boolean }>;
  checkStatus(): Promise<{ dataSaver: string, ignoreBatteryOptimization: string }>;
  requestIgnoreBatteryOptimization(): Promise<{ success: boolean }>;
  requestIgnoreDataSaver(): Promise<{ success: boolean }>;
}
