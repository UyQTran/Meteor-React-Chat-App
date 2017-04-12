import {Roles} from 'meteor/alanning:roles';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {compose} from 'react-komposer';
import MessageBox from '../components/MessageBox.jsx';
import { Messages } from '/imports/api/collections.js';
import { MessagesSubs } from '/imports/api/config.js';

const MessageBoxComposer = ({roomNumber}, onData) => {

    const subsReady = [
        MessagesSubs.subscribe()
    ].every(handle => handle.ready());

    if(subsReady) {
        const query = {roomNumber};
        const messageList = Messages.find(query).fetch();
        onData({messageList});
    }
};

export default compose(MessageBoxComposer)(MessageBox);