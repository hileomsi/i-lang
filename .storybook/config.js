import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

const themes = [{ mode: 'light' }, { mode: 'dark' },];
// automatically import all files ending in *.stories.js
addDecorator(withThemesProvider(themes));
configure(require.context('../src', true, /\.stories\.js$/), module);
