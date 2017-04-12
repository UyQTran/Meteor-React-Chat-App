import {FlowRouter} from 'meteor/kadira:flow-router';
import AppLayout from '../client/components/AppLayout.jsx';
import {mount} from 'react-mounter';
import React from 'react';
import LandingPage from '../client/components/LandingPage.jsx';
import ChatPage from '../client/components/ChatPage.jsx';

FlowRouter.route('/', {
    name: 'rootview',
    action(props) {
        mount(AppLayout, {
            body: (<LandingPage/>)
        });
    }
});

FlowRouter.route('/create-room/:pin', {
    name: 'create-room',
    action({pin}) {
        mount(AppLayout, {
            body: (<ChatPage roomNumber={pin}/>)
        });
    }
});

FlowRouter.notFound = {
    action() {
        mount(AppLayout, {
            body: (<p>404 siden finnes ikke</p>)
        });
    }
};