/* global Package */

/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import { PostableModel, PostsCollection } from 'meteor/socialize:postable';
import { LinkParent } from 'meteor/socialize:linkable-model';
import { User } from 'meteor/socialize:user-model';
/* eslint-enable import/no-unresolved */

import extendUser from './user-extensions.js';
import FeedConstruct, { extendFeedForFriends } from './feed.js';


const { Feed } = FeedConstruct({ Meteor, PostableModel, PostsCollection, LinkParent });
extendUser({ User, Feed });

if (Package['socialize:friendships']) {
    extendFeedForFriends({ Meteor, Feed, PostsCollection });
}
