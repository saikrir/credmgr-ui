import React from 'react';
import { connect } from 'react-redux';
import { Container, Message } from 'semantic-ui-react';

const AppMessages = ({ messages }) => {
  const renderMessages = () => {
    return messages.map(({ text, severity = 'INFO' }) => {
      if (severity === 'INFO') return <Message info> {text} </Message>;
      else if (severity === 'WARN') return <Message warning> {text} </Message>;
      else return <Message error> {text} </Message>;
    });
  };
  return <Container>{renderMessages()}</Container>;
};

const mapStateToProps = ({ appMessages }) => {
  return { messages: appMessages.messages };
};

export default connect(mapStateToProps, null)(AppMessages);
