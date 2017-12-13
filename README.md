# Feed #

A package for creating a social network style news feed

## Supporting the Project ##
In the spirit of keeping this and all of the packages in the [Socialize](https://atmospherejs.com/socialize) set alive, I ask that if you find this package useful, please donate to it's development.

[Bitcoin](https://www.coinbase.com/checkouts/4a52f56a76e565c552b6ecf118461287) / [Patreon](https://www.patreon.com/user?u=4866588) / [Paypal](https://www.paypal.me/copleykj)

## Installation ##

```shell
$ npm install --save simpl-schema
$ meteor add socialize:feed
```

## Basic Usage ##

```javascript
import { Meteor } from 'meteor/meteor';

Meteor.subscribe('socialize.feed.posts', { limit: 5, sort: { createdAt: -1 } })

Meteor.user().feed().addPost("Just discovered these Socialize packages and they AWESOME!");
```

For a more in depth explanation of how to use this package see [API.md](API.md)

## Scalability - Redis Oplog ##

This package contains a preliminary implementation of [cultofcoders:redis-oplog][1]'s namespaces to provide reactive scalability as an alternative to Meteor's `livedata`. Use of redis-oplog is not required and will not engage until you install the [cultofcoders:redis-oplog][1] package and configure it.

Due to the preliminary nature of this implementation, you may run into minor issues. Please report any issues you find to GitHub so that they can be fixed.

[1]:https://github.com/cultofcoders/redis-oplog
