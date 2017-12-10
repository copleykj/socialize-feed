/* eslint-disable import/no-unresolved */
import { User } from 'meteor/socialize:user-model';
/* eslint-enable import/no-unresolved */

import { Feed } from './Feed.js';

User.methods({
    /**
    * Get a the feed object for a user containing functions relevant
    * to a users news feed
    *
    * @returns {Object} The feed object
    */
    feed() {
        const feed = new Feed();
        feed._id = this._id;
        feed._objectType = this._objectType;
        return feed;
    },
});
