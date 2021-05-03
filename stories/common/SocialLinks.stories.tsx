import { Meta, Story } from "@storybook/react"

import SocialLinks, { SocialLinksProps } from "components/common/SocialLinks"

export default {
    title: "Common/Social Links",
    component: SocialLinks,
} as Meta

export const Basic: Story<SocialLinksProps> = (args) => <SocialLinks {...args} />
