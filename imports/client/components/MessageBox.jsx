import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Messages } from '/imports/api/collections.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class MessageBox extends TrackerReact(Component) {

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

    render() {
        const messageList = this.messages();
        return (
            <div className="chat-box">
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

MessageBox.propTypes = {
    roomNumber: PropTypes.string.isRequired
};