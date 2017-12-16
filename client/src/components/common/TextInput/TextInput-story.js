import React         from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo }  from '@storybook/addon-info';
import { action }    from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import TextField     from './index';

const TextInputIntro = `The example below shows the default Text Input component.`;

storiesOf('Text Input', module)
  .add('Default',
    withInfo({
      text: TextInputIntro
    })(() =>
      <TextField
        title={text('title', 'Input title')}
        label={text('label', 'Input label')}
        info={text('info', 'Input info')}
        error={text('error', '')}
        disabled={boolean('disabled', false)}
        onChange={action('onChange')}
        />
    )
  );
