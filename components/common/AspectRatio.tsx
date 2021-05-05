import { DetailedHTMLProps, HTMLAttributes } from "react"
import cx from "clsx"

import useAspectRatio from "hooks/useAspectRatio"

export interface AspectRatioProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    aspectRatio: string | number | (() => string | number)
}
const AspectRatio = ({ className, aspectRatio, style, ...rest }: AspectRatioProps) => {
    const arClass = useAspectRatio(aspectRatio)

    return <div className={cx(arClass, className)} {...rest} />
}

export default AspectRatio
