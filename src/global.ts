/// <reference types="vite/client" />
import PixiJS from "pixi.js";

declare global {
    namespace globalThis {
        export import PIXI = PixiJS;
        /* eslint-disable no-var */
        var Hooks: {
            once: (event: string, fn: () => void) => void;
        };

        var foundry: {
            canvas: {
                rendering: {
                    shaders: {
                        AbstractWeatherShader: typeof _AbstractWeatherShader;
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
        /* eslint-enable no-var */
    }
}

declare class _AbstractWeatherShader {
    static FRAGMENT_HEADER: string;
}

interface SettingSource {
    key: string;
    value: string;
}
