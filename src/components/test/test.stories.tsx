import type { Meta, StoryObj } from '@storybook/react-vite';
import { Test } from './test';

const meta: Meta<typeof Test> = {
  title: 'Test',
  component: Test,
};

export default meta;

export const Primary: StoryObj<typeof Test> = {
  args: {
    label: 'Test',
  },
};
