import React, { useState } from 'react';

// Komponen Form Postingan
function FormPostingan({ tambahPostingan }) {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const [gambar, setGambar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postinganBaru = {
      judul,
      isi,
      gambar,
    };
    tambahPostingan(postinganBaru);
    setJudul('');
    setIsi('');
    setGambar('');
  };

  return (
    <div>
      <h2>Buat Postingan Baru</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Judul:</label>
          <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} />
        </div>
        <div>
          <label>Isi Postingan:</label>
          <textarea value={isi} onChange={(e) => setIsi(e.target.value)} />
        </div>
        <div>
          <label>Gambar (Opsional):</label>
          <input type="text" value={gambar} onChange={(e) => setGambar(e.target.value)} />
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

// Komponen Daftar Postingan
function DaftarPostingan({ postingan }) {
  return (
    <div>
      <h2>Daftar Postingan</h2>
      <ul>
        {postingan.map((post, index) => (
          <li key={index}>
            <h3>{post.judul}</h3>
            <p>{post.isi}</p>
            {post.gambar && <img src={post.gambar} alt="Gambar Postingan" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Komponen Aplikasi Utama
function BlogApp() {
  const [postingan, setPostingan] = useState([]);

  const tambahPostingan = (postinganBaru) => {
    setPostingan([...postingan, postinganBaru]);
  };

  return (
    <div>
      <h1>Blog Sederhana</h1>
      <FormPostingan tambahPostingan={tambahPostingan} />
      <DaftarPostingan postingan={postingan} />
    </div>
  );
}

export default BlogApp;
