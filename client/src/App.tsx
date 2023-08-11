import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const theme = useMemo(() => createTheme(themeSettings));
  
  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider >
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem" color="white">
            <Routes>
              <Route path="/" element={<div>Dashboard Page</div>} />
              <Route path="/prediction" element={<div>Prediction Page</div>} />
            </Routes>
          </Box>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
