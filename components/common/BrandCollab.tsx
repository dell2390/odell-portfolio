import { makeStyles, Theme, Paper } from "@material-ui/core"
import cx from "clsx"

import Quote, { QuoteProps } from "components/common/Quote"

const useStyles = makeStyles<Theme, { color?: string }>(
    ({ spacing, shape, palette, breakpoints }) => ({
        root: {
            borderRadius: shape.borderRadius * 2,
            overflow: "hidden",

            [breakpoints.up("sm")]: {
                display: "flex",
            },
        },
        half: {
            display: "flex",
            [breakpoints.up("sm")]: {
                flexBasis: "50%",
                flexGrow: 1,
                flexShrink: 0,
            },
        },
        photo: {
            maxWidth: "100%",
            width: "100%",

            [breakpoints.up("sm")]: {
                height: "100%",
                objectFit: "cover",
            },
        },
        quote: ({ color = "#ffffff" }) => ({
            backgroundColor: color,
            color: palette.getContrastText(color),

            padding: spacing(2),

            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
        }),
    })
)

export interface BrandCollabProps {
    className?: string

    src: string
    quoteProps: QuoteProps

    color?: string
}

const BrandCollab = ({ className, src, quoteProps, color }: BrandCollabProps) => {
    const classes = useStyles({ color })

    return (
        <Paper className={cx(classes.root, className)}>
            <div className={classes.half}>
                <img className={classes.photo} src={src} alt="brand collab" />
            </div>
            <Quote
                {...quoteProps}
                className={cx(classes.quote, classes.half, quoteProps.className)}
            />
        </Paper>
    )
}

export default BrandCollab
