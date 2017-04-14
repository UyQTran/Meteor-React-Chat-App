import React from 'react';
import AppLayout from '/imports/client/components/AppLayout.jsx';

FlowRouter.notFound = {
    action() {
        mount(AppLayout, {
                body: (<p>404 siden finnes ikke</p>)
    });
    }
};