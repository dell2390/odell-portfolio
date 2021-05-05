import { makeStyles, Typography, Link, Button, Container } from "@material-ui/core"

import AspectRatio from "components/common/AspectRatio"

const useStyles = makeStyles(({ shape, shadows, spacing, breakpoints }) => ({
    root: {
        paddingTop: spacing(5),
        paddingBottom: spacing(5),
    },

    profile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        [breakpoints.up("md")]: {
            flexDirection: "row",
        },
    },

    photoWrapper: {
        width: spacing(30),

        [breakpoints.up("md")]: {
            marginRight: spacing(5),
        },
    },
    photo: {
        transform: "rotate(-4deg)",
        boxShadow: shadows[4],
        borderRadius: shape.borderRadius * 2,
        backgroundImage: "url(http://placekitten.com/200/300)",
        backgroundSize: "cover",
    },

    name: {
        fontWeight: 900,
        textAlign: "center",
        marginTop: spacing(5),
    },
    roles: {
        textAlign: "center",
        marginTop: spacing(),
    },

    blurbWrapper: {
        marginTop: spacing(5),
        maxWidth: breakpoints.values.sm,

        [breakpoints.up("md")]: {
            marginTop: spacing(10),
        },

        [breakpoints.up("lg")]: {
            maxWidth: breakpoints.values.md,
        },
    },
    contactLink: {
        marginTop: spacing(2),
        display: "inline-block",
        fontWeight: 900,
    },

    downloadButton: {
        marginTop: spacing(5),
        display: "block",
        margin: "auto",
    },
}))

const About = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.profile}>
                <div className={classes.photoWrapper}>
                    <AspectRatio className={classes.photo} aspectRatio="4:5" />
                </div>

                <div>
                    <Typography className={classes.name} variant="h2">
                        O'Dell Harmon Jr.
                    </Typography>
                    <Typography className={classes.roles}>Staff Writer | Editor | Host</Typography>
                </div>
            </div>

            <Container className={classes.blurbWrapper}>
                <Typography>
                    I have worked with Game Informer, IGN, The Houston Chronicle, and a plethora of
                    gaming websites. My charismatic personality has led to significant relationships
                    within the industry — building friendships with people on the publisher and
                    media side of gaming.
                </Typography>
                <Link className={classes.contactLink} href="mailto:example@example.com">
                    Get In Touch &gt;
                </Link>
            </Container>

            <Button className={classes.downloadButton} variant="contained" color="primary">
                Download CV
            </Button>
        </div>
    )
}

export default About
