import { makeStyles } from "@material-ui/core"
import Marquee from "react-fast-marquee"

import marqueePhotos from "data/marqueePhotos"

const MARQUEE_CONTENT_HEIGHT = 250

const useStyles = makeStyles(({ spacing, shadows, shape }) => ({
    root: {
        marginTop: spacing(8),
        marginBottom: spacing(8),
        paddingTop: spacing(2),
        paddingBottom: spacing(2),
        height: `${MARQUEE_CONTENT_HEIGHT + spacing(4)}px`,
    },

    image: {
        height: "100%",
        width: "auto",
        boxShadow: shadows[4],
        borderRadius: shape.borderRadius * 2,
        marginRight: spacing(3),
    },
}))

const PhotosMarquee = () => {
    const classes = useStyles()

    return (
        <Marquee className={classes.root} gradient={false}>
            {marqueePhotos.map((photo, index) => (
                <img
                    key={`${photo}-${index}`}
                    className={classes.image}
                    src={photo.src}
                    alt={`maruee moment ${index + 1}`}
                    height={photo.height}
                    width={photo.width}
                />
            ))}
        </Marquee>
    )
}

export default PhotosMarquee
