import {Meteor} from 'meteor/meteor';
import { Messages } from '/imports/api/collections.jsx';

Meteor.methods({
    addMessage(roomNumber, messageString) {
        const message = {roomNumber, messageString};

        return Messages.insert(message);
    }
});