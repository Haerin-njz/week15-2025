import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export default async function LatihanPage() {
  const mahasiswa = await prisma.mahasiswa.findMany();

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Data Mahasiswa dari SQLite</h1>
      <p>Halaman ini hanya membaca data (Read Only).</p>

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