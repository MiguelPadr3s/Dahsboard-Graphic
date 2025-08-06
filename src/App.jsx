import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./scenes/dashboard/index.jsx";
import MySidebar from "./scenes/global/MySidebar";
import Team from "./scenes/team/index.jsx";
import Contacts from "./scenes/contacts/index.jsx";
import Invoices from "./scenes/invoices/index.jsx";
import Form from "./scenes/form/index.jsx";
import Calendar from "./scenes/calendar/index.jsx";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MySidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
