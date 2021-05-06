import { makeStyles, Container } from "@material-ui/core"

import SocialLinks from "components/common/SocialLinks"
import Quote from "components/common/Quote"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    message: {},
    quote: {
        fontStyle: "italic",
    },
    signiture: {
        textAlign: "end",
    },
    socialLinks: {
        marginTop: spacing(5),
    },
}))

const Header = () => {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            <Container className={classes.message} maxWidth="sm">
                <Quote
                    message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    signiture="- O'Dell Harmon Jr."
                />
            </Container>
            <SocialLinks className={classes.socialLinks} />
        </footer>
    )
}

export default Header
