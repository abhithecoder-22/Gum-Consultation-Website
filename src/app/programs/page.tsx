"use client";

import Navbar from "@/components/Navbar";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";
import BookConsultationModal from "@/components/BookConsultationModal";
import { useState } from "react";

const ProgramsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onBookConsultation={() => setIsModalOpen(true)} />
      <ProgramsSection onBookConsultation={() => setIsModalOpen(true)} />
      <Footer />
      <BookConsultationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProgramsPage;