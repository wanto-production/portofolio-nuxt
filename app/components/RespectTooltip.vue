<template>
  <!-- Free Palestine Sidebar -->
  <div class="fixed left-0 top-1/2 z-50 transform -translate-y-1/2 group"
    style="writing-mode: vertical-rl; text-orientation: mixed;">
    <!-- Latar belakang bendera Palestina (3 strip horizontal → dirotasi jadi vertikal) -->
    <div class="relative w-4 hover:w-8 h-24 overflow-hidden rounded-r-md shadow-lg duration-300" style="
        background: linear-gradient(
          to bottom,
          #CE1126 33.33%,   /* Merah (atas) */
          #FFFFFF 33.33%,   /* Putih (tengah) */
          #FFFFFF 66.66%,   /* Putih berlanjut */
          #007A3D 66.66%    /* Hijau (bawah) */
        );
      ">
      <!-- Overlay gelap untuk kontras teks -->
      <div class="absolute inset-0 bg-black/20"></div>

      <!-- Teks "Free Palestine" -->
      <div class="absolute inset-0 flex items-center justify-center px-1" style="transform: rotate(180deg);">
        <span class="text-[10px] font-bold text-black tracking-widest uppercase leading-tight text-center"
          style="text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
          Free Palestine
        </span>
      </div>

      <!-- Efek hover: sedikit membesar & bayangan lebih tajam -->
      <div class="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </div>
  </div>
</template>
