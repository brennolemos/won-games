import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: undefined
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Buy now',
  icon: null
}

export const WithIcon: Story = (args) => <Button {...args} />
WithIcon.args = {
  children: 'Buy now',
  size: 'small',
  icon: <AddShoppingCart />
}

export const asLink: Story = (args) => <Button {...args} />
asLink.args = {
  children: 'Buy now',
  size: 'large',
  as: 'a',
  href: '/link'
}
