import { Meta, Story } from "@storybook/react"

import Article, { ArticleProps } from "components/common/Article"

export default {
    title: "Common/Article",
    component: Article,
} as Meta

export const Basic: Story<ArticleProps> = (args) => <Article {...args} />
Basic.args = {
    thumbnailSrc: "http://placeimg.com/1280/720/city",
    title: "Aliqua nisi culpa eiusmod quis veniam consequat esse",
    outlet: "Hudson Inc",
    date: "December 25, 2000",
    outletLogoSrc: "http://placeimg.com/100/100",
    blurb:
        "Optio consectetur ad reprehenderit nostrum est. Quasi tenetur omnis porro quisquam nihil sequi eaque eum officiis. Aut maxime et occaecati voluptatem in voluptatum. Rerum et sed dignissimos quasi vel blanditiis consequatur magni eaque.",
}

export const WithLink: Story<ArticleProps> = (args) => <Article {...args} />
WithLink.args = {
    ...Basic.args,
    url: "https://www.google.com",
}
