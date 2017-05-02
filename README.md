# <img src="http://i.imgur.com/GOOa67f.png" width="80%">

[![Build Status](https://travis-ci.org/Maybulb/Nimble2.svg?branch=master)](https://travis-ci.org/Maybulb/Nimble2) [![dependencies Status](https://david-dm.org/Maybulb/Nimble2/status.svg)](https://david-dm.org/Maybulb/Nimble2)

A whole new Nimble.

Seamless Wolfram-Alpha® in your macOS menubar.

> “The menubar client is every bit as intuitive as the web interface, meaning it’s easy to use...” – [The Next Web](http://thenextweb.com/insider/2016/02/08/nimble-brings-wolfram-alpha-to-your-menubar-on-os-x/)

> “Nimble can handle pretty much anything you’d normally throw at Wolfram Alpha...” – [Lifehacker](http://lifehacker.com/nimble-crams-wolfram-alpha-into-your-macs-menu-bar-1758071364)

## Installation

TODO

## Development

Nimble 2 uses Create React App along with Electron. You are advised to use `yarn` to install dependencies (`npm i -g yarn`).

Clone the repository to a local workspace, like so:

```sh
$ git clone https://github.com/Maybulb/Nimble2.git
```

Once you have cloned the repository, you will need to setup your own local .env file. This file contains the environment variables used to authenticate with the Wolfram|Alpha® server(s), and other important services.

You can start by copying the `sample.env` file to `.env` (`cp sample.env .env`). Then you will need to locate your Wolfram|Alpha® API key and add it to the `.env` file.

Next you will need to install the dependencies necessary to develop & run Nimble. If you went ahead and installed yarn, this process should be relatively quick (`yarn install`). You can also use npm to install the dependencies, but don't expect it to be anywhere near as fast (`npm install`).

Once ready, you can boot up the app in dev mode. This consists of two main tasks; Create React App (CRA), and the Electron process. Please note: CRA automatically opens up a browser window pointed to the app, however because Nimble only works as a desktop app, just close the browser window.

You can perform these tasks by running:

```sh
$ yarn start
```

## Contribution
Want to make a contribution? Fork the repo, add your changes, and submit a pull request. Any type of contributions (ideas, bug fixes, fixing typos, etc...) are appreciated!

## License
Nimble is licensed under [Creative Commons Attribution-NonCommercial 4.0](./LICENSE.md).
