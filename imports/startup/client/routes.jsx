import React from 'react';
import {mount} from 'react-mounter';
import AppLayout from '/imports/client/components/AppLayout.jsx';
import LandingPage from '/imports/client/components/LandingPage.jsx';
import ChatPage from '/imports/client/components/ChatPage.jsx';

FlowRouter.route('/', {
    name: 'rootview',
    action(props, {goToUrl}) {
        mount(AppLayout, {
            body: (<LandingPage/>)
        });
    }
});

FlowRouter.route('/chat-room/:pin', {
    name: 'chat-room',
    action({pin}) {
        mount(AppLayout, {
            body: (<ChatPage roomNumber={pin}/>)
        });
    }
});