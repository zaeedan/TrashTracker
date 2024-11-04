import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../index.css';

const App = () => {

  return (
      <div>
        <nav className="bg-white p-4 fixed top-0 w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-black text-2xl font-bold">
              Trash Tracker
            </div>
            <div className="flex space-x-4">
              <a href="#home" className="text-black text-lg hover:font-bold">Home</a>
              <a href="#map" className="text-black text-lg hover:font-bold">Map</a>
              <a href="#login" className="text-black text-lg hover:font-bold">Login</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto pt-20">
          <section id="home" className="bg-black mb-8 p-8 text-left">
            <div className="pt-28 pb-28">
              <h1 className="text-white text-6xl font-bold mb-4 center">Cek sini dulu</h1>
              <h1 className="text-white text-6xl font-bold mb-4 center">sebelum angkut</h1>
              <h1 className="text-white text-6xl font-bold mb-4 center">sampah!!</h1>
              <h3 className="text-white text-xl mb-4 center">Trash Tracker dapat menampilkan landscape sampah di tempat anda!</h3>
            </div>
          </section>
          <section id="map" className="bg-black mb-8 p-8 text-left">
            <div className="pt-28 pb-28">
              <h1 className="text-white text-6xl font-bold mb-4 center">Mapsview</h1>
              <h3 className="text-white text-xl mb-4 center">Temukan tempat sampah di sekitar anda!</h3>
            </div>
          </section>
          <section id="statistik" className="bg-black mb-8 p-8 text-left">
            <div className="pt-28 pb-28">
              <h1 className="text-white text-6xl font-bold mb-4 center">Statistik</h1>
              <h3 className="text-white text-xl mb-4 center">Monitor keadaan tempat smpah setiap harinya!</h3>
            </div>
          </section>
        </main>
      </div>
  )
}

export default App