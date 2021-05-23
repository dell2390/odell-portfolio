import { Meta, Story } from "@storybook/react"

import PodcastsContentList, {
    PodcastsContentListProps,
} from "components/common/PodcastsContentList"

export default {
    title: "Common/PodcastsContentList",
    component: PodcastsContentList,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story<PodcastsContentListProps> = (args) => <PodcastsContentList {...args} />
Basic.args = {
    title: "Sample Title",
    feed: [
        {
            id: "a",
            src: "http://placeimg.com/256/256/games",
            title: "#XX - Aliqua nisi culpa eiusmod quis veniam consequat esse",
            series: "Qui Sapiente Atque",
            description:
                "Optio consectetur ad reprehenderit nostrum est. Quasi tenetur omnis porro quisquam nihil sequi eaque eum officiis. Aut maxime et occaecati voluptatem in voluptatum. Rerum et sed dignissimos quasi vel blanditiis consequatur magni eaque.",
            url: "https://www.google.com",
        },
        {
            id: "b",
            src: "http://placeimg.com/256/256/games",
            title: "#XX - Aliqua nisi culpa eiusmod quis veniam consequat esse",
            series: "Qui Sapiente Atque",
            description:
                "Optio consectetur ad reprehenderit nostrum est. Quasi tenetur omnis porro quisquam nihil sequi eaque eum officiis. Aut maxime et occaecati voluptatem in voluptatum. Rerum et sed dignissimos quasi vel blanditiis consequatur magni eaque.",
            url: "https://www.google.com",
        },
        {
            id: "c",
            src: "http://placeimg.com/256/256/games",
            title: "#XX - Aliqua nisi culpa eiusmod quis veniam consequat esse",
            series: "Qui Sapiente Atque",
            description:
                "Optio consectetur ad reprehenderit nostrum est. Quasi tenetur omnis porro quisquam nihil sequi eaque eum officiis. Aut maxime et occaecati voluptatem in voluptatum. Rerum et sed dignissimos quasi vel blanditiis consequatur magni eaque.",
            url: "https://www.google.com",
        },
    ],
}
