import { Meta, Story } from "@storybook/react"

import Quote, { QuoteProps } from "components/common/Quote"

export default {
    title: "Common/Quote",
    component: Quote,
} as Meta

export const Basic: Story<QuoteProps> = (args) => <Quote {...args} />
Basic.args = {
    message:
        "Exercitation cillum fugiat ipsum et ullamco sint sunt anim aliquip commodo do duis labore ad. Eiusmod laboris veniam esse minim officia aliquip est in do laborum ea. Deserunt ea minim aute quis irure Lorem nisi ullamco.",
    signiture: "Magna Tempor",
}
