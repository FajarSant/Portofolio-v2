import React, { useState } from 'react';

function Posting() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [foto, setFoto] = useState(null); // Menyimpan foto yang diunggah
  const [jejak, setJejak] = useState([]); // Menyimpan jejak yang sudah ditinggalkan

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '' || pesan.trim() === '') return; // Menghindari email atau pesan kosong

    // Mengecek apakah email sudah pernah membuat postingan sebelumnya
    const emailSudahPosting = jejak.some((item) => item.email === email);
    if (emailSudahPosting) {
      alert('Anda sudah membuat postingan sebelumnya.');
      return;
    }

    // Menyimpan postingan ke dalam jejak
    setJejak((prevJejak) => [
      ...prevJejak,
      {
        id: new Date().getTime(),
        nama: nama,
        email: email,
        pesan: pesan,
        foto: foto,
      },
    ]);

    // Mengosongkan form
    setNama('');
    setEmail('');
    setPesan('');
    setFoto(null);
  };

  return (
    <div className="posting">
      <h2>Meninggalkan Jejak</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Nama/Username:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Anda:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pesan">Pesan Anda:</label>
          <textarea
            id="pesan"
            name="pesan"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="foto">Unggah Foto (opsional):</label>
          <input
            type="file"
            id="foto"
            name="foto"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </div>
        <button type="submit">Kirim</button>
      </form>
      <div className="jejak">
        <h3>Jejak Pengunjung:</h3>
        <ul>
          {jejak.map((item) => (
            <li key={item.id}>
              <p><strong>Nama/Username:</strong> {item.nama}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Pesan:</strong> {item.pesan}</p>
              {item.foto && (
                <img src={URL.createObjectURL(item.foto)} alt="Foto" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Posting;
