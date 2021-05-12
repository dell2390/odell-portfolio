import { Meta, Story } from "@storybook/react"

import Content from "components/sections/Content"

export default {
    title: "Sections/Content",
    component: Content,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story = (args) => <Content {...args} />
