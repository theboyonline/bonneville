import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
    }
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    body {
        text-rendering: optimizeLegibility;
        font-size: 1rem;
        font-family: ${({ theme }) => theme.sansSerif};
        background: ${({ theme }) => theme.offWhite};
        color: ${({ theme }) => theme.black};
    }
    .main-body {
        margin-left: auto;
        margin-right: auto;
        padding: 4rem 2rem 1rem 2rem;

        @media(min-width: ${({ theme }) => theme.iPad}) {
            padding: 6rem 2rem 1rem 2rem;
            max-width: 600px;
        }

        @media(min-width: ${({ theme }) => theme.lgDesktop}) {
            max-width: 1000px;
        }
    }
`
