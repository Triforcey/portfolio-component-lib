import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeaderImage } from './HeaderImage';
import headerBg from './header-bg.png';

const meta: Meta<typeof HeaderImage> = {
  title: 'HeaderImage',
  component: HeaderImage,
};

export default meta;

export const Primary: StoryObj<typeof HeaderImage> = {
  args: {
    imageSrc: headerBg,
  },
};
