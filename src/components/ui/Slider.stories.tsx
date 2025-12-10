import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  args: {
    label: 'Temperature',
    min: 0,
    max: 1,
    value: 0.5,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    onChange: () => {},
  },
};
