import React, {  useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';
import LoadingPage from './Components/LoadingPage';
import MainContent from './MainContent';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  // Fungsi ini akan dipanggil setelah tampilan pemuatan selesai
  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 600, // Durasi animasi
      once: true, // Animasi hanya berlangsung sekali saat halaman dimuat
    });
  }, []); // Ini akan menjalankan AOS saat komponen dimuat



  return (
    <div>
      {showLoading ? <LoadingPage onLoadingComplete={handleLoadingComplete} /> : <MainContent />}
    </div>
  );
}

export default App;
