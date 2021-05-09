import React from 'react';
import { Story } from '@storybook/react';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Icon, { IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
};

const Template: Story<IconProps> = (props: IconProps) => <Icon {...props} />;

export const Default = Template.bind({});
Default.args = {
  icon: faCheckSquare,
};
