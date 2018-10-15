# Feed

A package for creating a social network style news feed

>This is a [Meteor][meteor] package with part of it's code published as a companion NPM package made to work with React Native. This allows your Meteor and React Native projects that use this package to share code between them to give you a competitive advantage when bringing your mobile and web application to market.

- [Feed](#feed)
    - [Supporting the Project](#supporting-the-project)
    - [Meteor Installation](#meteor-installation)
    - [React Native Installation](#react-native-installation)
    - [Basic Usage](#basic-usage)
    - [Scalability - Redis Oplog](#scalability---redis-oplog)

## Supporting the Project
In the spirit of keeping this and all of the packages in the [Socialize][socialize] set alive, I ask that if you find this package useful, please donate to it's development.

![Litecoin](http://gdurl.com/xnOe)

[Patreon](https://www.patreon.com/user?u=4866588) / [Paypal](https://www.paypal.me/copleykj)

## Meteor Installation

This package relies on the npm package `simpl-schema` so you will need to make sure it is installed as well.

```shell
$ meteor npm install --save simpl-schema
$ meteor add socialize:feed
```

## React Native Installation

When using this package with React Native, the dependency tree ensures that `simpl-schema` is loaded so there's no need to install it as when using within Meteor.

```shell
$ npm install --save @socialize/feed
```
> **Note**
>
>  When using with React Native, you'll need to connect to a server which hosts the server side Meteor code for your app using `Meteor.connect` as per the [@socialize/react-native-meteor](https://www.npmjs.com/package/@socialize/react-native-meteor#example-usage) documentation.

## Basic Usage

Depending on the environment your code will be running in, you'll need to import the classes from the packages specific to that environment, either Meteor or React Native.

```javascript
// Meteor Imports
import { Meteor } from 'meteor/meteor';
```

In the case of use with React-Native, you'll also need to import this package to allow it to extend the `User` class properly.

```javascript
// React Native Imports
import Meteor from '@socialize/react-native-meteor';
import '@socialize/feed';
```

Once we have the appropriate packages imported, the rest of the code will run in either environment.

```javascript

Meteor.subscribe('socialize.feed.posts', { limit: 5, sort: { createdAt: -1 } })

Meteor.user().feed().addPost("Just discovered these Socialize packages and they AWESOME!");
```

For a more in depth explanation of how to use this package see [API.md][api]

## Scalability - Redis Oplog

This implements [cultofcoders:redis-oplog][redis-oplog]'s namespaces to provide reactive scalability as an alternative to Meteor's `livedata`. Use of redis-oplog is not required and will not engage until you install the [cultofcoders:redis-oplog][redis-oplog] package and configure it.

[redis-oplog]:https://github.com/cultofcoders/redis-oplog
[socialize]: https://atmospherejs.com/socialize
[meteor]: https://meteor.com
[api]: https://github.com/copleykj/socialize-feed/blob/master/API.md
