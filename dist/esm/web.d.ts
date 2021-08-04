import { WebPlugin } from '@capacitor/core';
import type { TreadsGps3Plugin } from './definitions';
export declare class TreadsGps3Web extends WebPlugin implements TreadsGps3Plugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    checkStatus(): Promise<{
        dataSaver: string;
        ignoreBatteryOptimization: string;
    }>;
    keepWebviewAwake(): Promise<{
        success: boolean;
    }>;
    requestIgnoreBatteryOptimization(): Promise<{
        success: boolean;
    }>;
    requestIgnoreDataSaver(): Promise<{
        success: boolean;
    }>;
}
