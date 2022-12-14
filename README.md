# Gloo Platform Portal UI

## Description

This project is meant to be used with Gloo Platform API Portals. It may be used as a standalone API dev portal interface, or as a template.

## Setup

Paste the following into a terminal to get started. Node 16+ is required. In this code snippet, [degit](https://github.com/Rich-Harris/degit) is used to download the latest commit of this repository's main branch, and [yarn](https://yarnpkg.com/) is used as the package manager.

```
npx degit charlesthebird/portal-test#main portal-test && cd portal-test && yarn && open http://localhost:4000 && yarn run dev
```

## Technology

- This project was created with [Vite](https://vitejs.dev/), and configured to use React and TypeScript.
- [Stoplight Elements](https://github.com/stoplightio/elements) is used for the API details page.
  - The web component is used here in place of the React component, since the React component had dependency issues.
- The styles are extended with [Sass](https://sass-lang.com/).
