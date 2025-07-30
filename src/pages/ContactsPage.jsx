import React from 'react'
import ContactList from '../components/ContactList'
import { useState, useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ContactCard from "../components/ContactCard.jsx";
import Filter from "../components/Filter.jsx";
import ContactClear from "../components/ContactClear.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { initializeApp } from "../utils/initializer";
import SplashScreen from "../components/SplashScreen";
import ContactEditForm from "../components/ContactEditForm.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Nosotros from "../pages/Nosotros.jsx";

export default function ContactsPage({
  filterFavorites,
  contactsCount,
  handleContactCreated,
  handleChangeFavorite,
  handleClearContact,
  contactsToShow,
  toggleFavorite,
  handleSelectContact,
  selectedContact,
  handleNextContact,
  handleDeleteContact,
  estiloSection,
}) {
  return (
    <main className="flex justify-center items-center min-h-screen text-black">
      <div className="w-full px-4">
        <Header
          filterFavorites={filterFavorites}
          contactsCount={contactsCount}
        />

        <div className="flex items-start min-h-[80vh] mt-5">
          {/* Contenido principal */}
          {/* Sidebar */}
          <div className="w-[260px] mr-8">
            <ContactForm onContactCreated={handleContactCreated} />
            <Filter handleChangeFavorite={handleChangeFavorite} />
            <ContactClear handleClearContact={handleClearContact} />
            <ContactList
              contactsToShow={contactsToShow}
              toggleFavorite={toggleFavorite}
              handleSelectContact={handleSelectContact}
              selectedContact={selectedContact}
              onSelectContact={handleSelectContact}
            />
          </div>

          {/* Contenido principal */}
          <div className="flex-1 flex flex-col items-center text-center">
            
            <section
              style={{ ...estiloSection, marginLeft: 0, marginRight: 250 }}
            >
              <ContactCard
                contact={selectedContact}
                toggleFavorite={toggleFavorite}
                handleNextContact={handleNextContact}
                handleDeleteContact={handleDeleteContact}
              />
            </section>
          </div>
        </div>

        <section style={estiloSection}>
          <Footer />
        </section>
      </div>
    </main>
  );
}
