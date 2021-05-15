import { Meta, Story } from "@storybook/react"

import RSSPodcastsContentList, {
    RSSPodcastsContentListProps,
} from "components/common/RSSPodcastsContentList"

export default {
    title: "Common/RSSPodcastsContentList",
    component: RSSPodcastsContentList,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story<RSSPodcastsContentListProps> = (args) => (
    <RSSPodcastsContentList {...args} />
)
Basic.args = {
    url: "https://feeds.transistor.fm/gameonysus-weekly",
}
