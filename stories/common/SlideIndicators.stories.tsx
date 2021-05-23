import { Meta, Story } from "@storybook/react"

import SlideIndicators, { SlideIndicatorsProps } from "components/common/SlideIndicators"

export default {
    title: "Common/SlideIndicators",
    component: SlideIndicators,
    parameters: {
        storyshots: { disable: true },
    },
} as Meta

export const Basic: Story<SlideIndicatorsProps> = (args) => <SlideIndicators {...args} />
Basic.args = {
    total: 5,
    currentIndex: 0,
}
