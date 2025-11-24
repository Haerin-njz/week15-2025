import prisma from '@/lib/prisma';

// Ini komponen Server, bisa langsung ambil data dari DB
export default async function LatihanPage() {
  // Ambil semua data mahasiswa
  const mahasiswa = await prisma.mahasiswa.findMany();

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Data Mahasiswa dari SQLite</h1>
      <p>Halaman ini hanya membaca data (Read Only) sesuai instruksi Latihan.</p>

      <ul style={{ marginTop: '20px' }}>
        {mahasiswa.map((mhs) => (
          <li key={mhs.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
            <strong>{mhs.nama}</strong> - {mhs.jurusan}
          </li>
        ))}
      </ul>
    </div>
  );
}