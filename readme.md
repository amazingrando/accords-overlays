# Polyhedral Crew Screen Overlay

![Screenshot of the Polyhedral Crew using the overlay.](src/images/accords-overlay.png)

## Requirements

- [Node 8](https://nodejs.org/), preferably installed with [NVM](https://github.com/creationix/nvm).
- [Yarn](https://yarnpkg.com/en/) for managing packages.

## How to Setup

- `yarn` to install packages
- `gulp serve` to serve up the page.

## How to edit the files.

Making edits while running `yarn serve` will hot reload your changes.

- To change the text, edit `src/html.twig`.
- To change the styles, edit `src/sass/skin.scss`

## How to use this while streaming

- Run `gulp serve`
- Use `http://localhost:3000/` to insert the graphics as an overlay.
- When a player spends a Fate point, adjust the number in `src/html.twig` and it will live update. The same is true for the text that displays.
