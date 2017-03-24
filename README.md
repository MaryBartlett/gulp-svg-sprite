# Gulp SVG

Simple work flow for SVGs

## How to start

Make sure you have gulp installed globally (`npm install -g gulp-cli`).

Inside the repo, run `npm install`. This will install all the dependencies that this project needs.

Run either of the two tasks described below. The output will be in the `/build` directory.


## Tasks

`gulp` runs default gulp task ('svgs') which removes SVG properties and creates a sprite which is put in the `/build` directory.

`gulp watch` runs 'svgs' task on any change in the '/svg' directory

