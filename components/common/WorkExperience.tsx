import { ReactNode } from "react"
import { makeStyles, Theme, Typography, Link, Paper } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles<Theme, { color?: string }>(({ spacing, shape, typography }) => ({
    root: {
        borderRadius: shape.borderRadius * 2,
        padding: spacing(2),
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        display: "flex",
        justifyContent: "center",
        marginBottom: spacing(2),
    },
    position: {
        fontWeight: 900,
        fontSize: typography.h5.fontSize,
    },
    duration: {
        fontWeight: 300,
        fontSize: typography.body2.fontSize,
    },
    description: {
        marginTop: spacing(2),
        lineHeight: "160%",
        flexGrow: 1,
    },
    content: ({ color }) => ({
        display: "inline-block",
        marginTop: spacing(2),
        fontWeight: 900,
        color,
    }),
}))

export interface WorkExperienceProps {
    className?: string

    header?: ReactNode
    position: string
    duration: string
    description: string

    contentLabel?: string
    contentHref?: string
    color?: string
}

const WorkExperience = ({
    className,
    header,
    position,
    duration,
    description,
    contentLabel,
    contentHref,
    color,
}: WorkExperienceProps) => {
    const classes = useStyles({ color })

    return (
        <Paper className={cx(classes.root, className)}>
            {header && <div className={classes.header}>{header}</div>}
            <Typography className={classes.position}>{position}</Typography>
            <Typography className={classes.duration}>{duration}</Typography>
            <Typography className={classes.description}>{description}</Typography>
            {contentHref && contentLabel && (
                <Link
                    className={classes.content}
                    href={contentHref}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {contentLabel}
                </Link>
            )}
        </Paper>
    )
}

export default WorkExperience
