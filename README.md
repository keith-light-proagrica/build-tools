# Frontend build tools example

This project shows how to compile `scss` and `JS` into the `wwwroot` folder of a .NET project. Feel free to customize paths etc as needed.

## Prerequisites
Install `node/npm` on your computer (VS will look for your installed version).
- https://nodejs.org/en/download/
- or use a package manager like [chocolaty](https://chocolatey.org/install)

## Setup
- cd to `/build-tools/frontend`
- run `npm install` (or `yarn install`)

## Running the build tools
- run `npm run build` (or `yarn build`) to build assets
- run `npm run watch` (or `yarn watch`) to watch assets and recompile on change

## Troubleshooting
Sometimes a package/dependency will only work with a specific version of node. If you are having trouble running any of the packages try running `npm update --save`. If this doesn't work then try deleting package-lock.json, deleting `node_modules`, removing the versions in `package.json` (change `"package-name": "^7.18.2"` to `"package-name": "*"`) and try to reinstall packages.