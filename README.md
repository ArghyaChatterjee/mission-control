# [r/SpaceX Mission Control](https://github.com/r-spacex/mission-control)

JavaScript ![documentation %](https://r-spacex.github.io/mission-control/badge.svg)

## Servers

Mission Control is currently running on two servers: production and testing. The production server is located at [spacex-mission-control.herokuapp.com](https://spacex-mission-control.herokuapp.com), while the testing server is at [spx-mc-testing.herokuapp.com](https://spx-mc-testing.herokuapp.com). The production server should be stable and (mostly) bug-free, while the testing server may be unstable and (though unlikely) possibly not functional. However, the testing server will likely be a step or two ahead of production, feature-wise.

## Installation

**NB: The `./install` file is only confirmed to work on Debian-based Linux. It *should* work on OSX, and will *not* work on Windows.**

To setup Mission Control, run the following commands. This will copy the repo locally and install the requisite packages. You may need to enter your password to authenticate the installation.

```bash
git clone git@github.com:r-spacex/mission-control.git
cd mission-control
./install
```

## Environment variables

The following environment variables are expected to be set for ruby. If you supplied this in the `./install` file, you're all set.

| variable     | example value                       | purpose                                                                       |
| ---          | ---                                 | ---                                                                           |
| CLIENT_ID    | `LFE3XY450n6cai`                    | authenticates with reddit API                                                 |
| RACK_ENV     | `production`                        | allows external connections (disabled by default, use `production` to enable) |
| REDIRECT_URI | `https://example.com/auth/callback` | callback from reddit authentication                                           |
| SECRET       | `8BhhhFSSBZ9sYg6NZxQS7gsrnaq`       | authenticates with reddit API                                                 |
| SUBREDDIT    | `spacex`                            | subreddit to post to                                                          |

## Running the server

To run the server, go to the repo directory and run `heroku local`. If you need to run on a specific port, use the `-p` flag.

## Development

### gulp

To run [gulp](https://github.com/r-spacex/mission-control/blob/master/gulpfile.js), just use the `gulp` command, no arguments necessary. This will automatically do all of the following.

| task name       | what it does                                         |
| ---             | ---                                                  |
| postcss         | transpile and minify all CSS                         |
| rollup-modules  | combine all modules into a single file               |
| rollup-packages | combine all packages into a single file              |
| js-modules      | minify js modules                                    |
| watch           | watch directories, calls the proper task when needed |

### CSS

Mission Control uses [PostCSS](http://postcss.org/), which is located in the [`/src/public/css`](https://github.com/r-spacex/mission-control/tree/master/src/public/css) directory. All CSS should be split into relevant files, and pulled together in [`all.pcss`](https://github.com/r-spacex/mission-control/tree/master/src/public/css/all.pcss). Documentation for the plugins is avilable in [CSS.md](https://github.com/r-spacex/mission-control/tree/master/CSS.md).

### JavaScript

#### Packages

All packages are located in the [`/src/public/js/packages`](https://github.com/r-spacex/mission-control/tree/master/src/public/js/packages) directory. Mission Control currently uses the following packages.

- [annyang](https://github.com/TalAter/annyang)
- [Dialog polyfill](https://github.com/GoogleChrome/dialog-polyfill)
- [fetchival](https://github.com/typicode/fetchival)
- [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor)
- [Sortable](https://github.com/RubaXa/Sortable)

#### Modules
See [full documentation](https://r-spacex.github.io/mission-control) for detailed documentation.

## Browser support

Mission Control should work in the current version of all major browsers. Progressive enhancement exists, with the primary example being voice commands if speech recognition is supported (currently only Chrome). Graceful degredation is minimal, with `<input type='datetime-local'>` being a useful example.

## License

[MIT license](https://github.com/r-spacex/mission-control/blob/master/LICENSE)

## Contributing

Feel free to [fork](https://github.com/r-spacex/mission-control/fork) and [create a PR](https://github.com/r-spacex/mission-control/compare). Creating a PR implies you are releasing the code under the [MIT license](https://github.com/r-spacex/mission-control/blob/master/LICENSE).
