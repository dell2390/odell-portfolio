import { makeStyles } from "@material-ui/core"
import Marquee from "react-fast-marquee"

const useStyles = makeStyles(({ spacing, shadows, shape }) => ({
    root: {
        marginTop: spacing(10),
        marginBottom: spacing(10),
        height: "250px",
    },

    image: {
        height: "100%",
        width: "auto",
        boxShadow: shadows[4],
        borderRadius: shape.borderRadius * 2,
        marginRight: spacing(3),
    },
}))

const PHOTOS = [
    "http://placekitten.com/200/300",
    "http://placekitten.com/400/300",
    "http://placekitten.com/400/600",
    "http://placekitten.com/200/500",
    "http://placekitten.com/300/400",
    "http://placekitten.com/200/300",
    "http://placekitten.com/400/300",
    "http://placekitten.com/400/600",
    "http://placekitten.com/200/500",
    "http://placekitten.com/300/400",
]

const PhotosMarquee = () => {
    const classes = useStyles()

    return (
        <Marquee className={classes.root} gradient={false}>
            {PHOTOS.map((photo, index) => (
                <img
                    key={`${photo}-${index}`}
                    className={classes.image}
                    src={photo}
                    alt="some moment"
                />
            ))}
        </Marquee>
    )
}

export default PhotosMarquee
