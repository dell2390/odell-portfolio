import { Meta, Story } from "@storybook/react"

import WorkExperience, { WorkExperienceProps } from "components/common/WorkExperience"

export default {
    title: "Common/WorkExperience",
    component: WorkExperience,
    argTypes: {
        color: {
            type: "string",
            control: "color",
        },
    },
} as Meta

export const Basic: Story<WorkExperienceProps> = (args) => <WorkExperience {...args} />
Basic.args = {
    position: "Enim consectetur voluptate eu anim | Voluptate",
    duration: "January 2000 - Present",
    description:
        "Officia commodo non ullamco magna. Elit aliqua dolore aute aliqua culpa esse culpa non magna pariatur. Anim consequat veniam consequat culpa irure Lorem sint nulla cillum Lorem. Ad sit anim ipsum cupidatat qui veniam commodo.",
    contentLabel: "See My Voluptate Content >",
    contentHref: "https://www.google.com",
}

export const WithHeader: Story<WorkExperienceProps> = (args) => <WorkExperience {...args} />
WithHeader.args = {
    ...Basic.args,
    header: <img src="http://placekitten.com/400/75" alt="placeholder kitten" height="100%" />,
}
