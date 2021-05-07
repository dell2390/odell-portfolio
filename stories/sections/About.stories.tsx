import { Meta, Story } from "@storybook/react"

import About from "components/sections/About"

export default {
    title: "Sections/About",
    component: About,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story = (args) => <About {...args} />
