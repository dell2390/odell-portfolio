import { useState } from "react"
import { makeStyles, Typography, Hidden } from "@material-ui/core"
import cx from "clsx"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import brandCollabs from "data/brandCollabs"

import BrandCollab from "components/common/BrandCollab"
import SlideIndicators from "components/common/SlideIndicators"

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    root: {
        paddingTop: spacing(5),
        paddingBottom: spacing(10),
    },
    title: {
        textAlign: "center",
        fontWeight: 900,
        marginBottom: spacing(5),
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

export interface CollabsProps {
    className?: string
}

const Collabs = ({ className }: CollabsProps) => {
    const classes = useStyles()
    const [brandIndex, setBrandIndex] = useState(0)

    const collabs = brandCollabs.map((bc, index) => (
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
                    autoPlay={false}
                    swipeable
                    emulateTouch
                    interval={CAROUSEL_INTERVAL_MS}
                    selectedItem={brandIndex}
                    onChange={(i) => setBrandIndex(i)}
                    onClickItem={(i) => setBrandIndex(i)}
                >
                    {collabs}
                </Carousel>
                <SlideIndicators
                    className={classes.indecators}
                    total={brandCollabs.length}
                    currentIndex={brandIndex}
                />
            </Hidden>
        </div>
    )
}

export default Collabs
