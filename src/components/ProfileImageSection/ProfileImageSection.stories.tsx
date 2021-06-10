import React from 'react';
import { Story } from '@storybook/react';
import ProfileImageSection, {
  ProfileImageSectionProps,
} from './ProfileImageSection';

export default {
  title: 'Components/ProfileImageSection',
  component: ProfileImageSection,
};
const Template: Story<ProfileImageSectionProps> = (
  props: ProfileImageSectionProps,
) => <ProfileImageSection {...props} />;

export const Default = Template.bind({});
Default.args = {};
