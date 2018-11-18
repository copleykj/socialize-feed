/* eslint-disable import/no-unresolved, global-require, no-empty*/
import Meteor from '@socialize/react-native-meteor';
import { PostableModel, PostsCollection } from '@socialize/postable';
import { LinkParent } from '@socialize/linkable-model';
import { User } from '@socialize/user-model';
import '@socialize/friendships';

import extendUser from './common/user-extensions.js';
import FeedConstruct, { extendFeedForFriends } from './common/feed.js';


const { Feed } = FeedConstruct({ PostableModel, PostsCollection, LinkParent });
extendUser({ User, Feed });
extendFeedForFriends({ Meteor, Feed, PostsCollection });
