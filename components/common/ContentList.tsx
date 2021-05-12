import { ReactNode } from "react"
import { makeStyles, Typography } from "@material-ui/core"
import cx from "clsx"
import createSpacing from "@material-ui/core/styles/createSpacing"

const useStyles = makeStyles(({ mixins }) => ({
    root: {},
    label: {
        ...mixins.gutters(),
        fontWeight: 900,
        textTransform: "capitalize",
        marginBottom: createSpacing(2),
    },
}))

export interface ContentListProps {
    className?: string
    children?: ReactNode
    label?: string
}

const ContentList = ({ className, children, label }: ContentListProps) => {
    const classes = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            {label && <Typography className={classes.label}>{label}</Typography>}
            {children}
        </div>
    )
}

export default ContentList
