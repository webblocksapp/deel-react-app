# Deel React App

React + Typescript technical test by implementing an autocomplete component without using third party ui libraries.

## Quick Start

You can start the project by running the following in your terminal at root folder:

```bash
yarn
yarn start
```

At root folder, define the `.env` file as follows:

```bash
API_ROOT=http://localhost:4200
```

By default `API_ROOT` is `http://localhost:4200`, which is the port where runs `json-server`, a local simulated backend.

## Folder structure

- [apis/](./src/apis)
- [assets/](./src/assets)
- [components/](./src/components)
- [constants/](./src/constants)
- [interfaces/](./src/interfaces)
- [layouts/](./src/layouts)
- [themes/](./src/themes)
- [utils/](./src/utils)
- [App.tsx](./src/App.tsx)
- [index.tsx](./src/index.tsx)

## Additional notes

- Webpack, tsconfig and jest definitions were done from scratch.
- Project coverage is at 100%, for executing tests run:

```bash
yarn test
```

- As bonus, it's included a very simple theme system, done from scratch, which supports light and dark mode.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Authored by: Mauricio Rivera
