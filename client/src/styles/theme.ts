import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        blue: {
            "700": "#294A97"
        }

    },
    fonts: {
        body: 'Poppins',
        mono: 'Roboto'
    },
    styles: {
        global: {
            body: {
                fontFamily: 'body'
            }
        }
    }
})