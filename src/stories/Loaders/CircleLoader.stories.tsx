import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CircleLoader as CircleLoaderComponent } from '@/Loaders/index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Loaders/CircleLoader',
  component: CircleLoaderComponent
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CircleLoaderComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleLoaderComponent> = (args) => (
  <CircleLoaderComponent {...args} />
)

export const CircleLoader = Template.bind({})
