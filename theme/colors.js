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
        buttonBackground: palette.mint,
        buttonText: palette.whiteDark,
        hover: {
            buttonBackground: palette.pink,
        },
    },

}

export default colors;