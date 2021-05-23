import { Meta, Story } from "@storybook/react"

import OverflowList, { OverflowListProps } from "components/common/OverflowList"

export default {
    title: "Common/OverflowList",
    component: OverflowList,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story<OverflowListProps> = (args) => (
    <OverflowList {...args}>
        <img src="https://via.placeholder.com/640x480?text=Image+1" alt="sample" />
        <img src="https://via.placeholder.com/640x480?text=Image+2" alt="sample" />
        <img src="https://via.placeholder.com/640x480?text=Image+3" alt="sample" />
    </OverflowList>
)
