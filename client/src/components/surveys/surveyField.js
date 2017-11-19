import React           from 'react';
import {Form, Message} from 'semantic-ui-react';

export default ({input, label, placeholder, meta: {error, touched}}) => {
  return (
    <Form.Field>
      <Form.Input
        label={label}
        placeholder={placeholder} {...input}
        error={touched && error && true}
      />
      { touched &&
      <Message
        error
        header={error && 'Error'}
        content={error}
      /> }
    </Form.Field>
  );
};
