const plugin = require("tailwindcss/plugin");
const latte = require("./palettes/latte");
const frappe = require("./palettes/frappe");
const macchiato = require("./palettes/macchiato");
const moccha = require("./palettes/moccha");

module.exports = plugin(function () {}, {
    theme: {
        extend: {
            colors: {
                latte: {
                    ...latte.colors,
                },
                frappe: {
                    ...frappe.colors,
                },
                macchiato: {
                    ...macchiato.colors,
                },
                moccha: {
                    ...moccha.colors,
                },
            },
        },
    },
});
