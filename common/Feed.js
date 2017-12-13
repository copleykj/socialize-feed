/* global Package */

/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import { PostableModel, PostsCollection } from 'meteor/socialize:postable';
import { LinkParent } from 'meteor/socialize:linkable-model';
/* eslint-enable import/no-unresolved */

export class Feed extends PostableModel(LinkParent) {
    postsByOwner(options = {}) {
        return PostsCollection.find({ LinkedObjectId: this._id, posterId: this._id }, options);
    }
}

if (Package['socialize:friendships']) {
    const { FriendsCollection } = require('meteor/socialize:friendships'); // eslint-disable-line

    Feed.methods({
        friendsPosts(options = {}) {
            const currentUser = Meteor.user();
            if (currentUser) {
                const friendIds = currentUser.friends().map(friend => friend.friendId);
                friendIds.push(currentUser._id);

                return PostsCollection.find({ linkedObjectId: { $in: friendIds }, posterId: { $in: friendIds } }, options);
            }
            return undefined;
        },
        friendsPostsToOwner(options = {}) {
            const currentUser = Meteor.user();
            if (currentUser) {
                const friendIds = currentUser.friends().map(friend => friend.friendId);
                friendIds.push(currentUser._id);

                return PostsCollection.find({ linkedObjectId: this._id, posterId: { $in: friendIds } }, options);
            }
            return undefined;
        },
        ownersPostsToFriends(options = {}) {
            const currentUser = Meteor.user();
            if (currentUser) {
                const friendIds = currentUser.friends().map(friend => friend.friendId);
                friendIds.push(currentUser._id);

                return PostsCollection.find({ linkedObjectId: { $in: friendIds }, posterId: this._id }, options);
            }
            return undefined;
        },
    });
}
