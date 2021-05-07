import { Meta, Story } from "@storybook/react"

import Work from "components/sections/Work"

export default {
    title: "Sections/Work",
    component: Work,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story = (args) => <Work {...args} />
