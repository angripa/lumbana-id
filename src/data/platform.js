export const PILLARS = [
  {
    num: "01",
    to: "/kuliner",
    title: "Kuliner",
    text: "Catering khas Batak Toba. Arsik, saksang, napinadar untuk adat, pernikahan, sampai acara kantor.",
    cta: "Lihat menu",
  },
  {
    num: "02",
    to: "/wisata",
    title: "Wisata",
    text: "Danau Toba, Samosir, dan trip pulang kampung untuk keluarga perantau.",
    cta: "Lihat trip",
  },
  {
    num: "03",
    to: "/acara-adat",
    title: "Acara Adat",
    text: "Paket pesta adat lengkap: catering, ulos, gondang, raja parhata, tenda.",
    cta: "Susun paket",
  },
  {
    num: "04",
    to: "/pasar",
    title: "Pasar",
    text: "Ulos tenun, andaliman, kopi Lintong, langsung dari penenun dan petani.",
    cta: "Lihat pasar",
  },
];

export const TRIPS = [
  {
    slug: "toba-klasik",
    title: "Toba Klasik",
    duration: "3H2M",
    route: "Parapat · Tuktuk · Tomok · Huta Siallagan",
    summary: "Paket pertama kali ke Danau Toba. Santai untuk keluarga, lengkap dengan cerita sejarah di tiap huta.",
    days: [
      { title: "Tiba dan menyeberang", text: "Jemput di bandara, makan siang di Parapat, kapal ke Tuktuk. Makan malam arsik di tepi danau." },
      { title: "Huta tua", text: "Makam Raja Sidabutar dan Sigale-gale di Tomok, Batu Kursi Siallagan, sore di Bukit Holbung. Malam belajar manortor." },
      { title: "Pasar dan pulang", text: "Belanja ulos dan andaliman, mampir Balige, antar ke bandara." },
    ],
  },
  {
    slug: "bona-pasogit",
    title: "Mulak tu Bona Pasogit",
    duration: "Custom",
    route: "Kampung halaman marga Anda",
    summary: "Trip pulang kampung untuk keluarga perantau. Kami bantu cari huta marga, tugu, dan kerabat, lalu atur makan bersama.",
    days: [
      { title: "Cerita dulu", text: "Ceritakan marga, nama ompung, dan daerah asal. Tim kami menelusuri huta dan tugu marga Anda." },
      { title: "Rencana perjalanan", text: "Kami susun rute, penginapan, dan transport sesuai jumlah keluarga yang ikut." },
      { title: "Di kampung", text: "Kunjungan ke huta, ziarah tugu, dan makan bersama kerabat. Pemandu kami bantu bahasa dan adat." },
    ],
  },
  {
    slug: "jejak-leluhur",
    title: "Jejak Leluhur",
    duration: "4H3M",
    route: "Balige · Sianjur Mula-mula · Pusuk Buhit · Samosir",
    summary: "Tur budaya ke tempat asal-usul orang Batak. Cocok untuk anak muda perantau yang mau kenal akar.",
    days: [
      { title: "Balige", text: "Tiba di Silangit, Museum Batak di Balige, makan siang khas Toba." },
      { title: "Sianjur Mula-mula", text: "Kampung asal Si Raja Batak, Batu Hobon, pemandangan Pusuk Buhit." },
      { title: "Samosir", text: "Tomok, Huta Siallagan, malam di Tuktuk." },
      { title: "Pulang", text: "Belanja ulos dan oleh-oleh, antar ke bandara." },
    ],
  },
];

export const TRIP_INCLUDES = ["Transport darat dan kapal", "Penginapan", "Makan sesuai jadwal", "Pemandu orang Batak", "Tiket masuk objek"];
export const TRIP_EXCLUDES = ["Tiket pesawat", "Belanja pribadi", "Tips pemandu"];

export const ADAT_EVENTS = [
  { id: "martumpol", name: "Martumpol", desc: "Pertunangan di gereja" },
  { id: "unjuk", name: "Pesta Unjuk", desc: "Pernikahan adat Batak Toba" },
  { id: "marhusip", name: "Marhusip", desc: "Pembicaraan adat keluarga" },
  { id: "saurmatua", name: "Saur Matua", desc: "Adat kematian orang tua" },
  { id: "holi", name: "Mangongkal Holi", desc: "Pemindahan tulang belulang" },
  { id: "jabu", name: "Mamasuki Jabu", desc: "Syukuran rumah baru" },
];

export const GUEST_OPTIONS = [
  { id: "200", label: "Sampai 200" },
  { id: "500", label: "200 sampai 500" },
  { id: "1000", label: "500 sampai 1.000" },
  { id: "2000", label: "Lebih dari 1.000" },
];

export const ADAT_SERVICES = [
  { id: "catering", name: "Catering adat", desc: "Menu adat, tudu-tudu sipanganon, jambar" },
  { id: "ulos", name: "Ulos", desc: "Ulos hela, pansamot, dan untuk semua pihak" },
  { id: "gondang", name: "Gondang & uning-uningan", desc: "Grup pargonsi untuk manortor" },
  { id: "parhata", name: "Raja parhata / MC adat", desc: "Juru bicara pihak keluarga" },
  { id: "tenda", name: "Tenda, kursi, dekor gorga", desc: "Gedung atau halaman rumah" },
  { id: "dok", name: "Foto & video", desc: "Dokumentasi seluruh rangkaian" },
  { id: "undangan", name: "Undangan digital", desc: "Lengkap dengan peta dan RSVP" },
  { id: "transport", name: "Transport keluarga", desc: "Jemput rombongan dari bandara atau kampung" },
];

export const MARKET_CATEGORIES = [
  { title: "Ulos tenun", text: "Ragidup, Sadum, Mangiring, dan ulos untuk keperluan adat. Langsung dari penenun." },
  { title: "Bumbu Batak", text: "Andaliman, asam patikala, dan bumbu arsik siap pakai." },
  { title: "Kopi Tano Batak", text: "Kopi Lintong dan Sidikalang dari petani." },
  { title: "Oleh-oleh Toba", text: "Kacang sihobuk, ombus-ombus, dan kerajinan dari Samosir." },
];

export const STATS = [
  { num: "500+", label: "Acara dilayani" },
  { num: "10+", label: "Tahun pengalaman" },
  { num: "1000+", label: "Keluarga puas" },
  { num: "20+", label: "Varian menu" },
];
