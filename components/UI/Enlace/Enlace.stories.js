import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Enlace from './Enlace';

storiesOf(Enlace.displayName, module)
  .add('with text', () => <Enlace onClick={action('clicked')}>Hello Button</Enlace>)
  .add('with some emoji', () => (
    <Enlace onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Enlace>
  ));
