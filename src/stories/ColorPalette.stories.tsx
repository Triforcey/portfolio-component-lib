import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import '@/global.css';

const ColorSwatch = ({ name, color, description }: { name: string; color: string; description: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="pcl:flex pcl:items-center pcl:gap-4 pcl:p-4 pcl:border pcl:border-gray-300 pcl:rounded-lg">
      <div
        className="pcl:w-24 pcl:h-24 pcl:rounded-lg pcl:shadow-md pcl:flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      <div className="pcl:py-4">
        <h3 className="pcl:font-bold pcl:text-lg pcl:mt-0">{name}</h3>
        <p className="pcl:text-gray-600 pcl:text-sm">{description}</p>
        <code
          onClick={handleCopyClick}
          className="pcl:text-xs pcl:bg-gray-100 pcl:px-2 pcl:py-1 pcl:rounded pcl:cursor-pointer hover:pcl:bg-gray-200 pcl:transition-colors pcl:select-none"
          title="Click to copy"
        >
          {copied ? '✓ Copied!' : color}
        </code>
      </div>
    </div>
  );
};

const ColorPalettePreview = () => {
  const colors = [
    {
      name: 'Primary',
      color: '#AE00FF',
      description: 'Electric purple - Main brand color'
    },
    {
      name: 'Primary Dark',
      color: '#6B3F7F',
      description: 'Muted purple - Hover states, depth'
    },
    {
      name: 'Background Dark',
      color: '#030051',
      description: 'Midnight blue - Dark mode background'
    },
    {
      name: 'Background Light',
      color: '#FFFEE8',
      description: 'Cream - Light mode background'
    },
    {
      name: 'Accent Gold',
      color: '#FFD000',
      description: 'Bright yellow - Highlights, CTAs'
    },
    {
      name: 'Accent Gold Muted',
      color: '#CFB957',
      description: 'Muted gold - Subtle accents'
    },
    {
      name: 'Accent Lime',
      color: '#C4FF00',
      description: 'Lime - Energy, focus points'
    },
    {
      name: 'Accent Lime Muted',
      color: '#AFD153',
      description: 'Sage - Subtle green accents'
    }
  ];

  return (
    <div className="pcl:p-8 pcl:space-y-4">
      <div className="pcl:mb-8">
        <h1 className="pcl:text-3xl pcl:font-bold pcl:mb-2">Super Portfolio Color Palette</h1>
        <p className="pcl:text-gray-600">Custom theme colors defined in global.css</p>
      </div>
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </div>
  );
};

const meta: Meta<typeof ColorPalettePreview> = {
  title: 'Design System/Color Palette',
  component: ColorPalettePreview,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<typeof ColorPalettePreview> = {};
