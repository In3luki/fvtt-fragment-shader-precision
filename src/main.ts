Hooks.once("init", () => {
    game.settings.register("fvtt-fragment-shader-precision", "isEnabled", {
        name: "FVTTFragmentShaderPrecision.Settings.Precision.name",
        hint: "FVTTFragmentShaderPrecision.Settings.Precision.hint",
        config: true,
        scope: "client",
        type: Boolean,
        default: false,
        requiresReload: true,
    });
    const isEnabled = game.settings.get<boolean>("fvtt-fragment-shader-precision", "isEnabled");

    if (isEnabled) {
        PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH;

        const original = foundry.canvas.rendering.shaders.AbstractWeatherShader.FRAGMENT_HEADER;
        foundry.canvas.rendering.shaders.AbstractWeatherShader.FRAGMENT_HEADER = original.replace(
            "precision mediump float;",
            "precision highp float;",
        );
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        location.reload();
    });
}
