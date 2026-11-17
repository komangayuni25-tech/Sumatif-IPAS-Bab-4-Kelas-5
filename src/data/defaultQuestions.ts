import { Question } from '../types';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran IPAS
 * Kelas 5 SD - Kurikulum Merdeka
 * Bab 4: Air Sumber Kehidupan
 *
 * Lingkup Materi:
 * 1. Air sumber kehidupan di Bumi
 * 2. Ke mana air mengalir
 * 3. Menelusuri arah aliran air
 * 4. Beginilah terjadinya siklus air
 * 5. Siklus air
 * 6. Dampak aktivitas manusia terhadap siklus air
 * 7. Ke mana air bersih di lingkunganku
 * 8. Standar air bersih
 * 9. Menjaga ketersediaan air bersih
 *
 * Komposisi Soal:
 * - 40 Butir Pilihan Ganda (PG) [Nomor 1 - 40] (Bobot: 2 poin/butir = 80 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 41 - 45] (Bobot: 6 poin/butir = 30 poin)
 * Total: 45 Butir Soal (Skor Maksimal: 110 poin -> Nilai Akhir Skala 100)
 *
 * Tujuan Pembelajaran (Elemen):
 * 1. Memahami tentang proses-proses yang terjadi dalam siklus air
 * 2. Menyebutkan faktor-faktor yang memengaruhi siklus air
 * 3. Menemukan solusi terhadap permasalahan ketersediaan air bersih di lingkungan sekitar
 */

const TP1 = 'Memahami tentang proses-proses yang terjadi dalam siklus air';
const TP2 = 'Menyebutkan faktor-faktor yang memengaruhi siklus air';
const TP3 = 'Menemukan solusi terhadap permasalahan ketersediaan air bersih di lingkungan sekitar';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN I: 40 SOAL PILIHAN GANDA (PG)
  // ============================================================================

  // --- LINGKUP MATERI: AIR SUMBER KEHIDUPAN DI BUMI (SOAL 1 - 4) ---
  {
    id: 1,
    type: 'pg',
    element: TP1,
    topic: 'Air sumber kehidupan di Bumi',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi persentase ketersediaan air tawar di Bumi dibandingkan air asin berdasarkan diagram.',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="140" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="210" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">KOMPOSISI AIR DI PERMUKAAN BUMI</text>
      <g transform="translate(24, 38)">
        <rect width="230" height="72" rx="10" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
        <text x="115" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">97% AIR ASIN (LAUT)</text>
        <text x="115" y="52" font-family="sans-serif" font-size="9.5" fill="#e0f2fe" text-anchor="middle">Tidak dapat langsung diminum manusia</text>
      </g>
      <g transform="translate(272, 38)">
        <rect width="124" height="72" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
        <text x="62" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">3% AIR TAWAR</text>
        <text x="62" y="45" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">Es kutub, air tanah,</text>
        <text x="62" y="58" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">sungai &amp; danau</text>
      </g>
    </svg>`,
    text: 'Perhatikan gambar komposisi air di Bumi di atas! Sebagian besar air di Bumi berupa air asin di lautan (97%). Oleh karena itu, ketersediaan air tawar yang dapat dimanfaatkan untuk kebutuhan minum dan kehidupan sehari-hari sangat terbatas, yaitu hanya sekitar ...',
    options: [
      { id: 'A', text: '3% dari seluruh air di Bumi, sehingga harus dijaga dan dihemat' },
      { id: 'B', text: '50% dari seluruh air di Bumi yang semuanya berada di sungai' },
      { id: 'C', text: '71% dari seluruh air di Bumi dan seluruhnya siap diminum langsung' },
      { id: 'D', text: '97% dari seluruh air di Bumi yang tersimpan di dalam awan' },
    ],
    correctAnswer: 'A',
    explanation: 'Dari seluruh air di Bumi, sekitar 97% merupakan air asin di laut dan hanya sekitar 3% berupa air tawar (sebagian besar membeku di kutub dan sisanya di air tanah, sungai, dan danau). Karena terbatas, air tawar wajib dijaga kelestariannya.',
  },
  {
    id: 2,
    type: 'pg',
    element: TP1,
    topic: 'Air sumber kehidupan di Bumi',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan peran utama air bagi kelangsungan hidup tumbuhan.',
    text: 'Bagi tumbuhan hijau, air sangat dibutuhkan sebagai salah satu bahan utama untuk melakukan proses pembuatan makanan sendiri yang disebut ...',
    options: [
      { id: 'A', text: 'Fotosintesis' },
      { id: 'B', text: 'Respirasi' },
      { id: 'C', text: 'Fermentasi' },
      { id: 'D', text: 'Pembusukan' },
    ],
    correctAnswer: 'A',
    explanation: 'Tumbuhan menyerap air melalui akar untuk diangkut ke daun sebagai bahan baku fotosintesis bersama karbon dioksida dengan bantuan cahaya matahari.',
  },
  {
    id: 3,
    type: 'pg',
    element: TP1,
    topic: 'Air sumber kehidupan di Bumi',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghubungkan manfaat air bagi tubuh manusia dengan fungsi organ tubuh.',
    text: 'Sekitar 60–70% bagian tubuh manusia tersusun atas air. Salah satu peran penting air di dalam tubuh manusia adalah ...',
    options: [
      { id: 'A', text: 'Melarutkan zat gizi, melancarkan peredaran darah, dan menjaga suhu tubuh tetap stabil' },
      { id: 'B', text: 'Menggantikan fungsi tulang sebagai rangka penggerak tubuh manusia' },
      { id: 'C', text: 'Menghasilkan energi listrik di dalam paru-paru saat bernapas' },
      { id: 'D', text: 'Mengubah warna kulit menjadi lebih gelap ketika terkena angin' },
    ],
    correctAnswer: 'A',
    explanation: 'Air berfungsi sebagai pelarut nutrisi, mengangkut oksigen dan zat makanan dalam darah, membuang sisa metabolisme, serta mengatur suhu tubuh melalui keringat.',
  },
  {
    id: 4,
    type: 'pg',
    element: TP1,
    topic: 'Ke mana air mengalir',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan sifat arah aliran air berdasarkan gaya gravitasi Bumi melalui gambar.',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="135" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <polygon points="15,120 15,35 120,75 240,98 330,108 405,112 405,120" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
      <path d="M 35 43 Q 115 72 210 92 T 345 108" fill="none" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>
      <polygon points="348,108 335,102 337,114" fill="#0369a1"/>
      <rect x="330" y="108" width="75" height="12" fill="#0ea5e9"/>
      <text x="55" y="28" font-family="sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Pegunungan (Tinggi)</text>
      <text x="210" y="75" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Arah Aliran Air →</text>
      <text x="368" y="96" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0c4a6e" text-anchor="middle">Laut (Rendah)</text>
    </svg>`,
    text: 'Berdasarkan gambar bentang alam di atas, sifat alami aliran air di permukaan Bumi adalah selalu mengalir dari ...',
    options: [
      { id: 'A', text: 'Tempat yang lebih tinggi menuju tempat yang lebih rendah akibat gaya gravitasi' },
      { id: 'B', text: 'Lautan yang rendah menuju puncak gunung yang tinggi secara langsung' },
      { id: 'C', text: 'Tempat yang panas menuju tempat yang gelap tanpa mengikuti kemiringan tanah' },
      { id: 'D', text: 'Muara sungai menuju mata air pegunungan setiap malam hari' },
    ],
    correctAnswer: 'A',
    explanation: 'Air memiliki sifat mengalir dari tempat tinggi ke tempat rendah karena tarikan gaya gravitasi Bumi, misalnya dari pegunungan menuju sungai lalu bermuara ke laut.',
  },

  // --- LINGKUP MATERI: KE MANA AIR MENGALIR & MENELUSURI ARAH ALIRAN AIR (SOAL 5 - 10) ---
  {
    id: 5,
    type: 'pg',
    element: TP1,
    topic: 'Ke mana air mengalir',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi jalur air hujan yang jatuh ke permukaan tanah.',
    text: 'Saat hujan turun deras di halaman sekolah yang memiliki taman rumput dan saluran selokan, air hujan akan mengalami dua peristiwa sekaligus, yaitu sebagian mengalir di permukaan menuju selokan dan sebagian lagi ...',
    options: [
      { id: 'A', text: 'Meresap ke dalam pori-pori tanah menjadi cadangan air tanah' },
      { id: 'B', text: 'Membeku seketika menjadi lapisan es tebal di permukaan rumput' },
      { id: 'C', text: 'Hilang musnah selamanya sehingga tidak pernah kembali ke Bumi' },
      { id: 'D', text: 'Mengalir naik ke atas dahan pohon menuju pucuk daun' },
    ],
    correctAnswer: 'A',
    explanation: 'Air hujan yang jatuh ke daratan sebagian menjadi aliran permukaan (runoff) menuju parit/sungai, dan sebagian lagi meresap ke dalam tanah (infiltrasi) membentuk air tanah.',
  },
  {
    id: 6,
    type: 'pg',
    element: TP1,
    topic: 'Ke mana air mengalir',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan tempat bermuaranya sebagian besar aliran sungai di daratan.',
    text: 'Air dari selokan kecil mengalir ke anak sungai, kemudian bergabung ke sungai besar. Pada akhirnya, sebagian besar aliran sungai tersebut akan bermuara dan berkumpul di ...',
    options: [
      { id: 'A', text: 'Laut atau samudra' },
      { id: 'B', text: 'Puncak gunung berapi' },
      { id: 'C', text: 'Awan di langit secara langsung' },
      { id: 'D', text: 'Gurun pasir yang gersang' },
    ],
    correctAnswer: 'A',
    explanation: 'Aliran sungai di daratan mengalir menuju tempat paling rendah di permukaan Bumi, yaitu laut atau samudra (atau danau tertutup pada beberapa wilayah tertentu).',
  },
  {
    id: 7,
    type: 'pg',
    element: TP1,
    topic: 'Menelusuri arah aliran air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan bagian hulu, tengah, dan hilir sungai melalui bagan profil sungai.',
    image: `<svg viewBox="0 0 430 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="130" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="215" y="20" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">BAGIAN-BAGIAN ALIRAN SUNGAI</text>
      <g transform="translate(16, 34)">
        <rect width="120" height="74" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="60" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">1. HULU</text>
        <text x="60" y="40" font-family="sans-serif" font-size="9" fill="#1e3a8a" text-anchor="middle">Dekat mata air,</text>
        <text x="60" y="54" font-family="sans-serif" font-size="9" fill="#1e3a8a" text-anchor="middle">lereng curam, arus deras</text>
      </g>
      <text x="148" y="75" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">→</text>
      <g transform="translate(158, 34)">
        <rect width="114" height="74" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="57" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">2. TENGAH</text>
        <text x="57" y="40" font-family="sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">Sungai berkelok,</text>
        <text x="57" y="54" font-family="sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">aliran mulai tenang</text>
      </g>
      <text x="284" y="75" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">→</text>
      <g transform="translate(294, 34)">
        <rect width="120" height="74" rx="8" fill="#cffafe" stroke="#0891b2" stroke-width="1.5"/>
        <text x="60" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0e7490" text-anchor="middle">3. HILIR / MUARA</text>
        <text x="60" y="40" font-family="sans-serif" font-size="9" fill="#155e75" text-anchor="middle">Landai &amp; lebar,</text>
        <text x="60" y="54" font-family="sans-serif" font-size="9" fill="#155e75" text-anchor="middle">bertemu air laut</text>
      </g>
    </svg>`,
    text: 'Perhatikan bagan bagian-bagian aliran sungai di atas! Bagian sungai yang berada di daerah dataran rendah, berbentuk lebar, arusnya lambat, dan langsung bermuara ke laut disebut bagian ...',
    options: [
      { id: 'A', text: 'Hilir' },
      { id: 'B', text: 'Hulu' },
      { id: 'C', text: 'Mata air' },
      { id: 'D', text: 'Lembah puncak' },
    ],
    correctAnswer: 'A',
    explanation: 'Hulu berada di daerah tinggi/pegunungan dengan arus deras, sedangkan hilir adalah bagian akhir sungai yang landai, lebar, berarus lambat, dan bermuara ke laut.',
  },
  {
    id: 8,
    type: 'pg',
    element: TP1,
    topic: 'Menelusuri arah aliran air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menelusuri penyebab air selokan yang meluap saat hujan di lingkungan sekolah.',
    text: 'Ketika menelusuri aliran air hujan dari atap kelas menuju selokan depan sekolah, siswa melihat air meluap ke halaman karena selokan tersumbat sampah plastik. Hal ini membuktikan bahwa aliran air akan terhambat apabila ...',
    options: [
      { id: 'A', text: 'Saluran tempat mengalirnya air tersumbat oleh sampah atau endapan tanah' },
      { id: 'B', text: 'Air hujan tidak memiliki gaya gravitasi pada siang hari' },
      { id: 'C', text: 'Selokan dibuat miring dari tempat tinggi ke tempat yang lebih rendah' },
      { id: 'D', text: 'Di sekitar selokan ditanami banyak rumput hijau yang sehat' },
    ],
    correctAnswer: 'A',
    explanation: 'Sampah plastik dan lumpur menyumbat jalur aliran air sehingga air tidak bisa mengalir lancar menuju tempat yang lebih rendah dan meluap ke permukaan (genangan/banjir).',
  },
  {
    id: 9,
    type: 'pg',
    element: TP1,
    topic: 'Menelusuri arah aliran air',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis hubungan antara ketinggian wilayah (kontur) dengan risiko banjir di daerah hilir.',
    text: 'Kota A berada di dataran rendah dekat muara sungai, sedangkan Daerah B berada di lereng pegunungan (hulu sungai). Apabila di Daerah B terjadi hujan sangat lebat berjam-jam sementara di Kota A tidak hujan, Kota A tetap berpotensi mengalami banjir kiriman karena ...',
    options: [
      { id: 'A', text: 'Air hujan dari hulu (Daerah B) mengalir menuruni sungai menuju hilir (Kota A) yang lebih rendah' },
      { id: 'B', text: 'Air laut di Kota A tersedot ke pegunungan Daerah B pada malam hari' },
      { id: 'C', text: 'Awan hujan selalu berpindah mengikuti jalan raya menuju Kota A' },
      { id: 'D', text: 'Sungai di Kota A dapat memproduksi air sendiri tanpa kiriman dari hulu' },
    ],
    correctAnswer: 'A',
    explanation: 'Air mengalir dari daerah hulu yang lebih tinggi ke daerah hilir yang lebih rendah melalui Daerah Aliran Sungai (DAS). Volume air berlebih di hulu akan mengalir ke hilir dan dapat menyebabkan banjir kiriman.',
  },
  {
    id: 10,
    type: 'pg',
    element: TP1,
    topic: 'Beginilah terjadinya siklus air',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi tahapan utama siklus air berdasarkan diagram berlabel huruf.',
    image: `<svg viewBox="0 0 440 165" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="440" height="165" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
      <circle cx="52" cy="34" r="18" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
      <text x="52" y="64" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#b45309" text-anchor="middle">Matahari</text>
      <!-- Awan -->
      <path d="M 155 46 Q 155 28 175 30 Q 186 18 205 25 Q 222 18 232 32 Q 248 34 244 48 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
      <text x="200" y="17" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">[B] Pembentukan Awan</text>
      <!-- Daratan & Laut -->
      <polygon points="10,152 10,108 115,108 180,128 260,128 260,152" fill="#86efac" stroke="#16a34a"/>
      <rect x="260" y="128" width="170" height="24" fill="#0284c7"/>
      <text x="345" y="144" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">LAUT / SUNGAI</text>
      <!-- Panah A: Evaporasi -->
      <path d="M 345 124 L 345 64" stroke="#f97316" stroke-width="2.5" stroke-dasharray="4 3"/>
      <polygon points="345,58 340,68 350,68" fill="#f97316"/>
      <text x="345" y="50" font-family="sans-serif" font-size="10" font-weight="bold" fill="#c2410c" text-anchor="middle">[A] Penguapan</text>
      <!-- Panah B -> C Presipitasi -->
      <path d="M 178 52 L 160 88 M 196 52 L 180 88 M 214 52 L 198 88" stroke="#2563eb" stroke-width="2" stroke-dasharray="3 2"/>
      <text x="122" y="75" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">[C] Hujan</text>
      <!-- Panah D: Infiltrasi -->
      <path d="M 85 112 L 85 144" stroke="#047857" stroke-width="2.5"/>
      <polygon points="85,148 80,138 90,138" fill="#047857"/>
      <text x="85" y="102" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#065f46" text-anchor="middle">[D] Resapan</text>
    </svg>`,
    text: 'Perhatikan gambar diagram siklus air di atas! Proses penguapan air laut dan sungai akibat panas matahari yang ditunjukkan oleh huruf [A], serta proses turunnya titik-titik air dari awan yang ditunjukkan oleh huruf [C] secara berurutan disebut ...',
    options: [
      { id: 'A', text: 'Evaporasi dan Presipitasi' },
      { id: 'B', text: 'Kondensasi dan Infiltrasi' },
      { id: 'C', text: 'Infiltrasi dan Transpirasi' },
      { id: 'D', text: 'Presipitasi dan Evaporasi' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada diagram siklus air: [A] adalah Evaporasi (penguapan air permukaan), [B] adalah Kondensasi (pengembunan uap air menjadi awan), [C] adalah Presipitasi (hujan), dan [D] adalah Infiltrasi (peresapan air ke tanah).',
  },

  // --- LINGKUP MATERI: BEGINILAH TERJADINYA SIKLUS AIR & SIKLUS AIR (SOAL 11 - 18) ---
  {
    id: 11,
    type: 'pg',
    element: TP1,
    topic: 'Beginilah terjadinya siklus air',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan pengertian siklus air (daur air) dengan tepat.',
    text: 'Mengapa jumlah air di Bumi secara keseluruhan tidak pernah habis meskipun terus digunakan oleh makhluk hidup setiap hari?',
    options: [
      { id: 'A', text: 'Karena air di Bumi mengalami perputaran dan perubahan wujud secara terus-menerus dalam siklus air' },
      { id: 'B', text: 'Karena setiap hari ada meteor es yang jatuh ke laut untuk menambah air' },
      { id: 'C', text: 'Karena manusia selalu membuat air baru di pabrik pengolahan air' },
      { id: 'D', text: 'Karena air laut tidak pernah mengalami penguapan saat terkena matahari' },
    ],
    correctAnswer: 'A',
    explanation: 'Siklus air (daur air) adalah perputaran air secara terus-menerus dari Bumi ke atmosfer dan kembali lagi ke Bumi melalui penguapan, pengembunan, dan hujan, sehingga volume total air di Bumi relatif tetap.',
  },
  {
    id: 12,
    type: 'pg',
    element: TP1,
    topic: 'Beginilah terjadinya siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan istilah evaporasi dan transpirasi dalam siklus air.',
    text: 'Selain air dari laut, danau, dan sungai, tumbuhan hijau juga melepaskan uap air ke udara melalui pori-pori daunnya. Proses penguapan air yang berasal dari tumbuhan disebut ...',
    options: [
      { id: 'A', text: 'Transpirasi' },
      { id: 'B', text: 'Evaporasi' },
      { id: 'C', text: 'Kondensasi' },
      { id: 'D', text: 'Presipitasi' },
    ],
    correctAnswer: 'A',
    explanation: 'Evaporasi adalah penguapan air dari perairan terbuka (laut, sungai, danau), sedangkan Transpirasi adalah penguapan air dari makhluk hidup terutama daun tumbuhan.',
  },
  {
    id: 13,
    type: 'pg',
    element: TP1,
    topic: 'Siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan proses terbentuknya awan (kondensasi) ketika uap air naik ke atmosfer.',
    text: 'Saat uap air naik semakin tinggi ke lapisan atmosfer yang bersuhu dingin, uap air tersebut berubah kembali menjadi titik-titik air kecil yang berkumpul membentuk awan. Peristiwa perubahan wujud dari gas menjadi cair ini disebut ...',
    options: [
      { id: 'A', text: 'Kondensasi (pengembunan)' },
      { id: 'B', text: 'Evaporasi (penguapan)' },
      { id: 'C', text: 'Infiltrasi (peresapan)' },
      { id: 'D', text: 'Sublimasi (penyubliman)' },
    ],
    correctAnswer: 'A',
    explanation: 'Kondensasi adalah perubahan wujud gas (uap air) menjadi titik-titik air cair akibat penurunan suhu di atmosfer, yang kemudian berkumpul menjadi awan.',
  },
  {
    id: 14,
    type: 'pg',
    element: TP1,
    topic: 'Siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi perubahan wujud zat yang terjadi pada setiap tahap siklus air berdasarkan bagan.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <g transform="translate(20, 26)">
        <rect width="105" height="66" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="52" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">AIR CAIR</text>
        <text x="52" y="46" font-family="sans-serif" font-size="9" fill="#1e3a8a" text-anchor="middle">(Laut &amp; Sungai)</text>
      </g>
      <path d="M 130 48 L 160 48" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="164,48 156,43 156,53" fill="#ea580c"/>
      <text x="147" y="40" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#c2410c" text-anchor="middle">Dipanaskan</text>
      <g transform="translate(166, 26)">
        <rect width="100" height="66" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="50" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">UAP AIR (GAS)</text>
        <text x="50" y="46" font-family="sans-serif" font-size="9" fill="#b45309" text-anchor="middle">(Naik ke Udara)</text>
      </g>
      <path d="M 271 48 L 301 48" stroke="#0284c7" stroke-width="2.5"/>
      <polygon points="305,48 297,43 297,53" fill="#0284c7"/>
      <text x="288" y="40" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Didinginkan</text>
      <g transform="translate(307, 26)">
        <rect width="95" height="66" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="47" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">TITIK AIR</text>
        <text x="47" y="46" font-family="sans-serif" font-size="9" fill="#0c4a6e" text-anchor="middle">(Awan &amp; Hujan)</text>
      </g>
    </svg>`,
    text: 'Berdasarkan bagan perubahan wujud air dalam siklus air di atas, pasangan tahapan dan perubahan wujud yang tepat adalah ...',
    options: [
      { id: 'A', text: 'Evaporasi mengubah wujud cair menjadi gas, sedangkan kondensasi mengubah gas menjadi cair' },
      { id: 'B', text: 'Evaporasi mengubah wujud padat menjadi cair, sedangkan presipitasi mengubah cair menjadi gas' },
      { id: 'C', text: 'Kondensasi mengubah wujud cair menjadi gas, sedangkan infiltrasi mengubah gas menjadi es' },
      { id: 'D', text: 'Transpirasi mengubah wujud gas menjadi padat, sedangkan evaporasi mengubah es menjadi batu' },
    ],
    correctAnswer: 'A',
    explanation: 'Pemanasan oleh matahari menyebabkan evaporasi (cair → gas/uap air). Pendinginan di atmosfer menyebabkan kondensasi (gas/uap air → cair berupa titik air awan).',
  },
  {
    id: 15,
    type: 'pg',
    element: TP1,
    topic: 'Siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan proses jatuhnya titik air hujan ke permukaan Bumi (presipitasi).',
    text: 'Ketika titik-titik air di dalam awan terus berkumpul sehingga menjadi semakin berat dan tidak mampu lagi ditopang oleh udara, maka titik-titik air tersebut jatuh ke Bumi sebagai hujan atau salju. Tahap ini dikenal dengan istilah ...',
    options: [
      { id: 'A', text: 'Presipitasi' },
      { id: 'B', text: 'Transpirasi' },
      { id: 'C', text: 'Evaporasi' },
      { id: 'D', text: 'Infiltrasi' },
    ],
    correctAnswer: 'A',
    explanation: 'Presipitasi adalah peristiwa jatuhnya air dari atmosfer ke permukaan Bumi dalam bentuk hujan, gerimis, salju, atau hujan es.',
  },
  {
    id: 16,
    type: 'pg',
    element: TP2,
    topic: 'Siklus air',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyebutkan sumber energi utama yang menggerakkan siklus air di Bumi.',
    text: 'Sumber energi alami terbesar yang menggerakkan terjadinya penguapan air pada siklus air di Bumi adalah ...',
    options: [
      { id: 'A', text: 'Panas sinar matahari' },
      { id: 'B', text: 'Cahaya bulan purnama' },
      { id: 'C', text: 'Lampu penerangan jalan' },
      { id: 'D', text: 'Gelombang pasang air laut' },
    ],
    correctAnswer: 'A',
    explanation: 'Energi panas matahari memanaskan permukaan laut, sungai, danau, dan daratan sehingga memicu penguapan (evaporasi dan transpirasi) yang menjadi penggerak utama siklus air.',
  },
  {
    id: 17,
    type: 'pg',
    element: TP2,
    topic: 'Siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis faktor cuaca (suhu dan angin) yang memengaruhi laju penguapan dalam siklus air.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(18, 18)">
        <rect width="180" height="88" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
        <text x="90" y="22" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">KONDISI A</text>
        <text x="90" y="42" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Suhu udara tinggi (panas)</text>
        <text x="90" y="57" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Angin bertiup kencang</text>
        <text x="90" y="72" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Udara kering</text>
      </g>
      <g transform="translate(222, 18)">
        <rect width="180" height="88" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
        <text x="90" y="22" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">KONDISI B</text>
        <text x="90" y="42" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Suhu udara rendah (dingin)</text>
        <text x="90" y="57" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Tidak ada angin</text>
        <text x="90" y="72" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Kelembapan sangat tinggi</text>
      </g>
    </svg>`,
    text: 'Perhatikan perbandingan dua kondisi cuaca pada gambar di atas! Laju penguapan air (evaporasi) dari permukaan kolam atau danau akan berlangsung paling cepat pada ...',
    options: [
      { id: 'A', text: 'Kondisi A, karena suhu panas dan angin kencang mempercepat pelepasan uap air' },
      { id: 'B', text: 'Kondisi B, karena udara yang sudah jenuh uap air membuat air cepat menguap' },
      { id: 'C', text: 'Kondisi B, karena tidak ada sinar matahari maupun angin yang bertiup' },
      { id: 'D', text: 'Kondisi A dan B sama persis karena penguapan tidak dipengaruhi cuaca' },
    ],
    correctAnswer: 'A',
    explanation: 'Faktor alami yang mempercepat evaporasi adalah suhu udara yang tinggi (panas matahari), tiupan angin yang membawa uap air menjauh dari permukaan, serta kelembapan udara yang rendah.',
  },
  {
    id: 18,
    type: 'pg',
    element: TP2,
    topic: 'Siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan peran angin dalam menggerakkan awan pada siklus air.',
    text: 'Meskipun penguapan paling banyak terjadi di lautan yang luas, daerah pegunungan di tengah pulau tetap mendapatkan turunnya hujan. Faktor alam yang berperan menggerakkan awan dari lautan menuju daratan adalah ...',
    options: [
      { id: 'A', text: 'Angin' },
      { id: 'B', text: 'Pasang surut laut' },
      { id: 'C', text: 'Gempa bumi' },
      { id: 'D', text: 'Aliran sungai' },
    ],
    correctAnswer: 'A',
    explanation: 'Angin membawa awan atau uap air yang terbentuk di atas lautan bergerak menuju wilayah daratan hingga pegunungan, tempat terjadinya hujan.',
  },

  // --- LINGKUP MATERI: DAMPAK AKTIVITAS MANUSIA TERHADAP SIKLUS AIR (SOAL 19 - 25) ---
  {
    id: 19,
    type: 'pg',
    element: TP2,
    topic: 'Dampak aktivitas manusia terhadap siklus air',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat membandingkan dampak penebangan hutan terhadap proses infiltrasi dan risiko banjir.',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="135" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(15, 16)">
        <rect width="185" height="102" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="92" y="20" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">LAHAN A (HUTAN LEBAT)</text>
        <circle cx="52" cy="52" r="14" fill="#16a34a"/>
        <rect x="49" y="64" width="6" height="16" fill="#78350f"/>
        <circle cx="95" cy="48" r="16" fill="#15803d"/>
        <rect x="92" y="62" width="6" height="18" fill="#78350f"/>
        <circle cx="138" cy="54" r="13" fill="#22c55e"/>
        <rect x="135" y="65" width="6" height="15" fill="#78350f"/>
        <rect x="16" y="80" width="153" height="14" rx="3" fill="#a16207"/>
        <text x="92" y="90" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Air hujan meresap ke akar &amp; tanah</text>
      </g>
      <g transform="translate(220, 16)">
        <rect width="185" height="102" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="92" y="20" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">LAHAN B (HUTAN GUNDUL)</text>
        <rect x="45" y="70" width="8" height="10" fill="#78350f"/>
        <rect x="125" y="70" width="8" height="10" fill="#78350f"/>
        <rect x="16" y="80" width="153" height="14" rx="3" fill="#b45309"/>
        <path d="M 35 66 Q 92 60 155 66" stroke="#2563eb" stroke-width="4" fill="none"/>
        <text x="92" y="54" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Aliran air keruh sangat deras</text>
        <text x="92" y="90" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">Tanah tergerus, cadangan air turun</text>
      </g>
    </svg>`,
    text: 'Perhatikan perbandingan Lahan A dan Lahan B saat terjadi hujan lebat pada gambar di atas! Dampak utama yang terjadi apabila hutan di daerah perbukitan ditebang habis (Lahan B) adalah ...',
    options: [
      { id: 'A', text: 'Daya serap air tanah berkurang drastis sehingga memicu banjir saat hujan dan kekeringan saat kemarau' },
      { id: 'B', text: 'Cadangan air tanah di dalam sumur warga menjadi jauh lebih melimpah dan jernih' },
      { id: 'C', text: 'Proses transpirasi tumbuhan meningkat pesat sehingga udara menjadi sejuk' },
      { id: 'D', text: 'Tanah menjadi semakin kokoh menahan arus air sehingga tidak terjadi tanah longsor' },
    ],
    correctAnswer: 'A',
    explanation: 'Akar pepohonan di hutan membantu menahan air hujan dan membuka pori tanah agar air meresap (infiltrasi). Jika hutan gundul, air langsung meluncur di permukaan membawa lumpur (banjir/longsor) dan cadangan air tanah menipis saat kemarau.',
  },
  {
    id: 20,
    type: 'pg',
    element: TP2,
    topic: 'Dampak aktivitas manusia terhadap siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi dampak penutupan permukaan tanah dengan aspal atau beton terhadap siklus air.',
    text: 'Di daerah perkotaan yang padat, hampir seluruh halaman rumah dan jalanan ditutup menggunakan aspal serta beton (paving rapat). Dampak langsung kebiasaan tersebut terhadap tahapan siklus air adalah ...',
    options: [
      { id: 'A', text: 'Terhambatnya proses infiltrasi (peresapan air ke tanah) sehingga air hujan langsung menggenang' },
      { id: 'B', text: 'Terhentinya proses evaporasi dari permukaan laut dan samudra' },
      { id: 'C', text: 'Meningkatnya jumlah mata air alami di halaman rumah warga' },
      { id: 'D', text: 'Berubahnya awan mendung menjadi es sebelum mencapai tanah' },
    ],
    correctAnswer: 'A',
    explanation: 'Aspal dan beton bersifat kedap air sehingga menutup pori-pori tanah. Akibatnya infiltrasi terhambat, cadangan air tanah berkurang, dan air hujan menggenang menjadi banjir.',
  },
  {
    id: 21,
    type: 'pg',
    element: TP2,
    topic: 'Dampak aktivitas manusia terhadap siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan dampak pembuangan limbah industri dan rumah tangga ke sungai terhadap siklus air.',
    text: 'Pabrik dan warga yang membuang limbah cair beracun serta sampah rumah tangga ke sungai mengganggu kualitas air dalam siklus air karena ...',
    options: [
      { id: 'A', text: 'Air sungai menjadi tercemar, berbau, beracun bagi biota air, dan tidak layak pakai bagi masyarakat' },
      { id: 'B', text: 'Limbah beracun membuat ikan di sungai berkembang biak dua kali lebih cepat' },
      { id: 'C', text: 'Sampah plastik membantu menyaring air sungai agar menjadi air mineral' },
      { id: 'D', text: 'Air yang tercemar tidak dapat mengalir menuju hilir dan laut' },
    ],
    correctAnswer: 'A',
    explanation: 'Pembuangan limbah kimia dan sampah domestik mencemari badan air (sungai, danau, bahkan air tanah), mematikan makhluk hidup air, serta mengurangi ketersediaan air bersih.',
  },
  {
    id: 22,
    type: 'pg',
    element: TP2,
    topic: 'Dampak aktivitas manusia terhadap siklus air',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis grafik perbandingan peresapan air tanah antara wilayah hijau dan wilayah beton.',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="135" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="210" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">PERSENTASE AIR HUJAN YANG MERESAP KE TANAH</text>
      <!-- Bar 1 -->
      <text x="20" y="50" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857">Lahan Bervegetasi Alami</text>
      <rect x="175" y="38" width="180" height="18" rx="4" fill="#10b981"/>
      <text x="365" y="51" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857">50%</text>
      <!-- Bar 2 -->
      <text x="20" y="82" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#d97706">Perumahan Semi-Terbuka</text>
      <rect x="175" y="70" width="108" height="18" rx="4" fill="#f59e0b"/>
      <text x="293" y="83" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b45309">30%</text>
      <!-- Bar 3 -->
      <text x="20" y="114" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#dc2626">Kawasan Beton Padat</text>
      <rect x="175" y="102" width="36" height="18" rx="4" fill="#ef4444"/>
      <text x="220" y="115" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">10%</text>
    </svg>`,
    text: 'Berdasarkan grafik di atas, di kawasan beton padat hanya 10% air hujan yang mampu meresap ke tanah. Jika 90% sisanya menjadi aliran permukaan yang tidak tertampung drainase, akibat yang paling mungkin terjadi adalah ...',
    options: [
      { id: 'A', text: 'Terjadi genangan/banjir saat musim hujan dan sumur warga mudah kering saat kemarau' },
      { id: 'B', text: 'Cadangan air tanah di kawasan beton meningkat lima kali lipat dibanding hutan' },
      { id: 'C', text: 'Air hujan berubah menjadi uap sebelum menyentuh permukaan jalan beton' },
      { id: 'D', text: 'Kawasan beton tidak akan pernah membutuhkan saluran pembuangan air' },
    ],
    correctAnswer: 'A',
    explanation: 'Semakin kecil persentase air yang meresap ke tanah (10%), semakin besar aliran air permukaan yang memicu banjir saat hujan dan sedikit cadangan air tanah untuk musim kemarau.',
  },
  {
    id: 23,
    type: 'pg',
    element: TP2,
    topic: 'Dampak aktivitas manusia terhadap siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan dampak pengambilan air tanah secara berlebihan menggunakan pompa mesin dalam skala besar.',
    text: 'Pengambilan air tanah secara berlebihan oleh bangunan-bangunan besar setiap hari tanpa diimbangi pembuatan sumur resapan dapat mengakibatkan ...',
    options: [
      { id: 'A', text: 'Permukaan air tanah menurun tajam, sumur warga mengering, dan tanah bisa mengalami penurunan' },
      { id: 'B', text: 'Volume air di dalam tanah otomatis bertambah banyak setiap kali disedot' },
      { id: 'C', text: 'Air hujan langsung berubah menjadi air laut sebelum jatuh ke daratan' },
      { id: 'D', text: 'Akar pohon di sekitarnya tumbuh lebih cepat tanpa perlu disiram' },
    ],
    correctAnswer: 'A',
    explanation: 'Pengambilan air tanah melebihi kecepatan pengisian ulang (infiltrasi) menyebabkan muka air tanah turun, sumur dangkal mengering, dan di daerah pesisir memicu intrusi air laut serta penurunan muka tanah.',
  },
  {
    id: 24,
    type: 'pg',
    element: TP2,
    topic: 'Dampak aktivitas manusia terhadap siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menghubungkan pencemaran udara dan asap pabrik dengan terjadinya hujan asam.',
    text: 'Asap kendaraan bermotor dan cerobong pabrik yang mengandung gas belerang serta nitrogen di udara dapat bereaksi dengan uap air di awan. Dampak aktivitas manusia tersebut terhadap siklus air adalah terbentuknya ...',
    options: [
      { id: 'A', text: 'Hujan asam yang dapat merusak tanaman, bangunan, dan mencemari perairan' },
      { id: 'B', text: 'Air mineral murni yang aman langsung diminum tanpa dimasak' },
      { id: 'C', text: 'Salju abadi di wilayah tropis sepanjang tahun' },
      { id: 'D', text: 'Mata air panas alami di setiap halaman rumah' },
    ],
    correctAnswer: 'A',
    explanation: 'Polutan gas dari asap kendaraan dan industri larut ke dalam titik-titik air awan membentuk hujan asam (acid rain) yang merusak kesuburan tanah, tumbuhan, dan ekosistem air.',
  },
  {
    id: 25,
    type: 'pg',
    element: TP2,
    topic: 'Dampak aktivitas manusia terhadap siklus air',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi perilaku manusia yang mendukung kelancaran siklus air.',
    text: 'Manakah kegiatan manusia berikut ini yang berdampak POSITIF terhadap kelestarian siklus air dan ketersediaan air tanah?',
    options: [
      { id: 'A', text: 'Melakukan reboisasi (penanaman kembali) lahan gundul dan menjaga daerah resapan air' },
      { id: 'B', text: 'Membakar hutan untuk membuka lahan perkebunan secara besar-besaran' },
      { id: 'C', text: 'Membuang minyak goreng bekas dan deterjen langsung ke sungai' },
      { id: 'D', text: 'Menutup seluruh tanah halaman dengan semen tanpa lubang resapan' },
    ],
    correctAnswer: 'A',
    explanation: 'Reboisasi dan pelestarian daerah resapan membantu tanah menyerap air hujan (infiltrasi) dan menjaga proses transpirasi tetap berjalan seimbang.',
  },

  // --- LINGKUP MATERI: KE MANA AIR BERSIH DI LINGKUNGANKU (SOAL 26 - 30) ---
  {
    id: 26,
    type: 'pg',
    element: TP2,
    topic: 'Ke mana air bersih di lingkunganku',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat memahami proses tersimpannya air tanah dan penyebab keringnya sumur warga saat kemarau melalui gambar.',
    image: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="140" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <!-- Lapisan Tanah -->
      <rect x="16" y="42" width="388" height="22" fill="#a16207"/>
      <rect x="16" y="64" width="388" height="24" fill="#ca8a04"/>
      <rect x="16" y="88" width="388" height="36" fill="#0284c7"/>
      <!-- Sumur -->
      <rect x="260" y="24" width="36" height="90" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <rect x="262" y="88" width="32" height="24" fill="#38bdf8"/>
      <text x="120" y="56" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#ffffff">Lapisan Tanah Atas</text>
      <text x="120" y="79" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#ffffff">Lapisan Pasir &amp; Kerikil (Penyaring Alami)</text>
      <text x="120" y="109" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">Zona Air Tanah (Akuifer)</text>
      <text x="278" y="19" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e293b" text-anchor="middle">Sumur Warga</text>
      <text x="355" y="109" font-family="sans-serif" font-size="9" font-weight="bold" fill="#e0f2fe" text-anchor="middle">Cadangan Air</text>
    </svg>`,
    text: 'Perhatikan gambar lapisan tanah dan sumur warga di atas! Air hujan yang meresap melewati lapisan tanah, pasir, dan kerikil akan tersaring secara alami dan berkumpul di zona air tanah. Apabila musim kemarau berlangsung sangat panjang tanpa hujan, permukaan zona air tanah akan ...',
    options: [
      { id: 'A', text: 'Turun semakin dalam sehingga sumur dangkal warga dapat mengalami kekeringan' },
      { id: 'B', text: 'Naik meluap keluar dari bibir sumur hingga membanjiri jalan raya' },
      { id: 'C', text: 'Berubah menjadi minyak bumi yang tidak bisa ditimba lagi' },
      { id: 'D', text: 'Tetap penuh walaupun seluruh pepohonan di sekitarnya ditebang' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada musim kemarau panjang, pasokan air hujan yang meresap berhenti sementara air terus diambil dan mengalir, sehingga permukaan air tanah turun dan sumur dangkal menjadi kering.',
  },
  {
    id: 27,
    type: 'pg',
    element: TP2,
    topic: 'Ke mana air bersih di lingkunganku',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi penyebab terganggunya kualitas air sumur jika dekat dengan septic tank atau tempat sampah.',
    text: 'Sebuah sumur gali di permukiman padat penduduk dibangun terlalu dekat (kurang dari 5 meter) dari saluran pembuangan limbah kakus (septic tank). Masalah ketersediaan air bersih yang akan timbul pada sumur tersebut adalah ...',
    options: [
      { id: 'A', text: 'Air sumur mudah tercemar bakteri berbahaya dan berbau tidak sedap karena rembesan limbah' },
      { id: 'B', text: 'Air sumur menjadi lebih jernih dan kaya mineral alami yang sehat' },
      { id: 'C', text: 'Debit air sumur meningkat pesat sehingga tidak pernah kering saat kemarau' },
      { id: 'D', text: 'Suhu air sumur meningkat hingga mendidih di dalam tanah' },
    ],
    correctAnswer: 'A',
    explanation: 'Air limbah dapat merembes melalui pori-pori tanah. Jarak sumur bersih dengan tangki septik minimal harus 10 meter agar air tanah tidak terkontaminasi bakteri E. coli.',
  },
  {
    id: 28,
    type: 'pg',
    element: TP3,
    topic: 'Ke mana air bersih di lingkunganku',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyebutkan sumber-sumber air bersih yang umum digunakan masyarakat di lingkungan sekitar.',
    text: 'Berikut ini yang merupakan sumber utama penyedia air bersih bagi kebutuhan rumah tangga di lingkungan sekitar kita adalah ...',
    options: [
      { id: 'A', text: 'Air tanah (sumur), mata air pegunungan, dan air olahan PDAM' },
      { id: 'B', text: 'Air laut asin langsung tanpa pengolahan dan air limbah pabrik' },
      { id: 'C', text: 'Genangan air selokan jalan raya yang berwarna kehitaman' },
      { id: 'D', text: 'Air bekas cucian kendaraan bermotor yang bercampur oli' },
    ],
    correctAnswer: 'A',
    explanation: 'Masyarakat umumnya memperoleh air bersih dari air tanah (sumur gali/sumur bor), mata air alami, serta air bersih perpipaan yang telah diolah oleh PDAM.',
  },
  {
    id: 29,
    type: 'pg',
    element: TP3,
    topic: 'Ke mana air bersih di lingkunganku',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis penyebab berkurangnya pasokan air bersih di wilayah perkotaan maupun pedesaan.',
    text: 'Di Desa Sukamaju, sepuluh tahun lalu air sungai masih jernih dan debit air mata air sangat deras. Sekarang, sungai menjadi keruh dan banyak warga kesulitan air bersih saat kemarau. Kombinasi penyebab yang paling tepat atas kondisi tersebut adalah ...',
    options: [
      { id: 'A', text: 'Berkurangnya lahan hijau resapan air, pencemaran limbah ke sungai, dan pemborosan penggunaan air' },
      { id: 'B', text: 'Terlalu banyak warga yang membuat lubang biopori dan menanam pohon di pekarangan' },
      { id: 'C', text: 'Masyarakat rutin membersihkan selokan dan mengolah limbah rumah tangga' },
      { id: 'D', text: 'Terjadinya proses evaporasi yang terlalu kecil di wilayah samudra luas' },
    ],
    correctAnswer: 'A',
    explanation: 'Berkurangnya daerah resapan air menurunkan cadangan air tanah, sedangkan pembuangan limbah mencemari sungai, diperparah oleh perilaku boros air sehingga krisis air bersih muncul.',
  },
  {
    id: 30,
    type: 'pg',
    element: TP3,
    topic: 'Ke mana air bersih di lingkunganku',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan langkah awal pengolahan air sungai oleh PDAM sebelum dialirkan ke rumah warga.',
    text: 'Air sungai yang keruh oleh lumpur diolah oleh Perusahaan Daerah Air Minum (PDAM) melalui beberapa tahap seperti pengendapan, penyaringan (filtrasi), dan pemberian kaporit pembunuh kuman. Tujuan utama proses tersebut adalah ...',
    options: [
      { id: 'A', text: 'Menghasilkan air bersih yang memenuhi standar kesehatan sebelum disalurkan ke rumah warga' },
      { id: 'B', text: 'Menambah rasa asin pada air sungai agar sama dengan air laut' },
      { id: 'C', text: 'Mengubah air cair menjadi uap gas agar mudah dikirim lewat pipa' },
      { id: 'D', text: 'Membuat air sungai berwarna keruh supaya terlihat alami' },
    ],
    correctAnswer: 'A',
    explanation: 'Instalasi pengolahan air (PDAM) menjernihkan kotoran fisik (pengendapan dan penyaringan) serta membasmi mikroorganisme berbahaya (desinfeksi) agar aman dipakai masyarakat.',
  },

  // --- LINGKUP MATERI: STANDAR AIR BERSIH (SOAL 31 - 35) ---
  {
    id: 31,
    type: 'pg',
    element: TP3,
    topic: 'Standar air bersih',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan sampel air yang memenuhi standar fisik air bersih melalui gambar pengamatan.',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="130" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(24, 18)">
        <rect x="18" y="10" width="60" height="68" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
        <rect x="20" y="30" width="56" height="46" fill="#78350f" opacity="0.75"/>
        <text x="48" y="96" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#78350f" text-anchor="middle">Sampel P: Keruh,</text>
        <text x="48" y="108" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">berbau lumpur</text>
      </g>
      <g transform="translate(162, 18)">
        <rect x="18" y="10" width="60" height="68" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
        <rect x="20" y="30" width="56" height="46" fill="#84cc16" opacity="0.65"/>
        <text x="48" y="96" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#4d7c0f" text-anchor="middle">Sampel Q: Hijau,</text>
        <text x="48" y="108" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">terasa pahit</text>
      </g>
      <g transform="translate(300, 18)">
        <rect x="18" y="10" width="60" height="68" rx="4" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <rect x="20" y="30" width="56" height="46" fill="#e0f2fe"/>
        <text x="48" y="96" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Sampel R: Jernih,</text>
        <text x="48" y="108" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">tak berbau &amp; tawar</text>
      </g>
    </svg>`,
    text: 'Berdasarkan hasil pengamatan sederhana pada gambar tiga gelas air di atas, sampel air yang memenuhi standar syarat fisik air bersih adalah ...',
    options: [
      { id: 'A', text: 'Sampel R, karena jernih (tidak berwarna), tidak berbau, dan tidak berasa' },
      { id: 'B', text: 'Sampel P, karena memiliki endapan lumpur alami di dasar gelas' },
      { id: 'C', text: 'Sampel Q, karena berwarna hijau lumut dan memiliki rasa yang khas' },
      { id: 'D', text: 'Sampel P dan Q, karena keduanya terlihat kental dan pekat' },
    ],
    correctAnswer: 'A',
    explanation: 'Syarat fisik air bersih yang baik adalah tidak keruh (jernih), tidak berwarna, tidak berbau, tidak berasa (tawar), dan suhunya sejuk tidak menyimpang jauh dari suhu udara.',
  },
  {
    id: 32,
    type: 'pg',
    element: TP3,
    topic: 'Standar air bersih',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi tiga kategori utama persyaratan kualitas air bersih.',
    text: 'Agar aman digunakan oleh manusia untuk minum dan memasak, air bersih harus memenuhi tiga syarat standar kualitas air, yaitu ...',
    options: [
      { id: 'A', text: 'Syarat fisik, syarat kimia, dan syarat biologi' },
      { id: 'B', text: 'Syarat warna, syarat harga, dan syarat ukuran' },
      { id: 'C', text: 'Syarat arus deras, syarat pasang surut, dan syarat asin' },
      { id: 'D', text: 'Syarat berbusa, syarat berbau wangi, dan syarat dingin' },
    ],
    correctAnswer: 'A',
    explanation: 'Standar kualitas air bersih meliputi 3 aspek: syarat fisik (jernih, tak berbau, tak berasa), syarat kimia (pH netral dan bebas zat kimia beracun), serta syarat biologi (bebas kuman/bakteri penyakit).',
  },
  {
    id: 33,
    type: 'pg',
    element: TP3,
    topic: 'Standar air bersih',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan syarat kimia dan syarat biologi pada standar air bersih.',
    text: 'Air sumur di rumah Bayu terlihat sangat jernih dan tidak berbau, tetapi saat diuji di laboratorium ternyata mengandung bakteri E. coli yang menyebabkan penyakit diare. Air tersebut tidak layak langsung diminum karena tidak memenuhi syarat ...',
    options: [
      { id: 'A', text: 'Syarat biologi' },
      { id: 'B', text: 'Syarat fisik' },
      { id: 'C', text: 'Syarat warna' },
      { id: 'D', text: 'Syarat kekeruhan' },
    ],
    correctAnswer: 'A',
    explanation: 'Keberadaan bakteri patogen atau kuman penyebab penyakit (seperti Escherichia coli) termasuk ke dalam penilaian syarat biologi (mikrobiologi). Oleh karena itu air perlu dimasak hingga mendidih sebelum diminum.',
  },
  {
    id: 34,
    type: 'pg',
    element: TP3,
    topic: 'Standar air bersih',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan derajat keasaman (pH) air yang memenuhi syarat kimia air bersih.',
    text: 'Secara syarat kimia, air bersih yang aman dikonsumsi tidak boleh mengandung logam berat beracun (seperti timbal atau merkuri) dan harus memiliki tingkat keasaman (pH) yang netral, yaitu berada pada rentang ...',
    options: [
      { id: 'A', text: 'Sekitar 6,5 hingga 8,5 (netral)' },
      { id: 'B', text: 'Kurang dari 2 (sangat asam)' },
      { id: 'C', text: 'Lebih dari 12 (sangat basa)' },
      { id: 'D', text: 'Tepat 0 (mengandung asam kuat)' },
    ],
    correctAnswer: 'A',
    explanation: 'Air bersih memenuhi standar kimia apabila memiliki pH netral (6,5 – 8,5), tidak terlalu asam atau terlalu basa, serta bebas bahan kimia beracun dan pestisida.',
  },
  {
    id: 35,
    type: 'pg',
    element: TP3,
    topic: 'Standar air bersih',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengevaluasi alasan mengapa air jernih belum tentu langsung aman diminum tanpa dimasak.',
    text: 'Sebuah mata air di pinggir desa mengalirkan air yang sangat jernih, dingin, dan tidak berbau. Namun, warga tetap merebus air tersebut hingga mendidih sebelum diminum. Alasan ilmiah paling tepat di balik tindakan warga tersebut adalah ...',
    options: [
      { id: 'A', text: 'Air yang tampak jernih secara fisik masih mungkin mengandung kuman atau bakteri mikroskopis yang hanya mati saat dipanaskan' },
      { id: 'B', text: 'Merebus air bertujuan agar warna air berubah menjadi keruh kecokelatan' },
      { id: 'C', text: 'Air dingin tidak bisa dicerna oleh lambung manusia jika tidak berubah menjadi gas' },
      { id: 'D', text: 'Merebus air dapat menghilangkan seluruh kandungan oksigen dan mineralnya' },
    ],
    correctAnswer: 'A',
    explanation: 'Bakteri, virus, dan parasit berukuran mikroskopis sehingga tidak terlihat oleh mata telanjang. Air yang jernih secara fisik tetap wajib dimasak hingga mendidih (100°C) untuk memenuhi syarat biologi.',
  },

  // --- LINGKUP MATERI: MENJAGA KETERSEDIAAN AIR BERSIH (SOAL 36 - 40) ---
  {
    id: 36,
    type: 'pg',
    element: TP3,
    topic: 'Menjaga ketersediaan air bersih',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi fungsi bahan-bahan dalam alat penjernihan air sederhana melalui gambar.',
    image: `<svg viewBox="0 0 420 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="155" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="210" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">ALAT PENJERNIH AIR SEDERHANA</text>
      <rect x="145" y="30" width="130" height="106" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
      <rect x="147" y="32" width="126" height="18" fill="#a8a29e"/>
      <text x="210" y="44" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">1. Batu &amp; Kerikil</text>
      <rect x="147" y="50" width="126" height="20" fill="#fcd34d"/>
      <text x="210" y="63" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#78350f" text-anchor="middle">2. Pasir Halus</text>
      <rect x="147" y="70" width="126" height="22" fill="#1e293b"/>
      <text x="210" y="84" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">3. Arang Aktif</text>
      <rect x="147" y="92" width="126" height="20" fill="#78350f"/>
      <text x="210" y="105" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#fef3c7" text-anchor="middle">4. Serabut Ijuk</text>
      <rect x="147" y="112" width="126" height="22" fill="#f1f5f9"/>
      <text x="210" y="126" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#334155" text-anchor="middle">5. Kapas / Kain Bersih</text>
      <text x="340" y="84" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">← Menyerap bau</text>
      <text x="340" y="96" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">&amp; warna keruh</text>
    </svg>`,
    text: 'Perhatikan gambar susunan alat penjernih air sederhana di atas! Jika air keruh yang disaring juga memiliki bau tidak sedap, lapisan bahan pada nomor 3 yang berfungsi utama menyerap bau dan zat warna adalah ...',
    options: [
      { id: 'A', text: 'Arang aktif / arang tempurung kelapa' },
      { id: 'B', text: 'Batu kerikil besar' },
      { id: 'C', text: 'Air garam dapur' },
      { id: 'D', text: 'Pecahan kaca bening' },
    ],
    correctAnswer: 'A',
    explanation: 'Dalam penyaringan air sederhana: kerikil dan ijuk menyaring kotoran berukuran besar, pasir menahan lumpur halus, kapas menyaring partikel sangat halus, dan arang aktif menyerap bau, rasa, serta warna.',
  },
  {
    id: 37,
    type: 'pg',
    element: TP3,
    topic: 'Menjaga ketersediaan air bersih',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyebutkan contoh tindakan menghemat air bersih di rumah dan di sekolah.',
    text: 'Tindakan berikut ini yang merupakan kebiasaan nyata dalam menghemat penggunaan air bersih di rumah maupun di sekolah adalah ...',
    options: [
      { id: 'A', text: 'Menutup keran air dengan rapat setelah selesai mencuci tangan dan memperbaiki keran yang bocor' },
      { id: 'B', text: 'Membiarkan keran kamar mandi terus mengalir saat menggosok gigi' },
      { id: 'C', text: 'Menyiram halaman sekolah setiap jam dengan air minum kemasan' },
      { id: 'D', text: 'Mencuci sepeda menggunakan selang air yang dibuka penuh selama satu jam' },
    ],
    correctAnswer: 'A',
    explanation: 'Menutup keran saat tidak digunakan (seperti saat menyabuni tangan atau menggosok gigi) dan segera memperbaiki kebocoran pipa menghemat ratusan liter air bersih setiap minggu.',
  },
  {
    id: 38,
    type: 'pg',
    element: TP3,
    topic: 'Menjaga ketersediaan air bersih',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menemukan solusi kreatif pemanfaatan ulang air limbah rumah tangga yang masih bersih (greywater).',
    text: 'Ibu selesai mencuci beras dan membilas sayuran untuk makan siang. Agar ketersediaan air bersih tetap terjaga, solusi tepat yang dapat dilakukan terhadap air bekas cucian beras dan sayuran tersebut adalah ...',
    options: [
      { id: 'A', text: 'Menggunakannya kembali untuk menyiram tanaman hias dan kebun di halaman rumah' },
      { id: 'B', text: 'Membuangnya ke dalam sumur air minum agar volume air sumur bertambah' },
      { id: 'C', text: 'Menggunakannya untuk mencuci piring bersih dan menyikat gigi' },
      { id: 'D', text: 'Menuangkannya ke jalan aspal agar menguap menjadi polusi udara' },
    ],
    correctAnswer: 'A',
    explanation: 'Air bekas cucian beras dan sayuran (tanpa sabun/bahan kimia keras) masih kaya nutrisi bagi tanaman sehingga dapat dimanfaatkan kembali untuk menyiram tanaman dan menghemat air bersih.',
  },
  {
    id: 39,
    type: 'pg',
    element: TP3,
    topic: 'Menjaga ketersediaan air bersih',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan fungsi lubang resapan biopori sebagai solusi meningkatkan cadangan air tanah di halaman sempit.',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="135" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="210" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">LUBANG RESAPAN BIOPORI DI HALAMAN</text>
      <rect x="25" y="45" width="370" height="75" rx="6" fill="#a16207"/>
      <rect x="175" y="45" width="70" height="65" fill="#78350f" stroke="#fef3c7" stroke-width="2"/>
      <!-- Sampah organik -->
      <circle cx="195" cy="70" r="5" fill="#4ade80"/>
      <circle cx="215" cy="78" r="6" fill="#22c55e"/>
      <circle cx="203" cy="92" r="5" fill="#86efac"/>
      <circle cx="222" cy="96" r="5" fill="#16a34a"/>
      <!-- Panah air masuk -->
      <path d="M 140 34 Q 185 34 205 48" stroke="#0284c7" stroke-width="3" fill="none"/>
      <path d="M 280 34 Q 235 34 215 48" stroke="#0284c7" stroke-width="3" fill="none"/>
      <text x="95" y="34" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Air Hujan Mengalir</text>
      <text x="325" y="34" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Masuk ke Lubang</text>
      <text x="210" y="130" font-family="sans-serif" font-size="9" font-weight="bold" fill="#064e3b" text-anchor="middle">Diisi sampah organik (daun kering) → diurai cacing tanah membentuk pori resapan</text>
    </svg>`,
    text: 'Perhatikan gambar lubang resapan biopori di atas! Pembuatan lubang resapan biopori di halaman sekolah yang sempit merupakan solusi efektif untuk menjaga ketersediaan air bersih karena ...',
    options: [
      { id: 'A', text: 'Membantu mempercepat peresapan air hujan ke dalam tanah menjadi cadangan air tanah dan mengurangi genangan' },
      { id: 'B', text: 'Menampung sampah plastik dan kaleng bekas agar tidak perlu dibuang ke tempat sampah' },
      { id: 'C', text: 'Menutup permukaan tanah dengan pipa besi rapat agar air tidak bisa masuk ke dalam bumi' },
      { id: 'D', text: 'Mengubah air hujan langsung menjadi air panas untuk keperluan mandi' },
    ],
    correctAnswer: 'A',
    explanation: 'Lubang biopori diisi sampah organik yang memicu aktivitas fauna tanah (seperti cacing) membentuk terowongan pori tanah. Hal ini meningkatkan daya resap air hujan (infiltrasi), menambah cadangan air tanah, sekaligus menghasilkan kompos.',
  },
  {
    id: 40,
    type: 'pg',
    element: TP3,
    topic: 'Menjaga ketersediaan air bersih',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan solusi terpadu mengatasi kekurangan air bersih saat musim kemarau di lingkungan sekolah/rumah.',
    text: 'Sebuah sekolah di daerah perbukitan sering mengalami kekurangan air bersih setiap musim kemarau, padahal saat musim hujan curah hujannya sangat tinggi. Solusi jangka panjang yang paling tepat untuk mengatasi masalah tersebut adalah ...',
    options: [
      { id: 'A', text: 'Membangun bak penampungan air hujan (PAH), sumur resapan, menanam pohon di sekitar sekolah, dan membiasakan hemat air' },
      { id: 'B', text: 'Menutup seluruh halaman sekolah dengan aspal tebal agar tidak ada air yang meresap ke tanah' },
      { id: 'C', text: 'Meliburkan kegiatan belajar mengajar selama enam bulan penuh setiap musim kemarau' },
      { id: 'D', text: 'Menebang seluruh pohon di bukit sekitar sekolah agar sinar matahari langsung mengenai sumur' },
    ],
    correctAnswer: 'A',
    explanation: 'Memanen air hujan (PAH), membuat sumur resapan/biopori, menanam pohon (menjaga resapan), serta menerapkan perilaku hemat air adalah solusi terpadu untuk menyimpan air saat musim hujan sebagai cadangan menghadapi musim kemarau.',
  },

  // ============================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS KATEGORI (PGK KATEGORI)
  // Setiap soal memiliki 3 pernyataan dengan pilihan BENAR / SALAH
  // Bobot 6 poin per soal (2 poin per pernyataan benar) = Total 30 Poin
  // ============================================================================
  {
    id: 41,
    type: 'pgk_kategori',
    element: TP1,
    topic: 'Siklus air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi kebenaran 3 pernyataan mengenai tahapan proses dalam siklus air berdasarkan diagram.',
    image: `<svg viewBox="0 0 430 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="135" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="215" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">TAHAPAN UTAMA SIKLUS AIR DI ALAM</text>
      <g transform="translate(15, 34)">
        <rect width="92" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="46" y="22" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#92400e" text-anchor="middle">EVAPORASI &amp;</text>
        <text x="46" y="34" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#92400e" text-anchor="middle">TRANSPIRASI</text>
        <text x="46" y="54" font-family="sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Air menguap</text>
        <text x="46" y="66" font-family="sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">ke atmosfer</text>
      </g>
      <text x="115" y="78" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">→</text>
      <g transform="translate(123, 34)">
        <rect width="88" height="80" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="44" y="26" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">KONDENSASI</text>
        <text x="44" y="50" font-family="sans-serif" font-size="8.5" fill="#0c4a6e" text-anchor="middle">Uap air dingin</text>
        <text x="44" y="62" font-family="sans-serif" font-size="8.5" fill="#0c4a6e" text-anchor="middle">membentuk awan</text>
      </g>
      <text x="219" y="78" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">→</text>
      <g transform="translate(227, 34)">
        <rect width="88" height="80" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="44" y="26" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1e40af" text-anchor="middle">PRESIPITASI</text>
        <text x="44" y="50" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">Titik air awan</text>
        <text x="44" y="62" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">jatuh jadi hujan</text>
      </g>
      <text x="323" y="78" font-size="14" font-weight="bold" fill="#16a34a" text-anchor="middle">→</text>
      <g transform="translate(331, 34)">
        <rect width="84" height="80" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="42" y="26" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#15803d" text-anchor="middle">INFILTRASI</text>
        <text x="42" y="50" font-family="sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">Air meresap</text>
        <text x="42" y="62" font-family="sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">ke dalam tanah</text>
      </g>
    </svg>`,
    text: 'Perhatikan bagan tahapan utama siklus air di atas! Tentukan status BENAR atau SALAH untuk masing-masing pernyataan mengenai proses siklus air berikut:',
    statements: [
      {
        id: 's1',
        text: 'Kondensasi adalah proses berubahnya uap air di atmosfer yang dingin menjadi titik-titik air pembentuk awan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Transpirasi merupakan proses meresapnya air hujan melalui celah batu dan pori-pori tanah menuju laut.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Presipitasi terjadi ketika titik-titik air atau kristal es di dalam awan sudah terlalu berat lalu jatuh ke permukaan Bumi sebagai hujan.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (Kondensasi = uap air menjadi awan). Pernyataan 2 SALAH (Meresapnya air ke dalam tanah adalah Infiltrasi, sedangkan Transpirasi adalah penguapan dari tumbuhan). Pernyataan 3 BENAR (Presipitasi = jatuhnya hujan ke Bumi).',
  },
  {
    id: 42,
    type: 'pgk_kategori',
    element: TP1,
    topic: 'Menelusuri arah aliran air',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat menilai kebenaran 3 pernyataan terkait arah aliran air di permukaan dan bawah tanah.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <polygon points="16,110 16,28 135,72 280,96 340,100 340,110" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
      <rect x="340" y="96" width="64" height="14" fill="#0284c7"/>
      <path d="M 40 38 Q 140 74 335 98" stroke="#0ea5e9" stroke-width="4" fill="none"/>
      <text x="72" y="25" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#166534" text-anchor="middle">Hulu Gunung</text>
      <text x="200" y="70" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Aliran Sungai Menuju Laut →</text>
      <text x="372" y="88" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0c4a6e" text-anchor="middle">Muara/Laut</text>
    </svg>`,
    text: 'Perhatikan ilustrasi aliran air dari pegunungan hingga laut di atas! Tentukan status BENAR atau SALAH untuk setiap pernyataan berikut ini:',
    statements: [
      {
        id: 's1',
        text: 'Secara alami di permukaan Bumi, air selalu mengalir dari tempat tinggi menuju tempat yang lebih rendah karena gaya gravitasi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Air di bagian hulu sungai memiliki arus yang lebih lambat dan sungai lebih lebar dibandingkan bagian muara di laut.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Selain mengalir di permukaan sungai menuju laut, sebagian air hujan juga meresap ke dalam tanah menjadi cadangan air tanah.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (gravitasi menarik air ke tempat yang lebih rendah). Pernyataan 2 SALAH (bagian hulu berlereng curam sehingga arusnya deras dan sempit, sedangkan muara/hilir lebih lebar dan tenang). Pernyataan 3 BENAR (sebagian air hujan meresap melalui infiltrasi).',
  },
  {
    id: 43,
    type: 'pgk_kategori',
    element: TP2,
    topic: 'Dampak aktivitas manusia terhadap siklus air',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat menganalisis 3 pernyataan tentang faktor dan dampak aktivitas manusia terhadap siklus air.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.5"/>
      <text x="210" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="middle">FAKTOR YANG MEMENGARUHI SIKLUS AIR</text>
      <g transform="translate(20, 36)">
        <rect width="175" height="66" rx="8" fill="#ffffff" stroke="#fb923c" stroke-width="1.5"/>
        <text x="87" y="22" font-family="sans-serif" font-size="10" font-weight="bold" fill="#c2410c" text-anchor="middle">Faktor Alam</text>
        <text x="87" y="40" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Panas matahari, angin,</text>
        <text x="87" y="53" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">suhu &amp; kelembapan udara</text>
      </g>
      <g transform="translate(225, 36)">
        <rect width="175" height="66" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
        <text x="87" y="22" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Aktivitas Manusia</text>
        <text x="87" y="40" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Penebangan hutan, betonisasi,</text>
        <text x="87" y="53" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">pencemaran limbah ke sungai</text>
      </g>
    </svg>`,
    text: 'Berdasarkan bagan faktor alam dan aktivitas manusia yang memengaruhi siklus air di atas, tentukan status BENAR atau SALAH untuk tiga pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Semakin tinggi suhu panas matahari dan hembusan angin, laju penguapan air dari permukaan Bumi akan semakin cepat.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menutup seluruh halaman sekolah dengan aspal dan beton tanpa rongga dapat meningkatkan jumlah air hujan yang meresap ke dalam tanah.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Penebangan hutan secara liar mengurangi kemampuan akar pohon menahan air sehingga meningkatkan risiko banjir dan kekeringan.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (panas dan angin mempercepat evaporasi). Pernyataan 2 SALAH (aspal dan beton kedap air sehingga menghambat infiltrasi). Pernyataan 3 BENAR (hilangnya tutupan hutan mengganggu resapan air tanah).',
  },
  {
    id: 44,
    type: 'pgk_kategori',
    element: TP3,
    topic: 'Standar air bersih',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengidentifikasi kebenaran 3 pernyataan mengenai standar kualitas air bersih (fisik, kimia, biologi).',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
      <text x="210" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">3 STANDAR KUALITAS AIR BERSIH</text>
      <g transform="translate(18, 36)">
        <rect width="118" height="66" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="59" y="22" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">SYARAT FISIK</text>
        <text x="59" y="40" font-family="sans-serif" font-size="8.5" fill="#334155" text-anchor="middle">Jernih, tidak berbau,</text>
        <text x="59" y="53" font-family="sans-serif" font-size="8.5" fill="#334155" text-anchor="middle">tidak berasa &amp; tak berwarna</text>
      </g>
      <g transform="translate(151, 36)">
        <rect width="118" height="66" rx="8" fill="#ffffff" stroke="#6366f1" stroke-width="1.5"/>
        <text x="59" y="22" font-family="sans-serif" font-size="10" font-weight="bold" fill="#4338ca" text-anchor="middle">SYARAT KIMIA</text>
        <text x="59" y="40" font-family="sans-serif" font-size="8.5" fill="#334155" text-anchor="middle">pH netral (6,5 - 8,5),</text>
        <text x="59" y="53" font-family="sans-serif" font-size="8.5" fill="#334155" text-anchor="middle">bebas racun &amp; logam berat</text>
      </g>
      <g transform="translate(284, 36)">
        <rect width="118" height="66" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="59" y="22" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">SYARAT BIOLOGI</text>
        <text x="59" y="40" font-family="sans-serif" font-size="8.5" fill="#334155" text-anchor="middle">Bebas bakteri penyakit</text>
        <text x="59" y="53" font-family="sans-serif" font-size="8.5" fill="#334155" text-anchor="middle">(E. coli, kuman diare)</text>
      </g>
    </svg>`,
    text: 'Cermati gambar tiga standar kualitas air bersih di atas! Tentukan status BENAR atau SALAH untuk setiap pernyataan tentang standar air bersih berikut:',
    statements: [
      {
        id: 's1',
        text: 'Air bersih yang memenuhi syarat fisik harus tampak jernih, tidak berwarna, tidak berbau, dan terasa tawar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Setiap air yang terlihat jernih di gelas pasti sudah bebas dari bakteri penyakit sehingga aman langsung diminum tanpa dimasak.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Air yang tercemar logam berat berbahaya atau memiliki sifat sangat asam tidak memenuhi syarat kimia air bersih.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (ciri fisik air bersih). Pernyataan 2 SALAH (bakteri berukuran mikroskopis tidak terlihat mata sehingga air mentah yang jernih tetap perlu direbus hingga mendidih). Pernyataan 3 BENAR (logam berat dan pH ekstrem melanggar syarat kimia).',
  },
  {
    id: 45,
    type: 'pgk_kategori',
    element: TP3,
    topic: 'Menjaga ketersediaan air bersih',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi efektivitas 3 solusi untuk menjaga ketersediaan air bersih di lingkungan sekitar.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>
      <text x="210" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">AKSI NYATA MENJAGA KETERSEDIAAN AIR BERSIH</text>
      <g transform="translate(20, 36)">
        <rect width="120" height="66" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
        <text x="60" y="24" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">Hemat &amp; Daur Ulang</text>
        <text x="60" y="42" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Tutup keran, pakai</text>
        <text x="60" y="54" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">air cucian utk tanaman</text>
      </g>
      <g transform="translate(150, 36)">
        <rect width="120" height="66" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="60" y="24" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Biopori &amp; Sumur</text>
        <text x="60" y="42" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Perbanyak resapan</text>
        <text x="60" y="54" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">air hujan ke tanah</text>
      </g>
      <g transform="translate(280, 36)">
        <rect width="120" height="66" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <text x="60" y="24" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">Jaga Kebersihan Air</text>
        <text x="60" y="42" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Stop buang sampah</text>
        <text x="60" y="54" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">&amp; limbah ke sungai</text>
      </g>
    </svg>`,
    text: 'Perhatikan tiga pilar aksi menjaga ketersediaan air bersih pada gambar di atas! Tentukan status BENAR atau SALAH untuk solusi menjaga air bersih di lingkungan sekitar berikut:',
    statements: [
      {
        id: 's1',
        text: 'Membuat lubang resapan biopori dan sumur resapan di halaman rumah membantu menyimpan air hujan ke dalam tanah sebagai cadangan musim kemarau.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Memanfaatkan air bekas cucian beras atau sayuran untuk menyiram tanaman hias merupakan cara bijak menghemat air bersih.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Membuang sampah rumah tangga dan sisa deterjen ke selokan sungai dapat membantu mempercepat proses siklus air yang sehat.',
        correctAnswer: false,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (biopori/sumur resapan menambah cadangan air tanah). Pernyataan 2 BENAR (reuse air cucian beras/sayuran untuk menyiram tanaman menghemat air bersih). Pernyataan 3 SALAH (sampah dan deterjen mencemari air dan merusak ekosistem perairan).',
  },
];
