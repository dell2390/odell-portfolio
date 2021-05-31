import { makeStyles, Typography, Container, Grid } from "@material-ui/core"
import cx from "clsx"

import IGNLogo from "svgs/IGNLogo"
import GameInformerLogo from "svgs/GameInformerLogo"

import WorkExperience from "components/common/WorkExperience"

const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        backgroundColor: "#173F64",
        paddingTop: spacing(5),
        paddingBottom: spacing(10),
    },
    title: {
        color: palette.getContrastText("#173F64"),
        textAlign: "center",
        fontWeight: 900,
        marginBottom: spacing(5),
    },
    header: {
        height: "100%",
        width: "auto",
        maxHeight: 32,
        maxWidth: "100%",
    },
}))

export interface WorkProps {
    className?: string
}

const Work = ({ className }: WorkProps) => {
    const classes = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <Typography className={classes.title} variant="h4">
                Work Experience
            </Typography>
            <Container>
                <Grid container spacing={4} justify="center">
                    <Grid item xs={12} md={6}>
                        <WorkExperience
                            header={<IGNLogo className={classes.header} />}
                            position="Freelance Games Writer | IGN Entertainment"
                            duration="June 2017-Present"
                            description="Helps produce IGN Wiki guides, records game play, and aides in compiling Nintendo News."
                            // contentLabel="See My IGN Content >"
                            // contentHref="https://www.google.com"
                            color="#BF1313"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkExperience
                            header={
                                <img
                                    className={classes.header}
                                    src="/GameFanaticsLogo.png"
                                    alt="Game Fanatics Logo"
                                />
                            }
                            position="On-Camera Host/Gaming Features Writer | Game Fanatics"
                            duration="October 2015 - Present"
                            description="Hosts videos and podcasts, Covers industry news, reviews Indie and AAA titles, composes video scripts, records voice-overs, manages social media, and represents site at gaming conventions."
                            contentLabel="See My Game Fanatics Content >"
                            contentHref="https://thegamefanatics.com/author/hare23/"
                            color="#25B5EA"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkExperience
                            header={
                                <img
                                    className={classes.header}
                                    src="/ESPNEsportsLogo.png"
                                    alt="ESPN Esports Logo"
                                />
                            }
                            position="Production Assistant | ESPN Esports"
                            duration="March 2019-July 2019"
                            description="Hosts videos and podcasts, Covers industry news, reviews Indie and AAA titles, composes video scripts, records voice-overs, manages social media, and represents site at gaming conventions."
                            // contentLabel="See My ESPN Content >"
                            // contentHref="https://www.google.com"
                            color="#EE3B33"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkExperience
                            header={<GameInformerLogo className={classes.header} />}
                            position="Content Intern | Game Informer"
                            duration="September 2012-December 2012"
                            description="Managed website content, wrote weekly news stories, composed online features and opinion pieces, hosted 24-hour live stream event for charity,recorded videos and podcasts, and interviewed producers and directors."
                            contentLabel="See My Game Informer Content >"
                            contentHref="https://www.gameinformer.com/user/odell-harmon"
                            color="#00659F"
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Work
