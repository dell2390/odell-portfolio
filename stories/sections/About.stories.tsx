import { Meta, Story } from "@storybook/react"

import About from "components/sections/About"

export default {
    title: "Sections/About",
    component: About,
} as Meta

export const Basic: Story = (args) => <About {...args} />
