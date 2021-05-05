import { ReactNode } from "react"
import { makeStyles, Typography, TypographyProps } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles({
    message: {
        fontStyle: "italic",
    },
    signiture: {
        textAlign: "end",
    },
})

export interface QuoteProps {
    className?: string

    message: ReactNode
    signiture: ReactNode

    messageProps?: TypographyProps
    signitureProps?: TypographyProps
}

const Quote = ({ className, message, messageProps, signiture, signitureProps }: QuoteProps) => {
    const classes = useStyles()

    return (
        <div className={className}>
            <Typography {...messageProps} className={cx(classes.message, messageProps?.className)}>
                {message}
            </Typography>
            <Typography
                {...signitureProps}
                className={cx(classes.signiture, signitureProps?.className)}
            >
                {signiture}
            </Typography>
        </div>
    )
}

export default Quote
