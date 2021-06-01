import { Meta, Story } from "@storybook/react"

import CatalogLink, { CatalogLinkProps } from "components/common/CatalogLink"

export default {
    title: "Common/CatalogLink",
    component: CatalogLink,
    argTypes: {
        color: {
            type: "string",
            control: "color",
        },
    },
} as Meta

export const Basic: Story<CatalogLinkProps> = (args) => <CatalogLink {...args} />
Basic.args = {
    children: "Velit dicta consequatur",
    href: "https://www.google.com",
}
