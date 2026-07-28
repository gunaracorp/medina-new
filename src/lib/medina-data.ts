// MEDINA EKONOMI — Masyarakat Ekonomi Digital Nasional
// Catatan: "E" = EKONOMI (bukan ekosistem). Holding ekosistem terpisah di medina.web.id.
// Modul ini sumber kebenaran seluruh konten ekonomi smart-city.

import type { LucideIcon } from "lucide-react";
import {
  Receipt, Building2, FileCheck2, Landmark, Wallet, ShieldCheck,
  Cpu, Network, Activity, TrendingUp, Users, Globe2, Zap, Gauge,
  Coins, Database, Lock, Sparkles, Route, Workflow, BellRing,
  LineChart, ServerCog, Boxes, ScanLine, BadgeCheck, KeyRound,
} from "lucide-react";

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
      { label: "Tax Ratio Digital", value: "9,7%", delta: "+1,4 pp" },
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
      "Satu data daerah (SDD) yang menghubungkan seluruh OPD — dari kepegawaian, aset, keuangan, hingga pelayanan publik. Setiap keputusan berbasis data, bukan asumsi.",
    before:
      "Setiap OPD punya sistem terpisah, data ganda, laporan bolak-balik. Renja disusun dari excel yang sudah usang 6 bulan.",
    after:
      "Single Source of Truth lintas OPD. Renja, DPA, dan capaian KPI tersinkron harian. Laporan tuntas dalam hitungan menit.",
    metrics: [
      { label: "OPD Tersambung", value: "514 / 514", delta: "100%" },
      { label: "Dataset Terpadu", value: "12.840", delta: "+2.1rb/bln" },
      { label: "Efisiensi Laporan", value: "94%", delta: "62 jam/bln" },
      { label: "Indeks Integrasi", value: "0,91", delta: "+0,14" },
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
    label: "Rata-rata Waktu Layanan",
    value: "1,8",
    unit: "mnt",
    delta: "-24%",
    trend: "down",
    icon: Gauge,
    sparkline: [60, 55, 52, 48, 45, 42, 40, 38, 35, 32, 30, 28],
  },
];

export interface ActivityItem {
  time: string;
  type: "pajak" | "opd" | "perijinan";
  region: string;
  text: string;
  value?: string;
}

export const ACTIVITY_FEED: ActivityItem[] = [
  { time: "13:42:08", type: "pajak", region: "Jabar", text: "e-NTPD terbit — PBB Kota Bandung", value: "Rp 4,2 jt" },
  { time: "13:42:01", type: "perijinan", region: "Jateng", text: "Izin Usaha Mikro #PB-22841 disetujui paralel", value: "3 OPD" },
  { time: "13:41:55", type: "opd", region: "Sumsel", text: "Sinkronisasi data aset DPMPTSP ↔ BPKAD tuntas", value: "1.284 aset" },
  { time: "13:41:49", type: "pajak", region: "Jatim", text: "Rekonsiliasi MA Pajak Hotel cocok 100%", value: "Rp 18,7 jt" },
  { time: "13:41:42", type: "perijinan", region: "Bali", text: "TTE qualified — Izin Bangunan #IB-90021", value: "≤ 2 jam" },
  { time: "13:41:36", type: "opd", region: "Kaltim", text: "AI alert: anomali capaian Dinas PUPR Q3", value: "2 indikator" },
  { time: "13:41:30", type: "pajak", region: "NTB", text: "Smart billing dikirim ke 312 WP", value: "Rp 88,4 jt" },
  { time: "13:41:22", type: "perijinan", region: "Sumbar", text: "Risk-based auto-approve: 18 izin rendah risiko", value: "instan" },
  { time: "13:41:15", type: "opd", region: "DIY", text: "Dashboard komando: KPI 14 OPD hijau seluruhnya", value: "100%" },
  { time: "13:41:08", type: "pajak", region: "Banten", text: "AI anti-fraud flag: 2 WP perlu verifikasi", value: "Rp 1,2 M" },
];

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
  { id: "ai", name: "Medina-AI", short: "Cognitive Layer", icon: Cpu, ring: "outer", angle: -90 },
  { id: "chain", name: "ChainLedger", short: "Audit Tak Terhapus", icon: Boxes, ring: "outer", angle: -38 },
  { id: "open", name: "Open API", short: "Interoperabilitas", icon: Network, ring: "outer", angle: 13 },
  { id: "insight", name: "InsightBI", short: "Analitik Eksekutif", icon: LineChart, ring: "outer", angle: 64 },
  { id: "ops", name: "Ops Center", short: "Komando 24/7", icon: ServerCog, ring: "outer", angle: 116 },
  { id: "secure", name: "ZeroTrust", short: "Keamanan Siber", icon: ShieldCheck, ring: "outer", angle: 167 },
  { id: "mobile", name: "Medina Go", short: "Super App Warga", icon: Zap, ring: "outer", angle: 219 },
];

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
    title: "Mesin Pajak Digital",
    points: [
      "e-Billing terpadu PBB, Pajak Daerah, BPHTB",
      "e-NTPD otomatis & blockchain daerah",
      "Rekonsiliasi real-time WP ↔ RKUD",
    ],
  },
  {
    phase: "Fase III",
    quarter: "Q1 2025",
    status: "active",
    title: "Satu Pintu Perijinan",
    points: [
      "OSS-Plus terintegrasi 1.482 jenis izin",
      "TTE qualified certificate nasional",
      "Risk-based approval & SLA publik",
    ],
  },
  {
    phase: "Fase IV",
    quarter: "Q3 2025",
    status: "next",
    title: "Lapisan Kognitif",
    points: [
      "Medina-AI: prediksi penerimaan & deteksi fraud",
      "InsightBI untuk seluruh kepala daerah",
      "Ops Center 24/7 dengan auto-remediation",
    ],
  },
  {
    phase: "Fase V",
    quarter: "Q1 2026",
    status: "next",
    title: "Ekonomi Terhubung",
    points: [
      "Medina Go super app untuk warga",
      "Integrasi dengan ekosistem MEDINA (medina.web.id)",
      "Open data ekonomi untuk pelaku usaha",
    ],
  },
];

export interface Program {
  name: string;
  desc: string;
  icon: LucideIcon;
  scale: string;
  impact: string;
}

export const PROGRAMS: Program[] = [
  {
    name: "Pajak Tanpa Antre",
    desc: "Seluruh jenis pajak daerah dapat disetor dari smartphone. e-NTPD terbit otomatis.",
    icon: Receipt,
    scale: "514 Kab/Kota",
    impact: "Rp 87,4 T target 2025",
  },
  {
    name: "Satu OPD Satu Data",
    desc: "Standardisasi data lintas perangkat daerah. Laporan tuntas menit, bukan minggu.",
    icon: Database,
    scale: "514 OPD × 14 domain",
    impact: "12.840 dataset terpadu",
  },
  {
    name: "Izin dalam Sehari",
    desc: "Single submission untuk semua izin. Risk-based auto-approval untuk risiko rendah.",
    icon: FileCheck2,
    scale: "1.482 jenis izin",
    impact: "Rata-rata 3,2 hari kerja",
  },
  {
    name: "RKUD Live",
    desc: "Saldo kas daerah terlihat real-time. Setiap rupiah terlacak dari sumbernya.",
    icon: Landmark,
    scale: "514 rekening kas",
    impact: "Transparansi 100%",
  },
  {
    name: "WargaID",
    desc: "Identitas digital tunggal warga untuk seluruh layanan pemerintah daerah.",
    icon: Users,
    scale: "62,1 jt warga terdaftar",
    impact: "Single sign-on 514 daerah",
  },
  {
    name: "TTE Qualified",
    desc: "Tanda tangan elektronik berqualified-certificate untuk dokumen resmi.",
    icon: KeyRound,
    scale: "1,2 jt pejabat",
    impact: "Paperless 100%",
  },
  {
    name: "Medina-AI",
    desc: "Lapisan kognitif: prediksi penerimaan, deteksi fraud, koordinasi renja.",
    icon: Cpu,
    scale: "14 model AI",
    impact: "Efisiensi 38%",
  },
  {
    name: "ChainLedger",
    desc: "Audit trail tak terhapus untuk setiap transaksi keuangan daerah.",
    icon: Boxes,
    scale: "2,4 m tx/disk",
    impact: "Audit instan",
  },
  {
    name: "Open API Nasional",
    desc: "API publik untuk interoperabilitas pusat–daerah–swasta.",
    icon: Network,
    scale: "312 endpoint",
    impact: "12rb konsumen API",
  },
];

export interface Partner {
  name: string;
  type: string;
}

export const PARTNERS: Partner[] = [
  { name: "Kementerian Keuangan", type: "Pusat" },
  { name: "Kemenkominfo", type: "Pusat" },
  { name: "BSSN", type: "Pusat" },
  { name: "APTIKOM", type: "Asosiasi" },
  { name: "APPSI", type: "Asosiasi" },
  { name: "ADKSI", type: "Asosiasi" },
  { name: "Bank Indonesia", type: "Pusat" },
  { name: "OJK", type: "Pusat" },
  { name: "Telkom Indonesia", type: "Bumn" },
  { name: "Pertamina", type: "Bumn" },
  { name: "Perum Peruri", type: "Bumn" },
  { name: "GSMA", type: "Internasional" },
];

export const NAV_LINKS = [
  { label: "Visi", href: "#visi" },
  { label: "Tiga Pilar", href: "#pilar" },
  { label: "Ekosistem", href: "#ekosistem" },
  { label: "Alur Pajak", href: "#alur-pajak" },
  { label: "Perjalanan Izin", href: "#perjalanan-izin" },
  { label: "Program", href: "#program" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Aktivitas", href: "#aktivitas" },
];

export const FOOTER_LINKS = [
  {
    title: "Pilar Ekonomi",
    links: ["Digitalisasi Pajak", "Digitalisasi OPD", "Digitalisasi Perijinan", "RKUD Live", "WargaID"],
  },
  {
    title: "Platform",
    links: ["Medina-AI", "ChainLedger", "Open API", "InsightBI", "Ops Center", "Medina Go"],
  },
  {
    title: "Tata Kelola",
    links: ["Keamanan Siber", "Audit Trail", "Privasi Data", "Interoperabilitas", "SLA Publik"],
  },
  {
    title: "Kemitraan",
    links: ["Pemerintah Pusat", "Pemerintah Daerah", "Bumn & Bumd", "Asosiasi", "Akademisi", "Holding MEDINA"],
  },
];
