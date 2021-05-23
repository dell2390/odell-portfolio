import { Meta, Story } from "@storybook/react"

import Video, { VideoProps } from "components/common/Video"

export default {
    title: "Common/Video",
    component: Video,
} as Meta

export const Basic: Story<VideoProps> = (args) => <Video {...args} />
Basic.args = {
    title: "Aliqua nisi culpa eiusmod quis veniam consequat esse",
    outlet: "Hudson Inc",
    date: "December 25, 2000",
    src: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
}

export const WithExtras: Story<VideoProps> = (args) => <Video {...args} />
WithExtras.args = {
    ...Basic.args,
    url: "https://www.google.com",
    poster: "http://placeimg.com/1280/720/city",
}
