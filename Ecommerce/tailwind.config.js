export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4263eb",
                secondary: "#63e6be",
                tertiary: "#0000FF",
            },

            container: {
                center: true,
                package: {
                    DEFAULT: "1rem",
                    sm: "3rem",
                }
            },
        }
    },
}