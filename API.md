## User Extensions ##

This package extends the `User` class from [socialize:user-model][2] to add a `feed` method that returns an instance of the Feed class.

**User.prototype.feed()** - Get a feed object for the user.

```javascript
var feed = Meteor.user().feed();
```
---

## Feed (class) - Extends [PostableModel][1] ##

Feed instances must be created by calling `user.feed()`. This will return the feed object for that user which has methods attached that allow for interacting with the users feed.

### Instance Methods ###

*All examples assume a feed object designated by the name `usersFeed`*

```javascript
const usersFeed = Meteor.user().feed();
```

**addPost(&lt;String&gt; body)** - Adds a post to the users feed. Inherited from `PostableModel`.

```javascript
usersFeed.addPost("Socialize Packages Rock!");
```

**posts(options)** - Returns a cursor of posts that were posted by anyone to this feed. Inherited from `PostableModel`. There is a corresponding publication, `socialize.feed.posts`, which can be subscribed to so that data is available on the client.

```javascript
const postCursor = usersFeed.posts({limit: 20, sort: { createdAt: 1 } });

postCursor.fetch();
```

**postsByOwner(options)** - Returns a cursor of posts that were posted to the feed by the owner of the feed. There is a corresponding publication, `socialize.feed.postsByOwner`, which can be subscribed to so that data is available on the client.

```javascript
const postCursor = usersFeed.postsByOwner({limit: 20, sort: { createdAt: 1 } });

postCursor.fetch();
```

### Publications ###
All publications take two arguments.

1. The userId of the feed owner
2. An options object which can contain any of *limit default=10*, *skip* or *sort default={createdAt: -1}*

```javascript
// example
Meteor.subscribe('socialize.feed.ownersPosts', Meteor.userId(), { limit: 20, sort: { createdAt: 1 } });
```

**socialize.feed.posts** - publishes all posts that were posted by anyone to the users feed.

**socialize.feed.ownersPosts** - publishes only posts that were posted by the owner of the feed.

## Friendship Package Integration ##

When the `socialize:friendships` package is present, this package will include additional instance methods and corresponding publications.

**friendsPosts** - Returns a cursor of posts by friends, from friends, or by friends to other friends. There is a corresponding publication, `socialize.feed.friendsPosts`, which can be subscribed to so that data is available on the client.

```javascript
const postCursor = usersFeed.friendsPosts({limit: 20, sort: { createdAt: 1 } });

postCursor.fetch();
```

**friendsPostsToOwner** - Returns a cursor of posts from the owners friends to the owner. There is a corresponding publication, `socialize.feed.friendsPostsToOwner`, which can be subscribed to so that data is available on the client.

```javascript
const postCursor = usersFeed.friendsPostsToOwner({limit: 20, sort: { createdAt: 1 } });

postCursor.fetch();
```

**ownersPostsToFriends** - Returns a cursor of posts by the feed owner to their friends.

```javascript
const postCursor = usersFeed.ownersPostsToFriends({limit: 20, sort: { createdAt: 1 } });

postCursor.fetch();
```

### Publications for Friendship Package Integration ###
All publications take two arguments.

1. The userId of the feed owner
2. An options object which can contain any of *limit default=10*, *skip* or *sort default={createdAt: -1}*

```javascript
// example
Meteor.subscribe('socialize.feed.friendsPosts', Meteor.userId(), { limit: 20, sort: { createdAt: 1 } });
```

**socialize.feed.friendsPosts** - publishes posts by friends, from friends, or by friends to other friends.

**socialize.feed.friendsPostsToOwner** - publishes posts from the owners friends to the owner.

**socialize.feed.ownersPostsToFriends** - publishes posts by the feed owner to their friends.



[1]: https://github.com/copleykj/socialize-postable
[2]: https://github.com/copleykj/socialize-user-model
