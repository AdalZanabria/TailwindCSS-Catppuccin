<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for TailwindCSS
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/template/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/template?colorA=1e1e28&colorB=c9cbff&style=for-the-badge&logo=starship"></a>
    <a href="https://github.com/catppuccin/template/issues"><img src="https://img.shields.io/github/issues/catppuccin/template?colorA=1e1e28&colorB=f7be95&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/template/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/template?colorA=1e1e28&colorB=b1e1a6&style=for-the-badge"></a>
</p>

<p align="center">
  <img src="./assets/ss.png"/>
</p>

## Usage

1. Install the npm package

-   with npm:

```bash
npm i -D @catppuccin/tailwindcss
```

-   with yarn:

```bash
yarn add -D @catppuccin/tailwindcss
```

2. Add the plugin into your `tailwind.config.js` file

```javascript
plugins: [require("@catppuccin/tailwindcss")],
```

3. Use the colors in any utility class that supports them, prefixed by the desired palette. For example:

```html
<p className="text-latte-mauve">
    This is a paragraph with the color mauve from the latte palette.
</p>
```

```html
<div className="bg-moccha-flamingo">
    This is a div with the background color of flamingo from the moccha palette.
</div>
```

4. Using the `Tailwind CSS IntelliSense` extension for VS Code is adviced to preview the class names, but not necessary.

## 🙋 FAQ (optional)

-   Q: **_"Will I be able to use the regular colors that come with Tailwind CSS after installing this plugin?"_**

    A: Yes, this plugin only extends the original colors and you can still add your own in the `tailwind.config.js` file like you normally would.

-   Q: **_"Colors are not working!"_**

    A: This plugin was made for Tailwind CSS 3.0+, previous versions may not work.

## 💝 Thanks to

-   [Adal Zanabria](https://github.com/AdalZanabria)

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/dev/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=302d41&colorB=c9cbff"/></a></p>
