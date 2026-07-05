import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'jubah-noah',
    name: 'Jubah Noah Premium (Pria)',
    price: 499000,
    description: 'Jubah pria dengan desain modern minimalis. Bahan adem premium, sangat nyaman digunakan untuk ibadah maupun aktivitas formal.',
    subDescription: 'Kerah tegak kokoh • Kancing emas eksklusif • Saku samping tersembunyi',
    image: 'images/jubah_noah_premium_1783237498720.jpg',
    category: 'Pria'
  },
  {
    id: 'gamis-albbi',
    name: 'Gamis Albbi Premium (Pria)',
    price: 449000,
    description: 'Gamis slim-fit modern dengan cutting yang rapi dan elegan. Sangat maskulin dan memberikan kesan berwibawa.',
    subDescription: 'Bahan katun toyobo silk • Kerah mandarin • Detail manset kancing',
    image: 'images/gamis_albbi_premium_1783237527679.jpg',
    category: 'Pria'
  },
  {
    id: 'abaya-agela',
    name: 'Abaya Agela Premium (Wanita)',
    price: 589000,
    description: 'Abaya premium dengan bordir emas mewah khas timur tengah. Desain anggun, flowy, dan jatuh dengan cantik saat dikenakan.',
    subDescription: 'Bahan jetblack murni • Bordir benang emas asli • Lengan lebar elegan',
    image: 'images/abaya_agela_premium_1783237510426.jpg',
    category: 'Wanita'
  },
  {
    id: 'gamis-yusha',
    name: 'Gamis Yusha Emboss (Pria)',
    price: 479000,
    description: 'Gamis bermotif emboss geometris halus yang mewah. Terbuat dari serat kain premium pilihan yang sangat sejuk di kulit.',
    subDescription: 'Tekstur jacquard emboss • Anti kusut • Kancing mutiara eksklusif',
    image: 'images/gamis_yusha_emboss_1783237549047.jpg',
    category: 'Pria'
  },
  {
    id: 'abaya-dubai',
    name: 'Abaya Dubai Syar\'i (Wanita)',
    price: 649000,
    description: 'Abaya bergaya Dubai dengan detail payet perak handmade pada bagian lengan dan kerah. Memberikan kesan berkelas dan anggun.',
    subDescription: 'Bahan silk premium • Payet jahit tangan • Dilengkapi sabuk serut dalam',
    image: 'images/abaya_dubai_syari_1783237487008.jpg',
    category: 'Wanita'
  },
  {
    id: 'jubah-khidr',
    name: 'Jubah Khidr Motif (Pria)',
    price: 489000,
    description: 'Jubah pria dengan motif etnik modern di bagian dada. Memberikan sentuhan kharismatik klasik khas nusantara.',
    subDescription: 'Bahan semi-wool premium • Motif tenun halus • Saku dada aktif',
    image: 'images/gamis_albbi_premium_1783237527679.jpg', // Reusing Albbi but with Khidr description/styling as elegant backup
    category: 'Pria'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
  rating: number;
  productName: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Siti Rahma',
    city: 'Jakarta Selatan',
    text: 'Bahan abayanya beneran jatuh dan adem banget pas dipake. Bordir emasnya sangat rapi, kelihatan mewah sekali untuk acara formal. Nggak nyesel beli di AMZ Indonesia!',
    rating: 5,
    productName: 'Abaya Agela Premium',
    initials: 'SR'
  },
  {
    id: 't2',
    name: 'Hendy Pratama',
    city: 'Bandung',
    text: 'Gamis Albbi-nya pas banget di badan, cutting slim-fit nya modern dan bikin kelihatan lebih tegap. Pengiriman juga cepat. Sangat recommended untuk pakaian lebaran atau acara resmi.',
    rating: 5,
    productName: 'Gamis Albbi Premium',
    initials: 'HP'
  },
  {
    id: 't3',
    name: 'Aisyah W.',
    city: 'Surabaya',
    text: 'Pertama kali beli Jubah Noah Premium untuk suami, suami langsung suka karena bahannya tebal tapi tetap dingin dan tidak gampang kusut. Jahitannya rapi sekelas butik.',
    rating: 5,
    productName: 'Jubah Noah Premium',
    initials: 'AW'
  },
  {
    id: 't4',
    name: 'Fatimah Az-Zahra',
    city: 'Makassar',
    text: 'Abaya Dubai Syar\'i dari AMAZE ini beneran berkelas. Detail payet di tangannya mewah banget dan bahannya sejuk dipakai seharian. Layanan CS via WA juga ramah sekali.',
    rating: 5,
    productName: 'Abaya Dubai Syar\'i',
    initials: 'FA'
  }
];

export const ADVANTAGES = [
  {
    title: 'Bahan Adem Premium',
    description: 'Menggunakan material silk, jetblack, dan katun toyobo kualitas tertinggi yang lembut, dingin, dan sangat nyaman di kulit.',
    icon: 'Sparkles'
  },
  {
    title: 'Desain Elegan Modern',
    description: 'Perpaduan sempurna antara potongan syar\'i yang anggun dengan sentuhan fashion modern yang berkelas dan minimalis.',
    icon: 'Layers'
  },
  {
    title: 'Nyaman Dipakai Seharian',
    description: 'Serat kain berpori udara baik sehingga tidak gerah, cocok untuk iklim tropis Indonesia baik di dalam maupun luar ruangan.',
    icon: 'Heart'
  },
  {
    title: 'Kualitas Jahitan Terbaik',
    description: 'Dikerjakan oleh penjahit ahli profesional dengan standar tinggi (finishing butik yang rapi, kokoh, dan presisi).',
    icon: 'Scissors'
  }
];
