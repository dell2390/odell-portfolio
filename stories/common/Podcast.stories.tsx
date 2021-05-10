import { Meta, Story } from "@storybook/react"

import Podcast, { PodcastProps } from "components/common/Podcast"

export default {
    title: "Common/Podcast",
    component: Podcast,
} as Meta

export const Basic: Story<PodcastProps> = (args) => <Podcast {...args} />
Basic.args = {
    src: "http://placeimg.com/256/256/games",
    title: "#XX - Aliqua nisi culpa eiusmod quis veniam consequat esse",
    series: "Qui Sapiente Atque",
    description:
        "Optio consectetur ad reprehenderit nostrum est. Quasi tenetur omnis porro quisquam nihil sequi eaque eum officiis. Aut maxime et occaecati voluptatem in voluptatum. Rerum et sed dignissimos quasi vel blanditiis consequatur magni eaque.",
}

export const WithLink: Story<PodcastProps> = (args) => <Podcast {...args} />
WithLink.args = {
    ...Basic.args,
    url: "https://www.google.com",
}
