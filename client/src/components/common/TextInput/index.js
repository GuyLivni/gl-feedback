/* @flow */
import React  from 'react';
import styled from 'styled-components';

import Label  from './inputLabel';
import Input  from './inputField';
import Error  from './inputError';
import Info   from './inputInfo';

const StyledTextInput = styled.div`
  position: relative;
  padding-top: 15px;
  margin-bottom: 20px;
  text-align: left;
`;

type Props = {
  /** Title, title describing the input */
  title?: string,
  /** Label, animated and displayed above the input */
  label?: string,
  /** Input error message displayed under the input on focus out */
  error?: string,
  /** Input info, displayed while there is no error */
  info?: string,
  /** Input value which can be provided and controlled externally */
  value?: string,
  /** Input field can show that it is disabled. */
  disabled?: boolean,
  /** Input touched status, can be passed from outside, if not will be checked inside */
  touched?: boolean,
  /** Input focus function which returns current focus state */
  focus?: Function,
  /**
   * onChange(data: string, event: SyntheticEvent).
   * data: All props and proposed value.
   * event: React's original SyntheticEvent.
   */
  onChange?: Function
};

type State = {
  focused: boolean,
  innerValue: string,
  innerTouched: boolean
};

class TextInput extends React.Component<Props, State> {
  static defaultProps = {
    focus: () => {},
    onChange: () => {},
    disabled: false,
    title: 'Input field',
    touched: false
  };

  state = {
    focused: false,
    innerValue: '',
    innerTouched: false
  };

  handleOnFocus = () => (
    this.setState({ focused: true }, () =>
      this.props.focus && this.props.focus(this.state.focused)
    )
  );

  handleOnBlur = () => (
    this.setState({ focused: false, innerTouched: true })
  );

  handleOnChange = (e: SyntheticInputEvent<HTMLInputElement>) => (
    this.setState({ innerValue: e.target.value }, () =>
      this.props.onChange && this.props.onChange(this.state.innerValue, e)
    )
  );

  render() {
    const { label, error, info, value, disabled, title, touched } = this.props;
    const { innerTouched, focused, innerValue } = this.state;

    return (
      <StyledTextInput>
        <Label
          label={label}
          focused={focused}
          disabled={disabled}
          value={value || innerValue}
        />
        <Input
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          touched={innerTouched}
          error={error}
          disabled={disabled}
          title={title}
          value={value || innerValue}
        />
        {
          ((touched || innerTouched) && error) ?
            <Error error={this.props.error} /> :
            info ? <Info info={this.props.info} /> : null
        }
      </StyledTextInput>
    );
  }
}

export default TextInput;

