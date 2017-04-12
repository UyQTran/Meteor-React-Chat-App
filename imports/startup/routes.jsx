import {FlowRouter} from 'meteor/kadira:flow-router';
import AppLayout from '../components/AppLayout.jsx';
import {mount} from 'react-mounter';
import React from 'react';
import LandingPage from '../components/LandingPage.jsx';
import ChatPage from '../components/ChatPage.jsx';

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