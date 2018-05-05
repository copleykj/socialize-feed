export default ({ User, Feed }) => {
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
};
