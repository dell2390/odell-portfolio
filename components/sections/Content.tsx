import { useState } from "react"
import { makeStyles, Typography, Hidden } from "@material-ui/core"
import cx from "clsx"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import SlideIndicators from "components/common/SlideIndicators"
import ContentList from "components/common/ContentList"
import Article, { ArticleProps } from "components/common/Article"
import Podcast, { PodcastProps } from "components/common/Podcast"
import Video, { VideoProps } from "components/common/Video"

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    root: {
        paddingTop: spacing(4),
        paddingBottom: spacing(4),
    },
    title: {
        textAlign: "center",
        fontWeight: 900,
        marginBottom: spacing(3),
    },
}))

const FULL_CIRCLE_PODCAST_EPISODES: PodcastProps[] = []

const PODCAST_APPEARANCES: PodcastProps[] = []

const ARTICLES: ArticleProps[] = []

const VIDEOS: VideoProps[] = []

const VIDEO_APPEARANCES: VideoProps[] = []

export interface ContentProps {
    className?: string
}

const Content = ({ className }: ContentProps) => {
    const classes = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <Typography className={classes.title} variant="h4">
                My Work Around The Internet
            </Typography>

            <ContentList label="Full Circle Podcast"></ContentList>
            <ContentList label="Podcast Appearances"></ContentList>
            <ContentList label="Written Work"></ContentList>
            <ContentList label="Video Content"></ContentList>
            <ContentList label="On Cemera / Hosting"></ContentList>
        </div>
    )
}

export default Content
