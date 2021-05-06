import { makeStyles, Theme } from "@material-ui/core"

const strToNumber = (str: string, fallback?: number): number | undefined => {
    const valParsed = parseInt(str)
    if (isNaN(valParsed)) return fallback
    return valParsed
}

export const calculateAspectRatio = (
    aspectRatio: string | number | (() => string | number) | undefined,
    defaultAspectRatio: number = 16 / 9
): number => {
    if (aspectRatio === undefined) return defaultAspectRatio

    let _aspectRatio = typeof aspectRatio === "function" ? aspectRatio() : aspectRatio

    let __aspectRatio = defaultAspectRatio
    if (typeof _aspectRatio === "string") {
        const [w, h] = _aspectRatio.split(":")
        const width = strToNumber(w, 16)
        const height = strToNumber(h, 9)
        if (width && height) {
            __aspectRatio = width / height
        }
    }

    return __aspectRatio
}

export const calculateAspectRatioVerticalPadding = (
    aspectRatio: string | number | (() => string | number) | undefined,
    defaultAspectRatio: number = 16 / 9
): string => {
    const _aspectRatio = calculateAspectRatio(aspectRatio, defaultAspectRatio)
    return `${(1 / _aspectRatio) * 100}%`
}

const useStyles = makeStyles<Theme, { verticalPadding: string }>(() => ({
    root: ({ verticalPadding }) => ({
        height: 0,
        paddingBottom: verticalPadding,
        width: "100%",
    }),
}))

const useAspectRatio = (aspectRatio: string | number | (() => string | number)) => {
    const classes = useStyles({
        verticalPadding: calculateAspectRatioVerticalPadding(aspectRatio),
    })

    return classes.root
}

export default useAspectRatio
