import { Meta, Story } from "@storybook/react"

import PhotosMarquee from "components/sections/PhotosMarquee"

export default {
    title: "Sections/Photos Marquee",
    component: PhotosMarquee,
} as Meta

export const Basic: Story = (args) => <PhotosMarquee {...args} />
