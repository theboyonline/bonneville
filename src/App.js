import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./global"
import { theme } from "./theme"

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <main className="main-body">{children}</main>
      {/* <Footer /> */}
    </>
  </ThemeProvider>
)
