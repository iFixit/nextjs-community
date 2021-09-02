import { extendTheme, Theme } from '@chakra-ui/react';

import styles from './styles';

import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import space from './foundations/space';

import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import Tabs from './components/Tabs';
import { theme } from '@ifixit/react-components';

theme.breakpoints = breakpoints;
theme.components = { Button, Input, Modal, Tabs };
const extendedTheme: Theme = extendTheme(theme);

export default extendedTheme;
