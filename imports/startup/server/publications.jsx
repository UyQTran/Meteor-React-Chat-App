import { Meteor } from 'meteor/meteor';
import { Messages } from '/imports/api/collections.jsx';

Meteor.publish('messages.byRoomNumber', (roomNumber) => {
    return Messages.find({roomNumber});
});