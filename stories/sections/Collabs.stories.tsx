import { Meta, Story } from "@storybook/react"

import Collabs from "components/sections/Collabs"

export default {
    title: "Sections/Collabs",
    component: Collabs,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story = (args) => <Collabs {...args} />
