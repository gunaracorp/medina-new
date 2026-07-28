// MEDINA EKONOMI V2 — Masyarakat Ekonomi Digital Nasional
// E = EKONOMI. Holding ekosistem terpisah di medina.web.id.
// Sumber kebenaran seluruh konten: 6 roles, 8 front modules, 9 back modules,
// 4-tier vertical integration, strategic programs (Duta Digital, Smart Village, SEDAP),
// KPI 2030, closed bureaucracy cycle.

import type { LucideIcon } from "lucide-react";
import {
  Receipt, Building2, FileCheck2, Landmark, Wallet, ShieldCheck,
  Cpu, Network, Activity, TrendingUp, Users, Globe2, Zap, Gauge,
  Coins, Database, Lock, Sparkles, Route, Workflow, BellRing,
  LineChart, ServerCog, Boxes, ScanLine, BadgeCheck, KeyRound,
  Smartphone, Store, HandCoins, MessageSquare, ClipboardList,
  CalendarClock, PiggyBank, ShoppingCart, FileSignature, CreditCard,
  SearchCheck, BarChart3, ShieldAlert, Home, Tractor, Factory,
  Package, Ship, MapPin, Layers, Crown, TreePine, GraduationCap,
  HeartPulse, Wheat, Fish, ShoppingCart as Cart, Factory as FactoryIcon,
  Zap as Energy, Bus, Leaf,
} from "lucide-react";

// ============ 4 FOUNDATIONS ============
export const FOUNDATIONS = [
  {
    title: "Satu Platform",
    desc: "Satu portal birokrasi & keuangan daerah. Tidak ada lagi sistem pisah-pisah.",
    icon: Layers,
    accent: "emerald" as const,
  },
  {
    title: "Satu Data Nasional",
    desc: "Satu kebenaran data lintas sektor & jenjang pemerintahan.",
    icon: Database,
    accent: "cyan" as const,
  },
  {
    title: "Satu Pembayaran Digital",
    desc: "QRIS, VA, e-Wallet, kanal Bank — dalam satu gerbang.",
    icon: CreditCard,
    accent: "amber" as const,
  },
  {
    title: "Satu Dashboard Indonesia",
    desc: "National Economic Command Center real-time untuk seluruh Nusantara.",
    icon: Gauge,
    accent: "emerald" as const,
  },
];

// ============ 6 USER ROLES ============
export interface UserRole {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  services: string[];
  accent: "emerald" | "cyan" | "amber";
}

export const USER_ROLES: UserRole[] = [
  {
    id: "penduduk",
    name: "Penduduk / Masyarakat",
    desc: "Warga yang mengakses layanan publik, pajak, dan dokumen dari satu aplikasi.",
    icon: Users,
    services: ["Layanan Kependudukan", "Pembayaran Pajak", "Pengaduan", "Subsidi & Bansos"],
    accent: "emerald",
  },
  {
    id: "umkm",
    name: "UMKM & Koperasi",
    desc: "Pelaku usaha kecil yang menjual produk dan akses pembiayaan digital.",
    icon: Store,
    services: ["Marketplace UMKM", "Perizinan Usaha", "Pembiayaan", "Ekspor (SEDAP)"],
    accent: "amber",
  },
  {
    id: "bumdes",
    name: "BUMDes",
    desc: "Badan Usaha Milik Desa yang mengelola ekonomi desa secara digital.",
    icon: TreePine,
    services: ["Keuangan Desa", "Produksi Desa", "Pemasaran", "Smart Village"],
    accent: "cyan",
  },
  {
    id: "investor",
    name: "Investor & Perusahaan",
    desc: "Pelaku usaha besar yang berinvestasi dan bertransaksi lintas daerah.",
    icon: TrendingUp,
    services: ["Manajemen Investasi", "Perizinan Investasi", "Pajak Korporat", "Insight Regional"],
    accent: "emerald",
  },
  {
    id: "asn",
    name: "ASN / Birokrat",
    desc: "Aparatur Sipil Negara yang menjalankan & mengawasi siklus birokrasi.",
    icon: BadgeCheck,
    services: ["e-Planning", "e-Budgeting", "e-Procurement", "Duta Digital"],
    accent: "cyan",
  },
  {
    id: "pemdes",
    name: "Pemerintah Desa",
    desc: "Kepala Desa & perangkat desa yang mengelola Smart Village mandiri.",
    icon: Home,
    services: ["Keuangan Desa Digital", "BUMDes Online", "UMKM Desa", "Layanan Desa"],
    accent: "amber",
  },
];

// ============ 8 FRONT-END SERVICE MODULES ============
export interface ServiceModule {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  features: string[];
  accent: "emerald" | "cyan" | "amber";
}

export const SERVICE_MODULES: ServiceModule[] = [
  {
    id: "sso",
    name: "Identitas Digital (SSO)",
    desc: "Satu akun untuk semua layanan. Login sekali, akses seluruh portal.",
    icon: KeyRound,
    features: ["Single Sign-On", "KYC e-KTP", "Multi-device", "Role-based akses"],
    accent: "emerald",
  },
  {
    id: "pay",
    name: "Pembayaran Digital",
    desc: "Satu gerbang pembayaran terpadu untuk seluruh transaksi pemerintah.",
    icon: CreditCard,
    features: ["QRIS", "Virtual Account", "e-Wallet", "Kanal Bank"],
    accent: "amber",
  },
  {
    id: "izin",
    name: "Perizinan Digital",
    desc: "Integrasi OSS Daerah & Provinsi. Satu pintu untuk semua izin.",
    icon: FileCheck2,
    features: ["OSS-Plus", "Risk-based approval", "TTE Qualified", "QR Verifiable"],
    accent: "cyan",
  },
  {
    id: "pajak",
    name: "Pajak & Retribusi Online",
    desc: "Kalkulasi, pembayaran, dan pelaporan pajak daerah dalam satu modul.",
    icon: Receipt,
    features: ["e-Billing", "e-NTPD", "Rekonsiliasi auto", "AI Anti-Fraud"],
    accent: "emerald",
  },
  {
    id: "marketplace",
    name: "Marketplace UMKM",
    desc: "Sarana promosi & transaksi produk UMKM lokal ke pasar nasional & global.",
    icon: Store,
    features: ["Katalog digital", "Payment terpadu", "Logistik", "Ekspor via SEDAP"],
    accent: "amber",
  },
  {
    id: "layanan",
    name: "Layanan Publik Digital",
    desc: "Administrasi kependudukan, pengurusan dokumen, semua layanan publik.",
    icon: ClipboardList,
    features: ["KIA & Akta", "KTP Digital", "BPJS", "Layanan Administratif"],
    accent: "cyan",
  },
  {
    id: "subsidi",
    name: "Subsidi & Bansos Tepat Sasaran",
    desc: "Penyaluran bantuan pemerintah terverifikasi data demografi.",
    icon: HandCoins,
    features: ["Data terverifikasi", "Penyaluran langsung", "Audit trail", "AI targeting"],
    accent: "emerald",
  },
  {
    id: "pengaduan",
    name: "Pengaduan & Aspirasi",
    desc: "Ticketing system pengaduan warga ke Pemerintah Daerah.",
    icon: MessageSquare,
    features: ["Ticket tracking", "SLA publik", "Escalation auto", "Dashboard respon"],
    accent: "amber",
  },
];

// ============ 9 BACK-END BUREAUCRACY MODULES (CLOSED CYCLE) ============
export interface BureaucracyModule {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  phase: "plan" | "budget" | "execute" | "monitor" | "report";
}

export const BUREAUCRACY_CYCLE: { phase: string; label: string; color: string; modules: BureaucracyModule[] }[] = [
  {
    phase: "plan",
    label: "Perencanaan",
    color: "emerald",
    modules: [
      { id: "e-planning", name: "e-Planning", desc: "Perencanaan pembangunan daerah berbasis data.", icon: CalendarClock, phase: "plan" },
    ],
  },
  {
    phase: "budget",
    label: "Penganggaran",
    color: "cyan",
    modules: [
      { id: "e-budgeting", name: "e-Budgeting", desc: "Penyusunan APBD terstruktur & transparan.", icon: PiggyBank, phase: "budget" },
    ],
  },
  {
    phase: "execute",
    label: "Pelaksanaan",
    color: "amber",
    modules: [
      { id: "e-procurement", name: "e-Procurement", desc: "Pengadaan barang & jasa yang akuntabel.", icon: ShoppingCart, phase: "execute" },
      { id: "e-contract", name: "e-Contract", desc: "Manajemen kontrak digital lintas instansi.", icon: FileSignature, phase: "execute" },
      { id: "e-payment", name: "e-Payment", desc: "Eksekusi pembayaran instansi real-time.", icon: CreditCard, phase: "execute" },
    ],
  },
  {
    phase: "monitor",
    label: "Pengawasan",
    color: "emerald",
    modules: [
      { id: "e-audit", name: "e-Audit & e-Asset", desc: "Pengawasan keuangan & manajemen aset daerah.", icon: SearchCheck, phase: "monitor" },
      { id: "e-performance", name: "e-Performance", desc: "Manajemen kinerja pegawai berbasis KPI.", icon: BarChart3, phase: "monitor" },
    ],
  },
  {
    phase: "report",
    label: "Pelaporan",
    color: "cyan",
    modules: [
      { id: "analytics", name: "Analytics & AI", desc: "Analitik data & AI untuk rekomendasi kebijakan.", icon: Cpu, phase: "report" },
      { id: "security", name: "Security", desc: "Keamanan siber Zero Trust & audit trail permanen.", icon: ShieldAlert, phase: "report" },
    ],
  },
];

// ============ 4-TIER VERTICAL INTEGRATION ============
export interface VerticalTier {
  id: string;
  level: string;
  title: string;
  icon: LucideIcon;
  desc: string;
  features: string[];
  accent: "emerald" | "cyan" | "amber";
}

export const VERTICAL_TIERS: VerticalTier[] = [
  {
    id: "desa",
    level: "Level 1",
    title: "Desa / Kelurahan",
    icon: Home,
    desc: "Akar ekosistem. Smart Village mandiri dengan ekonomi desa digital.",
    features: ["Keuangan Desa Digital", "BUMDes Online", "UMKM Desa", "Layanan Publik Desa"],
    accent: "amber",
  },
  {
    id: "kabupaten",
    level: "Level 2",
    title: "Kabupaten / Kota",
    icon: Building2,
    desc: "Konsolidasi keuangan daerah & Smart City dashboard.",
    features: ["Konsolidasi Keuangan", "Smart City Dashboard", "Monitoring PAD", "Layanan Terpadu"],
    accent: "emerald",
  },
  {
    id: "provinsi",
    level: "Level 3",
    title: "Provinsi",
    icon: MapPin,
    desc: "Integrasi & analitik regional, manajemen investasi.",
    features: ["Integrasi Regional", "Manajemen Investasi", "Smart Province", "Analitik Lintas Kab"],
    accent: "cyan",
  },
  {
    id: "pusat",
    level: "Level 4",
    title: "Pemerintah Pusat",
    icon: Crown,
    desc: "National Economic Command Center & satu data ekonomi nasional.",
    features: ["National Command Center", "Satu Data Ekonomi", "Monitoring APBN/APBD", "Kebijakan Berbasis AI"],
    accent: "emerald",
  },
];

// ============ SEKTORAL INTEGRATION (10 sektor) ============
export const SEKTORAL: { name: string; icon: LucideIcon }[] = [
  { name: "Pertanian", icon: Wheat },
  { name: "Perikanan", icon: Fish },
  { name: "Perdagangan", icon: ShoppingCart },
  { name: "Pariwisata", icon: Globe2 },
  { name: "Industri", icon: Factory },
  { name: "Energi", icon: Zap },
  { name: "Kesehatan", icon: HeartPulse },
  { name: "Pendidikan", icon: GraduationCap },
  { name: "Transportasi", icon: Bus },
  { name: "Lingkungan", icon: Leaf },
];

// ============ STRATEGIC PROGRAMS ============
export interface StrategicProgram {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  icon: LucideIcon;
  accent: "emerald" | "cyan" | "amber";
  targets: { label: string; value: string }[];
}

export const STRATEGIC_PROGRAMS: StrategicProgram[] = [
  {
    id: "duta-digital",
    name: "ASN Duta Digital",
    tagline: "ASN turun ke desa sebagai pendamping digital.",
    desc: "ASN diwajibkan menjadi Duta Digital yang turun ke desa untuk mendampingi transformasi digital, meningkatkan produktivitas desa, dan mendorong digitalisasi UMKM.",
    icon: GraduationCap,
    accent: "emerald",
    targets: [
      { label: "Produktivitas Desa", value: "+20%" },
      { label: "UMKM Digitalisasi", value: "1 Juta" },
      { label: "ASN Duta", value: "Wajib" },
    ],
  },
  {
    id: "smart-village",
    name: "Smart Village",
    tagline: "Satu Desa, Satu Portal, Satu Data, Satu Pembayaran, Satu Ekonomi.",
    desc: "Ekosistem digital desa mandiri. Setiap desa memiliki portal tunggal yang menyatukan data, pembayaran, dan ekonomi digital dalam satu sistem.",
    icon: TreePine,
    accent: "cyan",
    targets: [
      { label: "Target Desa", value: "75.000+" },
      { label: "Portal/Desa", value: "1" },
      { label: "Mandiri", value: "100%" },
    ],
  },
  {
    id: "sedap",
    name: "SEDAP — Satu Desa Satu Produk Ekspor",
    tagline: "Dari desa ke pasar global.",
    desc: "Ekosistem produksi desa yang mengalir dari produksi, standardisasi, pergudangan, pemasaran, hingga ekspor langsung. Didukung KDMP (Koperasi Desa Merah Putih).",
    icon: Ship,
    accent: "amber",
    targets: [
      { label: "Produk Ekspor", value: "75.000" },
      { label: "Pasar Global", value: "150+ negara" },
      { label: "KDMP Aktif", value: "75.000" },
    ],
  },
];

// ============ SEDAP 5-STEP FLOW ============
export const SEDAP_STEPS = [
  {
    n: "01",
    title: "Pasal Produksi",
    desc: "Modul pencatatan & manajemen produksi desa. Dari hulu, kuantitas & kualitas terpantau.",
    icon: Tractor,
  },
  {
    n: "02",
    title: "Standardisasi Produk",
    desc: "Branding & packaging standar ekspor. Setiap produk siap bersaing internasional.",
    icon: Package,
  },
  {
    n: "03",
    title: "Pergudangan & Pemasaran",
    desc: "Gudang terpadu + kanal pemasaran digital. Distribusi efisien, jangkauan luas.",
    icon: Warehouse,
  },
  {
    n: "04",
    title: "Akses Pasar Global",
    desc: "Koneksi ke marketplace internasional & buyer. Pintu ekspor terbuka lebar.",
    icon: Globe2,
  },
  {
    n: "05",
    title: "Ekspor Langsung",
    desc: "Ekspor langsung dari desa via KDMP. Dokumen & logistik tertangani sistem.",
    icon: Ship,
  },
];

// Re-export Warehouse icon since lucide may not have it
import { Warehouse } from "lucide-react";

// ============ KPI 2030 ============
export const KPI_2030 = {
  reach: [
    { label: "Desa Digital Terhubung", value: 75000, suffix: "+", icon: Home, accent: "amber" as const },
    { label: "Kabupaten/Kota Terdigitalisasi", value: 514, suffix: "", icon: Building2, accent: "emerald" as const },
    { label: "Provinsi Terintegrasi", value: 38, suffix: "", icon: MapPin, accent: "cyan" as const },
    { label: "Dashboard Nasional Real-Time", value: 1, suffix: "", icon: Gauge, accent: "emerald" as const },
  ],
  impact: [
    { label: "Efisiensi Anggaran Birokrasi", value: -30, suffix: "%", desc: "Biaya operasional turun", trend: "down", icon: PiggyBank },
    { label: "Kenaikan Pendapatan Asli Daerah (PAD)", value: 500, suffix: "%", desc: "Potensi kenaikan PAD", trend: "up", icon: TrendingUp },
    { label: "Produktivitas Desa (Duta Digital)", value: 20, suffix: "%", desc: "Peningkatan produktivitas", trend: "up", icon: GraduationCap },
    { label: "UMKM Digitalisasi", value: 1, suffix: " Juta", desc: "Target nasional", trend: "up", icon: Store },
  ],
  social: [
    "Desa Mandiri",
    "Ekonomi Tumbuh",
    "Transparansi & Akuntabilitas",
    "Indonesia Maju Adil Sejahtera",
  ],
};

// ============ 3 PILLARS (reframed) ============
export type PillarId = "pajak" | "opd" | "perijinan";

export interface Pillar {
  id: PillarId;
  code: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  accent: "emerald" | "amber" | "cyan";
  description: string;
  before: string;
  after: string;
  metrics: { label: string; value: string; delta?: string }[];
  features: { title: string; desc: string; icon: LucideIcon }[];
}

export const PILLARS: Pillar[] = [
  {
    id: "pajak",
    code: "M-01",
    name: "Digitalisasi Pajak",
    tagline: "Penerimaan daerah yang mengalir, transparan, tanpa celah.",
    icon: Receipt,
    accent: "emerald",
    description:
      "Mesin penerimaan daerah terpadu — dari penetapan, penyetoran, hingga rekonsiliasi. Setiap rupiah terlacak dari WP hingga rekening kas daerah dalam waktu nyata.",
    before:
      "Wajib pajak antre di loket, setor via teller, lalu menunggu NTPD dicetak manual. Rekonsiliasi manual memakan 3–7 hari kerja.",
    after:
      "Wp bayar dari HP, e-NTPD terbit otomatis, saldo masuk ke RKUD dan ter-rekonsiliasi real-time. Persetujuan validasi < 90 detik.",
    metrics: [
      { label: "Target Penerimaan 2025", value: "Rp 87,4 T", delta: "+18,2% YoY" },
      { label: "Realisasi YTD", value: "Rp 61,9 T", delta: "70,8%" },
      { label: "Wajib Pajak Aktif", value: "4,82 jt", delta: "+312 rb" },
      { label: "Potensi PAD", value: "+500%", delta: "KPI 2030" },
    ],
    features: [
      { title: "e-Billing Terpadu", desc: "ID billing tunggal untuk PBB, Pajak Daerah, & BPHTB.", icon: Wallet },
      { title: "e-NTPD Otomatis", desc: "Bukti setor terbit < 60 detik, terkunci ke blockchain daerah.", icon: ShieldCheck },
      { title: "Rekonsiliasi Real-time", desc: "Match otomatis WP ↔ RKUD, tanpa rekonsiliasi manual.", icon: Workflow },
      { title: "AI Anti-Fraud", desc: "Deteksi pola penghindaran & kebocoran dengan anomaly detection.", icon: Cpu },
      { title: "Smart Billing", desc: "Penagihan adaptif berbasis siklus ekonomi WP.", icon: BellRing },
      { title: "Dashboard RKUD Live", desc: "Saldo kas daerah terlihat per detik oleh pengawas.", icon: Gauge },
    ],
  },
  {
    id: "opd",
    code: "M-02",
    name: "Digitalisasi OPD",
    tagline: "Perangkat daerah yang berbicara satu data, satu keputusan.",
    icon: Building2,
    accent: "cyan",
    description:
      "Satu Data Daerah (SDD) yang menghubungkan seluruh OPD — dari kepegawaian, aset, keuangan, hingga pelayanan publik. Setiap keputusan berbasis data, bukan asumsi.",
    before:
      "Setiap OPD punya sistem terpisah, data ganda, laporan bolak-balik. Renja disusun dari excel yang sudah usang 6 bulan.",
    after:
      "Single Source of Truth lintas OPD. Renja, DPA, dan capaian KPI tersinkron harian. Laporan tuntas dalam hitungan menit.",
    metrics: [
      { label: "OPD Tersambung", value: "514 / 514", delta: "100%" },
      { label: "Dataset Terpadu", value: "12.840", delta: "+2.1rb/bln" },
      { label: "Efisiensi Laporan", value: "94%", delta: "62 jam/bln" },
      { label: "Efisiensi Anggaran", value: "-30%", delta: "KPI 2030" },
    ],
    features: [
      { title: "Satu Data Daerah", desc: "Master data warga, aset, & keuangan lintas OPD.", icon: Database },
      { title: "Interoperabilitas API", desc: "Standard API gateway antar OPD & pusat.", icon: Network },
      { title: "Dashboard Komando", desc: "KPI seluruh OPD dalam satu layar untuk kepala daerah.", icon: Activity },
      { title: "AI Koordinasi Renja", desc: "Penyusunan rencana kerja adaptif berbasis capaian.", icon: Cpu },
      { title: "Audit Trail Tak Terhapus", desc: "Setiap aksi data tercatat permanen.", icon: Lock },
      { title: "Sirkuit Keuangan DAU", desc: "Tunas dana transfer terlacak hingga realisasi.", icon: Landmark },
    ],
  },
  {
    id: "perijinan",
    code: "M-03",
    name: "Digitalisasi Birokrasi Perijinan",
    tagline: "Izin lahir di HP, bukan di meja. Waktu jadi jam, bukan minggu.",
    icon: FileCheck2,
    accent: "amber",
    description:
      "OSS-Plus terpadu yang menyatukan 1.482 jenis izin daerah dalam satu pintu. Persetujuan paralel lintas OPD, tanda tangan elektronik berqualified-certificate, dan SLA yang diawasi publik.",
    before:
      "Pemohon keliling 6 OPD, fotokopi 24 lembar, menunggu 42 hari kerja, dan tidak tahu status izinnya di mana.",
    after:
      "Satu form, satu submission, 6 OPD bekerja paralel. Izin terbit rata-rata 3,2 hari kerja dengan pelacakan live.",
    metrics: [
      { label: "Jenis Izin Terintegrasi", value: "1.482", delta: "1 pintu" },
      { label: "Rata-rata Waktu Terbit", value: "3,2 hari", delta: "-92%" },
      { label: "Izin Diterbitkan YTD", value: "8,4 jt", delta: "+2,1 jt" },
      { label: "Kepuasan Pemohon", value: "4,8 / 5", delta: "+0,6" },
    ],
    features: [
      { title: "Single Submission", desc: "Satu form untuk seluruh izin yang relevan.", icon: FileCheck2 },
      { title: "Paralel Approval", desc: "6 OPD memproses bersamaan, bukan berurutan.", icon: Workflow },
      { title: "TTE Qualified", desc: "Tanda tangan elektronik sertifikat terpercaya.", icon: KeyRound },
      { title: "SLA Publik", desc: "Jam pasir tiap izin transparan ke pemohon.", icon: Gauge },
      { title: "Risk-Based Approvals", desc: "Izin rendah risiko auto-approve, fokus pada risiko tinggi.", icon: ShieldCheck },
      { title: "QR Verifiable", desc: "Setiap izin punya QR yang dapat diverifikasi publik.", icon: ScanLine },
    ],
  },
];

// ============ LIVE METRICS ============
export interface LiveMetric {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  trend: "up" | "down";
  icon: LucideIcon;
  sparkline: number[];
}

export const LIVE_METRICS: LiveMetric[] = [
  {
    label: "Penerimaan Pajak Hari Ini",
    value: "Rp 247,8",
    unit: "M",
    delta: "+12,4%",
    trend: "up",
    icon: Coins,
    sparkline: [12, 18, 14, 22, 19, 28, 24, 31, 27, 35, 33, 41],
  },
  {
    label: "Transaksi Izin Selesai",
    value: "18.420",
    delta: "+8,1%",
    trend: "up",
    icon: FileCheck2,
    sparkline: [40, 38, 44, 42, 50, 48, 55, 53, 61, 58, 66, 70],
  },
  {
    label: "API Call Lintas OPD",
    value: "9,2",
    unit: "jt/det",
    delta: "+3,7%",
    trend: "up",
    icon: Network,
    sparkline: [30, 32, 31, 34, 36, 35, 38, 40, 39, 42, 44, 46],
  },
  {
    label: "Desa Aktif Smart Village",
    value: "42.180",
    delta: "+1.240",
    trend: "up",
    icon: Home,
    sparkline: [20, 24, 28, 30, 35, 38, 42, 46, 50, 54, 58, 62],
  },
];

// ============ ACTIVITY FEED ============
export interface ActivityItem {
  time: string;
  type: "pajak" | "opd" | "perijinan" | "desa" | "umkm" | "subsidi";
  region: string;
  text: string;
  value?: string;
}

export const ACTIVITY_FEED: ActivityItem[] = [
  { time: "13:42:08", type: "pajak", region: "Jabar", text: "e-NTPD terbit — PBB Kota Bandung", value: "Rp 4,2 jt" },
  { time: "13:42:01", type: "perijinan", region: "Jateng", text: "Izin Usaha Mikto #PB-22841 disetujui paralel", value: "3 OPD" },
  { time: "13:41:55", type: "desa", region: "Sumsel", text: "Smart Village: Desa Talang Ubi aktifkan portal", value: "1 desa" },
  { time: "13:41:49", type: "umkm", region: "Jatim", text: "Produk SEDAP dari Desa Kertosono ekspor Jepang", value: "120 unit" },
  { time: "13:41:42", type: "subsidi", region: "Bali", text: "Bansos BLT-DD tersalurkan ke 312 KK Desa Tampaksiring", value: "Rp 156 jt" },
  { time: "13:41:36", type: "opd", region: "Kaltim", text: "AI alert: anomali capaian Dinas PUPR Q3", value: "2 indikator" },
  { time: "13:41:30", type: "pajak", region: "NTB", text: "Smart billing dikirim ke 312 WP", value: "Rp 88,4 jt" },
  { time: "13:41:22", type: "perijinan", region: "Sumbar", text: "Risk-based auto-approve: 18 izin rendah risiko", value: "instan" },
  { time: "13:41:15", type: "desa", region: "DIY", text: "KDMP Bantul ekspor 240 kg kopi arabika ke Australia", value: "SEDAP" },
  { time: "13:41:08", type: "pajak", region: "Banten", text: "AI anti-fraud flag: 2 WP perlu verifikasi", value: "Rp 1,2 M" },
];

// ============ ECOSYSTEM NODES (expanded) ============
export interface EcosystemNode {
  id: string;
  name: string;
  short: string;
  icon: LucideIcon;
  ring: "core" | "inner" | "outer";
  angle: number;
}

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  { id: "core", name: "MEDINA Core", short: "Mesin Ekonomi", icon: Sparkles, ring: "core", angle: 0 },
  { id: "pajak", name: "e-Pajak", short: "Penerimaan", icon: Receipt, ring: "inner", angle: -90 },
  { id: "opd", name: "Satu Data", short: "Integrasi OPD", icon: Building2, ring: "inner", angle: -30 },
  { id: "perijinan", name: "OSS-Plus", short: "Perijinan", icon: FileCheck2, ring: "inner", angle: 30 },
  { id: "rkud", name: "RKUD Live", short: "Kas Daerah", icon: Landmark, ring: "inner", angle: 90 },
  { id: "wp", name: "WargaID", short: "Identitas Digital", icon: Users, ring: "inner", angle: 150 },
  { id: "tte", name: "TTE", short: "Tanda Tangan", icon: KeyRound, ring: "inner", angle: 210 },
  { id: "pay", name: "Pay Gateway", short: "Pembayaran", icon: CreditCard, ring: "outer", angle: -90 },
  { id: "market", name: "Marketplace", short: "UMKM", icon: Store, ring: "outer", angle: -39 },
  { id: "sedap", name: "SEDAP", short: "Ekspor Desa", icon: Ship, ring: "outer", angle: 13 },
  { id: "smartvillage", name: "Smart Village", short: "Ekosistem Desa", icon: TreePine, ring: "outer", angle: 64 },
  { id: "duta", name: "Duta Digital", short: "ASN Turun Desa", icon: GraduationCap, ring: "outer", angle: 116 },
  { id: "subsidi", name: "Subsidi AI", short: "Bansos Tepat Sasar", icon: HandCoins, ring: "outer", angle: 167 },
  { id: "pengaduan", name: "Pengaduan", short: "Ticketing", icon: MessageSquare, ring: "outer", angle: 219 },
];

export const ECOSYSTEM_DESCRIPTIONS: Record<string, string> = {
  core: "Otak ekosistem. Mediator seluruh transaksi antar modul. Menjamin konsistensi data, audit trail, dan kebijakan akses lintas modul.",
  pajak: "Mesin penerimaan daerah. Mengelola seluruh siklus: penetapan, penagihan, penyetoran, hingga rekonsiliasi otomatis ke RKUD.",
  opd: "Satu Data Daerah. Master data tunggal untuk warga, aset, keuangan, dan layanan lintas 514 OPD nasional.",
  perijinan: "OSS-Plus. Satu pintu untuk 1.482 jenis izin. Persetujuan paralel lintas OPD dengan SLA publik.",
  rkud: "Rekening Kas Umum Daerah live. Saldo, mutasi, dan posisi kas terlihat per detik oleh pengawas.",
  wp: "WargaID. Identitas digital tunggal. Satu login untuk seluruh layanan pemerintah di 514 daerah.",
  tte: "Tanda Tangan Elektronik berqualified-certificate. Sah secara hukum, tanpa paper, tanpa stempel basah.",
  pay: "Satu gerbang pembayaran. QRIS, Virtual Account, e-Wallet, kanal Bank — dalam satu integrasi.",
  market: "Marketplace UMKM nasional. Promosi & transaksi produk lokal ke pasar nasional & global.",
  sedap: "Satu Desa Satu Produk Ekspor. Dari produksi desa langsung ke pasar internasional via KDMP.",
  smartvillage: "Smart Village. Satu desa satu portal satu data satu pembayaran satu ekonomi digital.",
  duta: "ASN Duta Digital. ASN turun ke desa sebagai pendamping transformasi digital & digitalisasi UMKM.",
  subsidi: "Subsidi & Bansos tepat sasaran. AI targeting berbasis data demografi terverifikasi.",
  pengaduan: "Pengaduan & aspirasi warga. Ticketing system dengan SLA publik & escalation otomatis.",
};

export const ECOSYSTEM_STATS: Record<string, { label: string; value: string }[]> = {
  core: [
    { label: "Throughput", value: "9,2 M/s" },
    { label: "Latency p99", value: "38 ms" },
    { label: "Uptime", value: "99,98%" },
    { label: "Modul Tersambung", value: "14" },
  ],
  pajak: [{ label: "Penerimaan YTD", value: "Rp 61,9 T" }, { label: "WP Aktif", value: "4,82 jt" }],
  opd: [{ label: "OPD", value: "514" }, { label: "Dataset", value: "12.840" }],
  perijinan: [{ label: "Jenis Izin", value: "1.482" }, { label: "Rata-rata", value: "3,2 hr" }],
  rkud: [{ label: "Rekening", value: "514" }, { label: "Saldo Live", value: "Rp 124 T" }],
  wp: [{ label: "Warga", value: "62,1 jt" }, { label: "SSO Daerah", value: "514" }],
  tte: [{ label: "Pejabat", value: "1,2 jt" }, { label: "Dokumen/hari", value: "8,4 jt" }],
  pay: [{ label: "Kanal", value: "QRIS/VA/Wallet" }, { label: "Tx/hari", value: "42 jt" }],
  market: [{ label: "UMKM", value: "1,2 jt" }, { label: "GMV/bln", value: "Rp 3,4 T" }],
  sedap: [{ label: "Produk Ekspor", value: "75.000" }, { label: "Pasar", value: "150+ negara" }],
  smartvillage: [{ label: "Desa Aktif", value: "42.180" }, { label: "Target 2030", value: "75.000+" }],
  duta: [{ label: "ASN Duta", value: "wajib" }, { label: "UMKM Disasar", value: "1 juta" }],
  subsidi: [{ label: "Penerima", value: "18,4 jt KK" }, { label: "Akurasi", value: "98,2%" }],
  pengaduan: [{ label: "Tiket/hari", value: "84 rb" }, { label: "SLA", value: "≤ 3 hari" }],
};

// ============ ROADMAP ============
export interface RoadmapPhase {
  phase: string;
  quarter: string;
  status: "done" | "active" | "next";
  title: string;
  points: string[];
}

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: "Fase I",
    quarter: "Q1 2024",
    status: "done",
    title: "Fondasi & Satu Data",
    points: [
      "Pembentukan Master Data Warga (WargaID)",
      "Standard API Gateway antar OPD",
      "Audit & konsolidasi 514 sistem OPD",
    ],
  },
  {
    phase: "Fase II",
    quarter: "Q3 2024",
    status: "done",
    title: "Mesin Pajak & Pembayaran",
    points: [
      "e-Billing terpadu PBB, Pajak Daerah, BPHTB",
      "Pay Gateway terintegrasi QRIS/VA/Wallet",
      "Rekonsiliasi real-time WP ↔ RKUD",
    ],
  },
  {
    phase: "Fase III",
    quarter: "Q1 2025",
    status: "active",
    title: "Satu Pintu Perijinan & Smart Village",
    points: [
      "OSS-Plus terintegrasi 1.482 jenis izin",
      "Smart Village pilot di 1.000 desa",
      "ASN Duta Digital diluncurkan",
    ],
  },
  {
    phase: "Fase IV",
    quarter: "Q3 2025",
    status: "next",
    title: "SEDAP & Ekonomi Desa",
    points: [
      "Program SEDAP + KDMP aktif di 75.000 desa",
      "Marketplace UMKM nasional live",
      "Subsidi & Bansos AI targeting",
    ],
  },
  {
    phase: "Fase V",
    quarter: "Q1 2026",
    status: "next",
    title: "National Command Center",
    points: [
      "National Economic Command Center pusat",
      "Integrasi 38 provinsi & 514 kab/kota",
      "Kebijakan berbasis AI nasional",
    ],
  },
  {
    phase: "Fase VI",
    quarter: "2030",
    status: "next",
    title: "Indonesia Maju Adil Sejahtera",
    points: [
      "75.000+ Desa Digital Terhubung",
      "PAD naik 500%, birokrasi turun 30%",
      "1 juta UMKM terdigitalisasi",
    ],
  },
];

// ============ NAV + FOOTER ============
export const NAV_LINKS = [
  { label: "Visi", href: "#visi" },
  { label: "Pengguna", href: "#pengguna" },
  { label: "Layanan", href: "#layanan" },
  { label: "Birokrasi", href: "#birokrasi" },
  { label: "Jenjang", href: "#jenjang" },
  { label: "Strategis", href: "#strategis" },
  { label: "Ekosistem", href: "#ekosistem" },
  { label: "KPI 2030", href: "#kpi" },
];

export const FOOTER_LINKS = [
  {
    title: "Modul Layanan",
    links: ["Identitas Digital (SSO)", "Pembayaran Digital", "Perizinan OSS-Plus", "Pajak & Retribusi", "Marketplace UMKM", "Subsidi & Bansos"],
  },
  {
    title: "Birokrasi Internal",
    links: ["e-Planning", "e-Budgeting", "e-Procurement", "e-Contract", "e-Payment", "e-Audit & e-Asset"],
  },
  {
    title: "Program Strategis",
    links: ["ASN Duta Digital", "Smart Village", "SEDAP Ekspor", "KDMP", "Marketplace UMKM", "National Command Center"],
  },
  {
    title: "Jenjang & Kemitraan",
    links: ["Desa/Kelurahan", "Kabupaten/Kota", "Provinsi", "Pemerintah Pusat", "Asosiasi", "Holding MEDINA"],
  },
];

export const PARTNERS = [
  { name: "Kementerian Keuangan", type: "Pusat" },
  { name: "Kemenkominfo", type: "Pusat" },
  { name: "BSSN", type: "Pusat" },
  { name: "Kemendes PDTT", type: "Pusat" },
  { name: "APSI", type: "Asosiasi" },
  { name: "ADKSI", type: "Asosiasi" },
  { name: "APEKSI", type: "Asosiasi" },
  { name: "Bank Indonesia", type: "Pusat" },
  { name: "OJK", type: "Pusat" },
  { name: "Telkom Indonesia", type: "Bumn" },
  { name: "Perum Peruri", type: "Bumn" },
  { name: "KDMP", type: "Koperasi" },
];
