import { makeStyles } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles({
    root: {
        height: 28,
        width: 95,
    },
})

export interface IGNLogoProps {
    className?: string
}

const IGNLogo = ({ className }: IGNLogoProps) => {
    const classes = useStyles()

    return (
        <svg className={cx(classes.root, className)} viewBox="0 0 95 28" fill="none">
            <path
                d="M50.6835 16.1794V11.2336H64.2736C65.6591 11.2336 66.7799 12.3293 66.7799 13.6685V19.5425C66.7799 22.5709 64.3048 25.0666 61.1446 25.0818H52.4426C45.9978 25.0818 40.7672 19.9991 40.7672 13.7293C40.7672 7.45961 46.0133 2.37687 52.4426 2.37687H65.9237V7.59657H52.4426C48.9711 7.59657 46.1068 10.351 46.1068 13.7293C46.1068 17.1229 48.9244 19.8621 52.427 19.8621H61.4248V16.1794H50.6835ZM39.0237 2.34643V4.02039V25.097H36.3461H36.2216C34.8517 25.097 33.7309 24.0166 33.7309 22.6774V6.22697V2.34643H39.0237ZM91.7185 2.36165C93.0884 2.36165 94.1937 3.44211 94.1937 4.78128V19.8621C94.1937 22.8904 91.6718 25.3405 88.574 25.3405H88.4806C86.4413 25.3405 84.6666 24.3514 83.6859 22.7383L74.7348 7.42917C74.6569 7.29221 74.5324 7.26177 74.4234 7.26177C74.2833 7.26177 74.1743 7.33786 74.1121 7.44439C74.0809 7.49004 74.0654 7.55091 74.0654 7.61179V25.1122H71.2477C69.8778 25.1122 68.757 24.0318 68.757 22.6926V7.59657C68.757 4.56823 71.2789 2.11816 74.3767 2.11816H74.4701C76.5094 2.11816 78.3152 3.18341 79.3115 4.7965L88.2004 20.0143C88.3093 20.1512 88.4183 20.2121 88.5273 20.2121C88.6674 20.2121 88.7763 20.136 88.8386 20.0447C88.8697 19.9991 88.8697 19.9534 88.8853 19.9078V2.37687H91.7185V2.36165Z"
                fill="#252627"
            />
            <path
                d="M7.11099 8.75316C5.72552 8.90533 4.46458 9.10316 3.34374 9.34665C4.60468 6.19657 7.17326 3.70085 10.3957 2.46821C10.1466 3.56389 9.92865 4.79653 9.77298 6.15091C8.71441 6.85093 7.81152 7.73356 7.11099 8.75316ZM19.985 6.1357C19.8294 4.79653 19.6114 3.56389 19.3468 2.46821C22.5848 3.68563 25.1533 6.19657 26.4143 9.34665C25.2935 9.10316 24.0325 8.89012 22.647 8.75316C21.9465 7.71835 21.0436 6.83571 19.985 6.15091C19.985 6.15091 19.985 6.15091 19.985 6.1357ZM9.77298 21.323C9.92865 22.6774 10.131 23.9101 10.3957 25.0057C7.17326 23.7731 4.60468 21.2622 3.34374 18.1121C4.44901 18.3556 5.69438 18.5686 7.09543 18.7208C7.11099 18.7208 7.11099 18.7208 7.12656 18.7208C7.81152 19.7556 8.71441 20.6535 9.77298 21.323ZM22.6937 18.7208C24.0948 18.5686 25.3402 18.3556 26.4454 18.1121C25.1845 21.2774 22.6003 23.7883 19.3624 25.021C19.627 23.9405 19.8294 22.7079 20.0006 21.3687C20.0006 21.3535 20.0006 21.3535 20.0006 21.3383C21.0592 20.6535 21.9621 19.7708 22.6626 18.736C22.6626 18.736 22.6782 18.736 22.6937 18.7208ZM28.9673 11.4924V15.9664C26.8035 16.9403 23.5811 17.336 22.4914 17.4577C22.2267 17.5034 21.9776 17.5338 21.7441 17.5338L18.2727 13.7446L21.7441 9.95536C21.9465 9.95536 22.1489 9.97058 22.3824 10.0162C23.5032 10.138 26.7879 10.5184 28.9673 11.4924ZM8.02946 9.95536L11.5009 13.7446L8.02946 17.5338C7.79595 17.5338 7.54688 17.5034 7.28223 17.4577C6.19253 17.336 2.97013 16.9403 0.80629 15.9664V11.4924C3.00126 10.5032 6.27037 10.1228 7.3912 10.0162C7.62471 9.9858 7.82709 9.95536 8.02946 9.95536ZM11.0028 20.4404L14.879 17.0621L18.7552 20.4404C18.7552 20.6687 18.7241 20.9122 18.6774 21.1709C18.5529 22.2361 18.1481 25.3862 17.1518 27.5015H12.5906C11.5788 25.371 11.1896 22.16 11.0806 21.0796C11.0339 20.8361 11.0028 20.6382 11.0028 20.4404ZM12.5906 0.00292969H17.1674C18.1637 2.1182 18.5684 5.26828 18.693 6.33353C18.7397 6.59223 18.7708 6.83571 18.7708 7.06398L14.8946 10.4575L11.0184 7.06398C11.0184 6.86615 11.0339 6.66832 11.0806 6.44005C11.1896 5.34437 11.5632 2.13342 12.5906 0.00292969Z"
                fill="#BF1313"
            />
        </svg>
    )
}

export default IGNLogo
