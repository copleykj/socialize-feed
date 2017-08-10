/* eslint-disable import/no-unresolved */
import { PostableModel } from 'meteor/socialize:postable';
import { LinkParent } from 'meteor/socialize:linkable-model';
/* eslint-enable import/no-unresolved */

export class Feed extends PostableModel(LinkParent) {

}
