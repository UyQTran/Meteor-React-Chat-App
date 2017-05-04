import { Mongo } from 'meteor/mongo';

const Messages = new Mongo.Collection('messages');

export {
    Messages
};

export default {
    Messages
};