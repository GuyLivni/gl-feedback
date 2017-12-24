import React                         from 'react';
import { configure, addDecorator }   from '@storybook/react';
import { checkA11y }                 from '@storybook/addon-a11y';
import { withKnobs }                 from '@storybook/addon-knobs';
import { setOptions }                from '@storybook/addon-options';
import Container                     from './Container';

addDecorator(checkA11y);
addDecorator(withKnobs);
addDecorator(story => <Container story={story} />);

function loadStories() {
  // const req = require.context('../src/components', true, /\-story\.js$/);
  // req.keys().forEach(filename => req(filename));
  require('../src/components/common/TextInput/story');
}

configure(loadStories, module);

setOptions({
  name: 'Feedback',
  url: 'http://localhost:3000',
  sidebarAnimations: true
});
