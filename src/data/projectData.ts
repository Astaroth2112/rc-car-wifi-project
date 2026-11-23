export interface FeatureItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  spanClass: string;
}

export interface ArchitectureStep {
  id: string;
  stepNumber: string;
  title: string;
  component: string;
  description: string;
  signalLabel: string;
}

export type SpecCategory = 'Semua' | 'Elektronik' | 'Penggerak & Daya' | 'Rangka';

export interface SpecItem {
  id: string;
  category: Exclude<SpecCategory, 'Semua'>;
  label: string;
  value: string;
  detail: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  initials: string;
  // GANTI FOTO ANGGOTA: Isi dengan path foto (misal '/foto-anggota-1.jpg') jika ingin menampilkan foto asli
  photoUrl?: string;
}

/**
 * KONFIGURASI UTAMA PRODUK
 * Ubah nama RC Car, informasi proyek sekolah/kampus, dan tahun di sini.
 */
export const PRODUCT_CONFIG = {
  // GANTI NAMA PRODUK: Ganti dengan nama RC Car kelompok kalian
  brandName: 'AeroVolt RC',
  kicker: 'Proyek Rekayasa IoT · WiFi 2.4 GHz · 2026',
  heroHeadline: 'Kendali Tanpa Batas di Ujung Jari Anda',
  heroSubheadline:
    'RC Car pintar berbasis mikrokontroler ESP32 yang dikendalikan langsung melalui jaringan WiFi via browser smartphone atau laptop — responsif, stabil, dan tanpa perlu instalasi aplikasi tambahan.',
  schoolInfo: 'Tugas Kelompok Mata Pelajaran Informatika & Rekayasa Sistem',
  year: '2026',
};

/**
 * ASET GAMBAR PRODUK
 * GANTI GAMBAR: Ubah path di bawah ini dengan foto asli RC Car kelompok kalian
 * yang diletakkan di folder `public/images/` (misal: '/images/rc-car-asli.jpg').
 */
export const PROJECT_IMAGES = {
  // Gambar utama RC Car pada Hero Section (disarankan rasio 16:9)
  heroCar: '/src/assets/images/hero_wifi_rc_car_1795419451273.jpg',
  // Gambar detail rangkaian elektronik & sasis pada bagian Spesifikasi (rasio 4:3)
  chassisHardware: '/src/assets/images/chassis_hardware_detail_1795419451849.jpg',
};

export const HERO_METRICS = [
  { label: 'Frekuensi Operasi', value: '2.4 GHz WiFi' },
  { label: 'Latensi Perintah', value: '< 25 ms' },
  { label: 'Sistem Penggerak', value: '4WD Gearbox' },
  { label: 'Sumber Daya', value: '7.4 V Li-Ion' },
];

export const FEATURES: FeatureItem[] = [
  {
    number: '01.',
    title: 'Kontrol via WiFi',
    subtitle: 'Jangkauan Luas & Stabil',
    description:
      'Menggunakan protokol WiFi 2.4 GHz langsung dari modul ESP32 dalam mode Access Point maupun Station. Jangkauan kendali jauh lebih luas dan tahan gangguan dibanding koneksi Bluetooth atau inframerah konvensional.',
    highlight: 'Radius stabil hingga 35 meter di area terbuka',
    spanClass: 'lg:col-span-7',
  },
  {
    number: '02.',
    title: 'Low Latency (Respons Cepat)',
    subtitle: 'Eksekusi Real-Time',
    description:
      'Komunikasi WebSocket dua arah memastikan setiap perintah maju, mundur, dan belok dieksekusi seketika tanpa jeda yang mengganggu saat bermanuver cepat.',
    highlight: 'Waktu respons rata-rata di bawah 25 milidetik',
    spanClass: 'lg:col-span-5',
  },
  {
    number: '03.',
    title: 'Antarmuka Web Mudah',
    subtitle: 'Tanpa Instalasi Aplikasi',
    description:
      'Panel kendali disajikan langsung oleh web server internal ESP32. Cukup hubungkan HP ke WiFi mobil dan buka browser — kompatibel di Android, iOS, maupun laptop.',
    highlight: 'Akses instan via alamat IP lokal',
    spanClass: 'lg:col-span-5',
  },
  {
    number: '04.',
    title: 'Desain Rangka Tangguh',
    subtitle: 'Ringan & Baterai Tahan Lama',
    description:
      'Mengusung sasis akrilik laser-cut berkekuatan tinggi dengan tata letak komponen terproteksi, empat motor DC bertorsi tinggi, serta baterai ganda Li-ion 18650 untuk durasi bermain lebih panjang.',
    highlight: 'Durasi operasi hingga 45 menit pemakaian aktif',
    spanClass: 'lg:col-span-7',
  },
];

export const ARCHITECTURE_STEPS: ArchitectureStep[] = [
  {
    id: 'controller',
    stepNumber: '01',
    title: 'Smartphone / Controller',
    component: 'Web Browser UI',
    description:
      'Pengguna menekan tombol arah atau mengatur slider kecepatan pada halaman kontrol berbasis web.',
    signalLabel: 'Input Sentuh & Kecepatan PWM',
  },
  {
    id: 'wifi',
    stepNumber: '02',
    title: 'Koneksi WiFi',
    component: 'ESP32 / ESP8266',
    description:
      'Mikrokontroler menerima paket perintah HTTP / WebSocket melalui jaringan WiFi 2.4 GHz dan menerjemahkannya ke sinyal logika.',
    signalLabel: 'Sinyal Digital GPIO & PWM',
  },
  {
    id: 'driver',
    stepNumber: '03',
    title: 'Motor Driver',
    component: 'Modul H-Bridge L298N',
    description:
      'Mengubah sinyal lemah dari mikrokontroler menjadi arus daya tinggi dari baterai untuk mengatur arah putar serta kecepatan motor.',
    signalLabel: 'Arus Daya Terkendali 7.4V',
  },
  {
    id: 'wheels',
    stepNumber: '04',
    title: 'Pergerakan Roda RC Car',
    component: '4× DC Gearbox Motor',
    description:
      'Keempat roda berputar secara presisi (maju, mundur, atau berbelok diferensial) sesuai perintah pengguna secara seketika.',
    signalLabel: 'Traksi 4WD Responsif',
  },
];

export const SPECIFICATIONS: SpecItem[] = [
  {
    id: 'mcu',
    category: 'Elektronik',
    label: 'Mikrokontroler',
    value: 'ESP32 DevKit V1 (Dual-Core 240 MHz)',
    detail: 'Mendukung NodeMCU ESP8266 sebagai alternatif hemat daya',
  },
  {
    id: 'connectivity',
    category: 'Elektronik',
    label: 'Konektivitas',
    value: 'WiFi 2.4 GHz (IEEE 802.11 b/g/n)',
    detail: 'Komunikasi via WebSocket & HTTP Request',
  },
  {
    id: 'driver',
    category: 'Penggerak & Daya',
    label: 'Penggerak Motor',
    value: 'Motor Driver L298N Dual H-Bridge',
    detail: 'Kendali independen kanal kiri & kanan dengan modulasi PWM',
  },
  {
    id: 'motors',
    category: 'Penggerak & Daya',
    label: 'Aktuator Roda',
    value: '4× DC Gearbox Motor (3V – 6V)',
    detail: 'Rasio gear 1:48 untuk torsi akselerasi optimal',
  },
  {
    id: 'battery',
    category: 'Penggerak & Daya',
    label: 'Sumber Daya',
    value: 'Baterai Li-Ion 18650 7.4V (2S)',
    detail: 'Kapasitas 2600 mAh dengan sakelar utama & regulator 5V',
  },
  {
    id: 'chassis',
    category: 'Rangka',
    label: 'Material Sasis',
    value: 'Akrilik Hitam 3 mm Laser-Cut',
    detail: 'Tata letak dua tingkat dengan pelindung papan sirkuit',
  },
];

/**
 * PROFIL ANGGOTA KELOMPOK
 * GANTI NAMA & PERAN: Sesuaikan daftar anggota kelompok kalian di bawah ini.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member-1',
    name: '[Nama Anggota 1]',
    role: 'Perakitan Hardware & Kelistrikan',
    focus: 'Merancang tata letak sasis, instalasi Motor Driver L298N, dan manajemen daya baterai 18650.',
    initials: 'A1',
  },
  {
    id: 'member-2',
    name: '[Nama Anggota 2]',
    role: 'Pemrograman Mikrokontroler',
    focus: 'Mengembangkan firmware ESP32, konfigurasi WiFi Access Point, dan kontrol sinyal PWM motor.',
    initials: 'A2',
  },
  {
    id: 'member-3',
    name: '[Nama Anggota 3]',
    role: 'Antarmuka Web & Dokumentasi',
    focus: 'Membangun antarmuka kontroler berbasis browser, halaman presentasi, serta pengujian lapangan.',
    initials: 'A3',
  },
];
