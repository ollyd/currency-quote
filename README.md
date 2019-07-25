### Currency Quote

A simple web app hitting the OFX public API to get the echange rate between two currencies.

### Tech

It uses React and Styled Components.

Eslint for linting, which runs on a pre-commit hook.

React Testing Library, Jest, Jest Styled Components for testing, which runs pre-push.

### Installation

Clone this repo.
```sh
$ yarn install
$ yarn start
```

For a production build:

```sh
$ yarn build
```
### Todo

| Field | Task |
| ------ | ------ |
| UI | Add validation for email, names, and currency amount. |
| UI | Remove Material-UI for inputs. (This was only used as a time saving measure.) |
| UI | Fix loading spinner positioning |
| Testing | Testing framework has been set up but tests haven't been written yet, again due to time constraints. |

