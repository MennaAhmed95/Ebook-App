import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EbookListPage, EbookDetailsPage } from "./pages";
import { Container } from "@mui/material";
import { Footer, Header } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Container style={{ marginBottom: "5rem", marginTop: "1rem" }}>
        <Routes>
          <Route path="/" exact element={<EbookListPage />} />
          <Route path="/ebook/:id" element={<EbookDetailsPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
