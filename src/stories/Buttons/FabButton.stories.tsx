import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FabButton as FabButtonComponent } from '@/Buttons/index'

export default {
  title: 'Components/Buttons/FabButton',
  component: FabButtonComponent
} as ComponentMeta<typeof FabButtonComponent>

const Template: ComponentStory<typeof FabButtonComponent> = (args) => (
  <FabButtonComponent {...args} />
)

export const FabButton = Template.bind({})
