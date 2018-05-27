export default ({ PostableModel, PostsCollection, LinkParent }) => {
    class Feed extends PostableModel(LinkParent) {
        postsByOwner(options = {}) {
            return PostsCollection.find({ linkedObjectId: this._id, posterId: this._id }, options);
        }
    }
    return { Feed };
};

export const extendFeedForFriends = ({ Meteor, Feed, PostsCollection }) => {
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
};
