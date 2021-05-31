import { makeStyles, Typography } from "@material-ui/core"
import cx from "clsx"

import PODCAST_APPEARANCES from "data/podcastAppearances"
import WRITTEN_WORK from "data/writtenWork"
import VIDEO_CONTENT from "data/videoContent"

import useInViewIndexes from "lib/hooks/useInViewIndexes"

import ContentList from "components/common/ContentList"
import OverflowList from "components/common/OverflowList"
import RSSPodcastsContentList from "components/common/RSSPodcastsContentList"
import PodcastsContentList from "components/common/PodcastsContentList"
import Article from "components/common/Article"
import Video, { VideoProps } from "components/common/Video"
import SlideIndicators from "components/common/SlideIndicators"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        paddingTop: spacing(5),
        paddingBottom: spacing(10),
    },
    title: {
        textAlign: "center",
        fontWeight: 900,
        marginBottom: spacing(5),
    },
    list: {
        marginTop: spacing(10),

        "&:first-child": {
            marginTop: 0,
        },
    },
    indicators: {
        justifyContent: "center",
    },
}))

const VIDEO_APPEARANCES: VideoProps[] = [
    {
        title: "Aliqua nisi culpa eiusmod quis veniam consequat esse",
        outlet: "Hudson Inc",
        date: "December 25, 2000",
        src: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
        url: "https://www.google.com",
    },
    {
        title: "Aliqua nisi culpa eiusmod quis veniam consequat esse",
        outlet: "Hudson Inc",
        date: "December 25, 2000",
        src: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
        url: "https://www.google.com",
    },
    {
        title: "Aliqua nisi culpa eiusmod quis veniam consequat esse",
        outlet: "Hudson Inc",
        date: "December 25, 2000",
        src: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
        url: "https://www.google.com",
    },
]

export interface ContentProps {
    className?: string
}

const Content = ({ className }: ContentProps) => {
    const classes = useStyles()

    const [writtenIndex, writtenOnChange] = useInViewIndexes()
    const [videoIndex, videoOnChange] = useInViewIndexes()
    const [hostingIndex, hostingOnChange] = useInViewIndexes()

    return (
        <div className={cx(classes.root, className)}>
            <Typography className={classes.title} variant="h4">
                My Work Around The Internet
            </Typography>

            <div>
                <RSSPodcastsContentList
                    className={classes.list}
                    title="Full Circle Podcast"
                    rss="https://feeds.soundcloud.com/users/soundcloud:users:442261950/sounds.rss"
                />

                <PodcastsContentList
                    className={classes.list}
                    title="Podcast Appearances"
                    feed={PODCAST_APPEARANCES}
                />

                <ContentList className={classes.list} label="Written Work">
                    <OverflowList onChange={(index, value) => writtenOnChange(index, value)}>
                        {WRITTEN_WORK.map((article, index) => (
                            <Article key={index} {...article} />
                        ))}
                    </OverflowList>
                    <SlideIndicators
                        className={classes.indicators}
                        currentIndex={writtenIndex}
                        total={WRITTEN_WORK.length}
                    />
                </ContentList>

                <ContentList className={classes.list} label="Video Content">
                    <OverflowList onChange={(index, value) => videoOnChange(index, value)}>
                        {VIDEO_CONTENT.map((video, index) => (
                            <Video key={index} {...video} />
                        ))}
                    </OverflowList>
                    <SlideIndicators
                        className={classes.indicators}
                        currentIndex={videoIndex}
                        total={VIDEO_CONTENT.length}
                    />
                </ContentList>

                <ContentList className={classes.list} label="On Cemera / Hosting">
                    <OverflowList onChange={(index, value) => hostingOnChange(index, value)}>
                        {VIDEO_APPEARANCES.map((appearance, index) => (
                            <Video key={index} {...appearance} />
                        ))}
                    </OverflowList>
                    <SlideIndicators
                        className={classes.indicators}
                        currentIndex={hostingIndex}
                        total={VIDEO_APPEARANCES.length}
                    />
                </ContentList>
            </div>
        </div>
    )
}

export default Content
