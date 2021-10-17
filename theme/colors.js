import palette from "./palette";

const colors = {
    bg: {
        primary: palette.blackSignal,
        secondary: palette.white,
    },
    text: {
        primary: palette.white,
        accent: palette.lightOrange,

        header: palette.whiteDark,
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