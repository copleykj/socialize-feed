/* eslint-disable import/no-unresolved */
import { User } from 'meteor/socialize:user-model';
import { PostsCollection } from 'meteor/socialize:postable';
/* eslint-enable import/no-unresolved */

import './publications.js';

PostsCollection.allow({
    insert(userId, post) {
        if (post.objectType === 'users') {
            const user = User.createEmpty(post.linkedObjectId);
            const poster = User.createEmpty(post.posterId);
            if (user.isSelf(poster)) {
                return true;
            }
            return userId && !user.blocksUser(poster) && !poster.blocksUserById(user);
        }
        return undefined;
    },
});
