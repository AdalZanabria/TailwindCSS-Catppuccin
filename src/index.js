const plugin = require("tailwindcss/plugin");

module.exports = plugin(function () {}, {
    theme: {
        extend: {
            colors: {
                ctp: {
                    rosewater:
                        "rgb(var(--color-ctp-rosewater) / <alpha-value>)",
                    flamingo: "rgb(var(--color-ctp-flamingo) / <alpha-value>)",
                    pink: "rgb(var(--color-ctp-pink) / <alpha-value>)",
                    mauve: "rgb(var(--color-ctp-mauve) / <alpha-value>)",
                    red: "rgb(var(--color-ctp-red) / <alpha-value>)",
                    maroon: "rgb(var(--color-ctp-maroon) / <alpha-value>)",
                    peach: "rgb(var(--color-ctp-peach) / <alpha-value>)",
                    yellow: "rgb(var(--color-ctp-yellow) / <alpha-value>)",
                    green: "rgb(var(--color-ctp-green) / <alpha-value>)",
                    teal: "rgb(var(--color-ctp-teal) / <alpha-value>)",
                    sky: "rgb(var(--color-ctp-sky) / <alpha-value>)",
                    sapphire: "rgb(var(--color-ctp-sapphire) / <alpha-value>)",
                    blue: "rgb(var(--color-ctp-blue) / <alpha-value>)",
                    lavender: "rgb(var(--color-ctp-lavender) / <alpha-value>)",
                    text: "rgb(var(--color-ctp-text) / <alpha-value>)",
                    subtext1: "rgb(var(--color-ctp-subtext1) / <alpha-value>)",
                    subtext0: "rgb(var(--color-ctp-subtext0) / <alpha-value>)",
                    overlay2: "rgb(var(--color-ctp-overlay2) / <alpha-value>)",
                    overlay1: "rgb(var(--color-ctp-overlay1) / <alpha-value>)",
                    overlay0: "rgb(var(--color-ctp-overlay0) / <alpha-value>)",
                    surface2: "rgb(var(--color-ctp-surface2) / <alpha-value>)",
                    surface1: "rgb(var(--color-ctp-surface1) / <alpha-value>)",
                    surface0: "rgb(var(--color-ctp-surface0) / <alpha-value>)",
                    base: "rgb(var(--color-ctp-base) / <alpha-value>)",
                    mantle: "rgb(var(--color-ctp-mantle) / <alpha-value>)",
                    crust: "rgb(var(--color-ctp-crust) / <alpha-value>)",
                },
            },
        },
    },
});
