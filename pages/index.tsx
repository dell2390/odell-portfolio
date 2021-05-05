import { makeStyles } from "@material-ui/core"

import About from "components/sections/About"

const useStyles = makeStyles(() => ({}))

const HomePage = () => {
    const classes = useStyles()

    return (
        <>
            <About />
        </>
    )
}

export default HomePage
