import { Meta, Story } from "@storybook/react"

import ContentList, { ContentListProps } from "components/common/ContentList"

export default {
    title: "Common/ContentList",
    component: ContentList,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story<ContentListProps> = (args) => <ContentList {...args} />
Basic.args = {}

export const WithLabel: Story<ContentListProps> = (args) => <ContentList {...args} />
WithLabel.args = {
    ...Basic.args,
    label: "quia esse voluptatem",
}
