import React from 'react';
import {Form, Message} from 'semantic-ui-react';

export default ({input, label, meta: {error, touched}}) => {
  return (
    <Form.Field>
      <Form.Input label={label} {...input} />
      { touched && <Message
        error
        header={error && 'Error'}
        content={error}
      /> }
    </Form.Field>
  );
};
