/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Palette,
    PaletteColor,
    PaletteOptions,
    SimplePaletteColorOptions,
} from "@mui/material/styles"

// Add custom colors to theme so that they can be used as any other
// predefined color without hard coding it in multiple places.
// See https://mui.com/material-ui/customization/palette/#adding-color-tokens

declare module "@mui/material/styles" {
    // For adding custom colors:
    interface Palette {
        kukkaRed?: Palette["primary"];
    }

    interface PaletteOptions {
        kukkaRed?: PaletteOptions["primary"];
    }

    // for using shades (see https://github.com/mui-org/material-ui/issues/20277):
    interface PaletteColor {
        900?: string;
        800?: string;
        700?: string;
        600?: string;
        500?: string;
        400?: string;
        300?: string;
        200?: string;
        100?: string;
        50?: string;
    }

    interface SimplePaletteColorOptions {
        900?: string;
        800?: string;
        700?: string;
        600?: string;
        500?: string;
        400?: string;
        300?: string;
        200?: string;
        100?: string;
        50?: string;
    }
}