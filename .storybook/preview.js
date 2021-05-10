import "@fontsource/lato/300.css"
import "@fontsource/lato/400.css"
import "@fontsource/lato/700.css"
import "@fontsource/lato/900.css"

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import decorator from "lib/decorator"

import ThemeProvider from "components/scaffold/ThemeProvider"
import CssBaselined from "components/scaffold/CssBaselined"
import SnapshotStylesDecorator from "components/scaffold/SnapshotStylesDecorator"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true, hideNoControlsWarning: true },
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
        },
    },
}

// NOTE: [Inner Most Decorator, ..., Outer Most Decorator]
export const decorators = [
    SnapshotStylesDecorator,
    decorator(CssBaselined),
    decorator(ThemeProvider),
]
