# OpenQDA User Documentation

The user manual / documentation of OpenQDA

[![Deploy VitePress site to Pages](https://github.com/openqda/user-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/openqda/user-docs/actions/workflows/deploy.yml)
![GitHub License](https://img.shields.io/github/license/openqda/user-docs)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![This is a research software documentation](https://img.shields.io/badge/software-documentation-blue?style=plastic)
[![DOI](https://zenodo.org/badge/768506301.svg)](https://doi.org/10.5281/zenodo.11518216)


## Website

The documentation is available under https://openqda.github.io/user-docs/

It's built using [vitepress](https://vitepress.dev), a modern static website generator for documentations.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run docs:dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run docs:build
$ npm run docs:preview # optional to locally peview your build output
```


### Deployment
We use GitHub actions to automatically deploy updates to GitHub pages.
Any merges to `main` will trigger a new build to be deployed.
Pull requests, however will not trigger builds.

### Contributing
We welcome your contribution and appreciate your support!
Please read our contribution guidelines in order to make your contribution a success.

## License

See [license file](./LICENSE)
