/* eslint-disable import/no-unresolved */
import { User } from 'meteor/socialize:user-model';
import { PostsCollection } from 'meteor/socialize:postable';
/* eslint-enable import/no-unresolved */

PostsCollection.allow({
    insert(userId, post) {
        const user = User.createEmpty(post.linkedObjectId);
        const poster = User.createEmpty(post.posterId);
        if (user.isSelf(poster)) {
            return true;
        }
        return userId && !user.blocksUser(poster) && !poster.blocksUserById(user);
    },
});
