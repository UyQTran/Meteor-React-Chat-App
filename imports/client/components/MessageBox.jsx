import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import PinGeneratorService from '../services/PinGeneratorService.jsx';
import { Messages } from '/imports/api/collections.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class MessageBox extends TrackerReact(Component){

    messages() {
        return Messages.find().fetch();
    }

    constructor(props) {
        super(props);

        this.state = {
            subscription: {
                messages: Meteor.subscribe('messages.byRoomNumber', props.roomNumber)
            }
        };

    }


    handleCreateButton() {
        const pin = PinGeneratorService.generatePin();
        FlowRouter.go('chat-room', {pin:pin});
    }


    render() {
        const messageList = this.messages();
        return (
            <div>
                {messageList.map((message, index)=>{
                    return (
                        <p key={index}>
                            {message.messageString}
                        </p>
                    );
                })}
            </div>
        );
    }
}