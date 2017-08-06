# Feed #

A package for creating a social network style news feed

---

## User Extensions ##

This package extends the `User` class from [socialize:user-model][4] to add a `feed` method that returns an instance of the Feed class.

**User.prototype.feed()** - Get a feed object for the user.

```javascript
var feed = Meteor.user().feed();
```
---

## Feed (class) - Extends [PostableModel][1] ##

Feed instances must be created by calling `user.feed()`. This will return the feed object for that user which has methods attached that allow for interacting with the users feed.

### Instance Methods ###

**addPost(&lt;String&gt; body)** - Add a post to the users feed.

```javascript
const usersFeed = Meteor.user().feed();

usersFeed.addPost("Socialize Packages Rock!");

usersFeed.posts().fetch()
```

[1]: https://github.com/copleykj/socialize-postable
[2]: https://github.com/copleykj/socialize-commentable
[3]: https://github.com/copleykj/socialize-likeable
[4]: https://github.com/copleykj/socialize-user-model
