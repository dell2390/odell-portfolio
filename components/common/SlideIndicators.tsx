import { makeStyles } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: "flex",
        flexDirection: "row",
    },
    indicator: {
        height: spacing(2),
        width: spacing(2),
        borderRadius: "100%",
        borderWidth: "2px",
        borderColor: "#000000",
        borderStyle: "solid",
        marginRight: spacing(),

        "&:last-child": {
            marginRight: 0,
        },

        transition: "background-color 400ms ease-in-out",
    },
    active: {
        backgroundColor: "#000000",
    },
    clickable: {
        cursor: "pointer",
    },
}))

export interface SlideIndicatorsProps {
    className?: string

    total: number
    currentIndex: number

    onClick?: (index: number) => void
}

const SlideIndicators = ({ className, total, currentIndex, onClick }: SlideIndicatorsProps) => {
    const classes = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            {Array(total)
                .fill(null)
                .map((_, index) =>
                    onClick ? (
                        <button
                            key={index}
                            className={cx(classes.indicator, classes.clickable, {
                                [classes.active]: currentIndex === index,
                            })}
                            onClick={() => onClick(index)}
                        />
                    ) : (
                        <div
                            key={index}
                            className={cx(classes.indicator, {
                                [classes.active]: currentIndex === index,
                            })}
                        />
                    )
                )}
        </div>
    )
}

export default SlideIndicators