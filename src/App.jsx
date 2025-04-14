import Carlist from "./components/Carlist"
import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./App.css"

function App() {
  return (
    <Container maxWidth="xl">
      <AppBar position="absolute">
        <Toolbar>
          <img src="src/Images/car.jpg" />
          <Typography variant="h6">Car Shop</Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
      <CssBaseline />
    </Container>
  )
}

export default App
