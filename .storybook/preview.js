import "@fontsource/lato"

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
