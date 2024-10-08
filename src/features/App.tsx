import { Route, Routes } from "react-router-dom";
import Top from "./Top.tsx";
import Chat from "./Chat.tsx";
import TermsOfService from "./TermOfService.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import ContactForm from "./ContactForm.tsx";
import Header from "../components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/chat/:aiId" element={<Chat />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  )
}