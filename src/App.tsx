import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

import ScrollToTop from "@/components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CallForPapersPage from "./pages/CallForPapersPage";
// import SponsorshipPage from "./pages/SponsorshipPage";
import SpeakersPage from "./pages/SpeakersPage";
import CommitteesPage from "./pages/CommitteesPage";
import RegistrationPage from "./pages/RegistrationPage";
import AccommodationPage from "./pages/EditorialPage";
import ImportantDatesPage from "./pages/ImportantDatesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import EditorialBoard from "./pages/EditorialPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 👇 Scroll reset on route change */}
        <ScrollToTop />

        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/call-for-papers" element={<CallForPapersPage />} />
            {/* <Route path="/sponsorship" element={<SponsorshipPage />} /> */}
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/Editor" element={<EditorialBoard/>} />
            <Route path="/important-dates" element={<ImportantDatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
