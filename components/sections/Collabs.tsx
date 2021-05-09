import { makeStyles, Typography } from "@material-ui/core"
import cx from "clsx"

import BrandCollab from "components/common/BrandCollab"

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
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
        [breakpoints.only("sm")]: {
            marginTop: spacing(5),

            "&:first-child": {
                marginTop: 0,
            },
        },

        [breakpoints.up("md")]: {
            marginLeft: spacing(5),

            "&:first-child": {
                marginLeft: 0,
            },
        },
    },
    reverse: {
        [breakpoints.only("sm")]: {
            flexDirection: "row-reverse",
        },
    },
}))

const BRAND_COLLABS: {
    src: string
    message: string
    person: string
    role?: string
    color?: string
}[] = [
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
        // color: "#1F64E2",
        color: "#00659F",
    },
    {
        message:
            "He can podcast, make videos, and probably school us all in the titles we think we're great at. If this is a job about covering games, hire O'Dell.",
        person: "Greg Miller",
        role: "Co-Founder, Kinda Funny",
        src: "http://placekitten.com/800/450",
        // color: "#3CDFD3",
        // color: "#89BB47",
        // color: "#01B5EB",
        color: "#1CB1A7",
    },
]

export interface CollabsProps {
    className?: string
}

const Collabs = ({ className }: CollabsProps) => {
    const classes = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <Typography className={classes.title} variant="h4">
                Brand Collabs
            </Typography>
            <div className={classes.collabs}>
                {BRAND_COLLABS.map((bc, index) => (
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
                ))}
            </div>
        </div>
    )
}

export default Collabs
