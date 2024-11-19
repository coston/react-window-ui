# react-window-ui 🖼✨

[![npm version](https://badge.fury.io/js/react-window-ui.svg)](https://www.npmjs.com/package/react-window-ui)
[![npm](https://img.shields.io/npm/dm/react-window-ui.svg)](https://www.npmjs.com/package/react-window-ui)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

## Demo & Examples

Live demo: [react-window-ui.coston.io](https://react-window-ui.coston.io)

## What

React components for fast presentational window ui.

## Installation

```bash
npm install --save react-window-ui
```

## Window UI

- Browser (Like Mac OS X window UI)
- Terminal (Like Hyper terminal)
- MacTerminal (Like Mac OS X terminal)

### Input

```js
import React from "react";
import { Browser } from "react-window-ui";

export default () => (
  <>
    <Browser>
      <h3>Browser</h3>
      <p>Use {"<Browser/>"} to frame browser content!</p>
    </Browser>
    <Terminal>
      <h3>Terminal</h3>
      <p>Use {"<Terminal/>"} to frame terminal content!</p>
    </Terminal>
    <MacTerminal>
      <h3>MacTerminal</h3>
      <p>Use {"<MacTerminal/>"} to frame terminal content!</p>
    </MacTerminal>
  </>
);
```

## Options

| Prop             | Type      | Description                                               |
| ---------------- | --------- | --------------------------------------------------------- |
| topbarTitle      | `string`  | title of the topbar                                       |
| topbarTitleColor | `string`  | color of topbar title                                     |
| barHeight        | `string`  | height of the topbar                                      |
| divider          | `string`  | css border values of topbar border-bottom                 |
| padding          | `string`  | css padding of content widow                              |
| topbarColor      | `string`  | color of topbar                                           |
| background       | `string`  | color of main content window                              |
| border           | `string`  | css border values of outer border                         |
| grayscale        | `boolean` | sets ui button to greyscale instead of red, yellow, green |
| boxShadow        | `string`  | customize box shadow styles                               |

## Development

```bash
npm run build
```

## Contributing

Please help make this react component better. Submit any issue and/or make a pull request!

## License

Licensed under the GNU General Public License v3.0.
