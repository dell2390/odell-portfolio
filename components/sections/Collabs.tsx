import { useState } from "react"
import { makeStyles, Typography, Hidden } from "@material-ui/core"
import cx from "clsx"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import BrandCollab from "components/common/BrandCollab"
import SlideIndicators from "components/common/SlideIndicators"

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
    collabs: {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),

        [breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "row",
        },
    },
    collab: {
        marginBottom: spacing(5),

        "&:last-child": {
            marginBottom: 0,
        },

        [breakpoints.up("md")]: {
            marginBottom: 0,

            maxHeight: "300px",
            maxWidth: "90%",
            margin: "auto",
        },
    },
    reverse: {
        [breakpoints.only("sm")]: {
            flexDirection: "row-reverse",
        },
    },
    indecators: {
        marginTop: spacing(2),
        justifyContent: "center",
    },
}))

const CAROUSEL_INTERVAL_MS = 5 * 1000

interface BrandCollabInfo {
    src: string
    message: string
    person: string
    role?: string
    color?: string
}

const BRAND_COLLABS: BrandCollabInfo[] = [
    {
        message:
            "O’Dell’s leadership and tenacious drive to tell stories and create great content will bring a spark to any team!",
        person: 'Charles "Power" Adiukwu Jr.',
        role: "Founder & Head of Content, The Game Fanatics",
        src: "http://placekitten.com/800/450",
        color: "#CF4728",
    },
    {
        message:
            "I believe O’Dell Harmon would be a strong addition to any organization that could capitalize on his broad-ranging skills.",
        person: "Matt Miller",
        role: "Senior Previews Editor, Game Informer",
        src: "http://placekitten.com/800/450",
        color: "#00659F",
    },
    {
        message:
            "He can podcast, make videos, and probably school us all in the titles we think we're great at. If this is a job about covering games, hire O'Dell.",
        person: "Greg Miller",
        role: "Co-Founder, Kinda Funny",
        src: "http://placekitten.com/800/450",
        color: "#1CB1A7",
    },
    // {
    //     message:
    //         "I believe O’Dell Harmon would be a strong addition to any organization that could capitalize on his broad-ranging skills.",
    //     person: "Matt Miller",
    //     role: "Senior Previews Editor, Game Informer",
    //     src: "http://placekitten.com/800/450",
    //     color: "#ee659F",
    // },
    // {
    //     message:
    //         "I believe O’Dell Harmon would be a strong addition to any organization that could capitalize on his broad-ranging skills.",
    //     person: "Matt Miller",
    //     role: "Senior Previews Editor, Game Informer",
    //     src: "http://placekitten.com/800/450",
    //     color: "#4f6d3F",
    // },
]

export interface CollabsProps {
    className?: string
}

const Collabs = ({ className }: CollabsProps) => {
    const classes = useStyles()
    const [brandIndex, setBrandIndex] = useState(0)

    const collabs = BRAND_COLLABS.map((bc, index) => (
        <BrandCollab
            key={index}
            className={cx(classes.collab, { [classes.reverse]: index % 2 === 1 })}
            src={bc.src}
            quoteProps={{
                message: bc.message,
                signiture: (
                    <>
                        {bc.person}
                        {bc.role && (
                            <>
                                <br />
                                {bc.role}
                            </>
                        )}
                    </>
                ),
            }}
            color={bc.color}
        />
    ))

    return (
        <div className={cx(classes.root, className)}>
            <Typography className={classes.title} variant="h4">
                Brand Collabs
            </Typography>
            <Hidden mdUp>
                <div className={classes.collabs}>{collabs}</div>
            </Hidden>
            <Hidden smDown>
                <Carousel
                    centerMode
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    autoPlay
                    interval={CAROUSEL_INTERVAL_MS}
                    selectedItem={brandIndex}
                    onChange={(i) => setBrandIndex(i)}
                    onClickItem={(i) => setBrandIndex(i)}
                >
                    {collabs}
                </Carousel>
                <SlideIndicators
                    className={classes.indecators}
                    total={BRAND_COLLABS.length}
                    currentIndex={brandIndex}
                />
            </Hidden>
        </div>
    )
}

export default Collabs
