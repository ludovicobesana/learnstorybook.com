import React from 'react';
import SiteStat from './SiteStat';

export default {
  component: SiteStat,
  title: 'Screens/IndexScreen/SiteStat',
};

function Story(args) {
  return <SiteStat {...args} />;
}
export const Default = Story.bind({});
Default.args = {
  heading: '6 guides',
  message: 'Professional walkthroughs made for frontend devs. Updated all the time.',
};
