import { Meta, Story } from "@storybook/react"

import BrandCollab, { BrandCollabProps } from "components/common/BrandCollab"

export default {
    title: "Common/BrandCollab",
    component: BrandCollab,
    argTypes: {
        color: {
            type: "string",
            control: "color",
        },
    },
} as Meta

export const Basic: Story<BrandCollabProps> = (args) => <BrandCollab {...args} />
Basic.args = {
    src: "http://placekitten.com/800/450",
    quoteProps: {
        message:
            "Proident nisi voluptate Lorem amet est. Nulla labore dolor cillum in ad qui. Minim elit cupidatat qui occaecat officia irure velit aute laboris anim. Exercitation laborum nulla sint duis ut in ut amet eu commodo velit aliqua nostrud. Sit id velit exercitation est reprehenderit id pariatur duis voluptate dolor incididunt quis aute consectetur.",
        signiture: (
            <>
                Aliqua officia
                <br />
                Minim Velit Aliquip Lorem
            </>
        ),
    },
}
