import palette from "./palette";

const colors = {
    bg: {
        primary: palette.blackSignal,
        secondary: palette.whiteDark,
    },
    text: {
        primary: palette.white,
        accent: palette.lightOrange,

        header: palette.whiteDark,
        headerLight: palette.lightOrange,
        headerDark: palette.blackSignal,
    },
    button: {
        buttonBackgroundMint: palette.mint,
        buttonBackgroundOrange: palette.lightOrange,
        buttonTextLight: palette.whiteDark,
        buttonTextDark: palette.blackSignal,
        hover: {
            buttonBackgroundPink: palette.pink,
        },
    },

}

export default colors;