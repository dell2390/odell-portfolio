import { Meta, Story } from "@storybook/react"

import PhotosMarquee from "components/sections/PhotosMarquee"

export default {
    title: "Sections/Photos Marquee",
    component: PhotosMarquee,
    parameters: {
        layout: "fullscreen",
    },
} as Meta

export const Basic: Story = (args) => <PhotosMarquee {...args} />
