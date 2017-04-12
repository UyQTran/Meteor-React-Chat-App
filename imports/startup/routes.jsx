import {FlowRouter} from 'meteor/kadira:flow-router';
import AppLayout from '../ui/AppLayout.jsx';
import LandingPage from '../ui/LandingPage.jsx';
import {mount} from 'react-mounter';
import React from 'react';

FlowRouter.route('/', {
    name: 'rootview',
    action(props, {goToUrl}) {
        mount(AppLayout, {
            body: (<LandingPage/>)
        });
    }
});