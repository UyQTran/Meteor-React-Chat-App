import { Meteor } from 'meteor/meteor';
import { Messages } from '/imports/api/collections.js';

Meteor.publish('messages.byRoomNumber', (roomNumber) => {
    return Messages.find({roomNumber});
});