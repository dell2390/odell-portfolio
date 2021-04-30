import { Meta, Story } from "@storybook/react"

import Button from "components/common/Button"

export default {
  title: "Components/Button",
  component: Button,
} as Meta

export const Basic: Story = (args) => <Button {...args} />
