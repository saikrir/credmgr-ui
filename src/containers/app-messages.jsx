import React from 'react';
import { connect } from 'react-redux';
import { Container, Message } from 'semantic-ui-react';

const AppMessages = ({ messages }) => {
  const renderMessages = () => {
    return messages.map(({ text, severity = 'INFO' }, idx) => {
      let inputProps = {
        [severity.toLowerCase()]: true
      };
      return (
        <Message {...inputProps} key={idx}>
          {text}
        </Message>
      );
    });
  };
  return <Container>{renderMessages()}</Container>;
};

const mapStateToProps = ({ appMessages }) => {
  return { messages: appMessages.messages };
};

export default connect(mapStateToProps, null)(AppMessages);
