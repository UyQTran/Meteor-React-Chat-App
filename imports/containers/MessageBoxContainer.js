import {Roles} from 'meteor/alanning:roles';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {composeWithTracker} from 'react-komposer';
import MessageBox from '../components/MessageBox.jsx';
import {MessagesSubs} from '../../server/config.js';
import {Messages} from '../../server/collections.js';

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

export default composeWithTracker(MessageBoxComposer)(MessageBox);