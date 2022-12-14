/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                colorone: {
                    50: '#81b296',
                    100: '#629f7b',
                    200: '#588f6f',
                    300: '#4e7f63',
                    400: '#447057',
                    500: '#31503E',
                    600: '#1e3025',
                    700: '#142119',
                    800: '#0a110d',
                    900: '#000000',
                },
                colortwo: {
                    50: '#f7faf9',
                    100: '#d8e6e4',
                    200: '#c8dcda',
                    300: '#b9d2cf',
                    400: '#a9c8c5',
                    500: '#8AB4B0',
                    600: '#6ba09b',
                    700: '#5e938e',
                    800: '#54847f',
                    900: '#406561',
                },
                colorthree: {
                    50: '#ecf0f1',
                    100: '#ced9dc',
                    200: '#bfcdd2',
                    300: '#b1c1c7',
                    400: '#a2b5bc',
                    500: '#849EA7',
                    600: '#678691',
                    700: '#5d7882',
                    800: '#526a73',
                    900: '#3d4f55',
                },
                colorfour: {
                    50: '#d6ddde',
                    100: '#bac6c7',
                    200: '#abbbbc',
                    300: '#9dafb0',
                    400: '#8fa4a5',
                    500: '#738D8E',
                    600: '#5c7172',
                    700: '#516364',
                    800: '#455556',
                    900: '#2e393a',
                },
                colorfive: {
                    50: '#ffffff',
                    100: '#ffffff',
                    200: '#ffffff',
                    300: '#ffffff',
                    400: '#ffffff',
                    500: '#F6F6F6',
                    600: '#dcdcdc',
                    700: '#d0d0d0',
                    800: '#c3c3c3',
                    900: '#a9a9a9',
                },
            }
        },
    },
    plugins: [require('@tailwindcss/typography'),],
}
