/// <reference types="vite/client" />
import PixiJS from "pixi.js";

declare global {
    namespace globalThis {
        export import PIXI = PixiJS;

        var libWrapper: {
            register: (packageId: string, target: string, fn: Function, type: string, options?: object) => number;
            unregister_all: (packageId: string) => void;
        };

        var Hooks: {
            once: (event: string, fn: Function) => void;
        };

        var foundry: {
            canvas: {
                rendering: {
                    shaders: {
                        AbstractWeatherShader: typeof AbstractWeatherShader;
                    };
                };
            };
        };

        var game: {
            data: {
                settings: SettingSource[];
            };
            settings: {
                get: <T>(namespace: string, key: string) => T;
                register: (namespace: string, key: string, data: object) => void;
            };
        };
    }
}

declare class AbstractWeatherShader {
    static FRAGMENT_HEADER: string;
}

interface SettingSource {
    key: string;
    value: string;
}
