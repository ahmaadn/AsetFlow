<script setup lang="ts">
import type { Asset } from "~/types";

const assets: Asset[] = [
  {
    name: "hero-banner-v2.png",
    slug: "hero-banner-v2",
    type: "image",
    size: "1.2 MB",
    assetUrl: "https://placehold.co/600x400?text=Hero+Banner",
    publicUrl: "/laporan-bulanan/hero-banner-v2",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "product-hero.jpg",
    slug: "product-hero",
    type: "image",
    size: "850 KB",
    assetUrl: "https://placehold.co/600x400?text=Product",
    publicUrl: "/product/product-hero",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "library-thumb.png",
    slug: "library-thumb",
    type: "image",
    size: "450 KB",
    assetUrl: "https://placehold.co/600x400?text=Library",
    publicUrl: "/media/library-thumb",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "office-photo.jpg",
    slug: "office-photo",
    type: "image",
    size: "2.1 MB",
    assetUrl: "https://placehold.co/600x400?text=Office",
    publicUrl: "/media/office-photo",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "intro-video.mp4",
    slug: "intro-video",
    type: "video",
    size: "12.4 MB",
    assetUrl: "https://placehold.co/600x400",
    thumbnail: "https://placehold.co/600x400?text=Thumb",
    publicUrl: "/media/intro-video",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "presentation.pdf",
    slug: "presentation",
    type: "document",
    size: "320 KB",
    assetUrl: "https://placehold.co/600x400",
    publicUrl: "/media/presentation",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "podcast-ep1.mp3",
    slug: "podcast-ep1",
    type: "audio",
    size: "5.6 MB",
    assetUrl: "https://placehold.co/600x400",
    publicUrl: "/media/podcast-ep1",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "gallery-01.jpg",
    slug: "gallery-01",
    type: "image",
    size: "780 KB",
    assetUrl: "https://placehold.co/600x400?text=Gallery+1",
    publicUrl: "/media/gallery-01",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "gallery-02.jpg",
    slug: "gallery-02",
    type: "image",
    size: "910 KB",
    assetUrl: "https://placehold.co/600x400?text=Gallery+2",
    publicUrl: "/media/gallery-02",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
  {
    name: "product-demo.mp4",
    slug: "product-demo",
    type: "video",
    size: "24.8 MB",
    assetUrl: "https://placehold.co/600x400",
    thumbnail: "https://placehold.co/600x400?text=Demo+Thumb",
    publicUrl: "/media/product-demo",
    claudinaryUrl: "/laporan-bulanan/hero-banner-v2",
  },
];

// selection state: null = hidden
const selectedAsset = ref<Asset | null>(null);

function toggleSelect(asset: Asset) {
  if (!asset) return;
  if (selectedAsset.value && selectedAsset.value.slug === asset.slug) {
    selectedAsset.value = null;
  } else {
    selectedAsset.value = asset;
  }
}
</script>

<template>
  <div class="flex-1 flex relative min-h-screen">
    <!-- Area Konten & Filter -->
    <div class="flex-1 flex flex-col">
      <!-- Header Konten -->
      <div
        class="h-16 flex items-center justify-between px-6 bg-white border-b border-slate-200"
      >
        <div>
          <select class="select w-36">
            <option disabled selected>Type Aset</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div class="flex items-center space-x-4">
          <!-- Tab Navigation -->
          <div role="tablist" class="tabs tabs-box tabs-sm">
            <a role="tab" class="tab">
              <Icon name="ri:layout-grid-line" class="size-5 opacity-50"></Icon>
            </a>
            <a role="tab" class="tab tab-active">
              <Icon name="ri:list-check" class="size-5"></Icon>
            </a>
          </div>
          <!-- Search Input -->
          <label class="input w-72">
            <Icon name="ri:search-line" class="size-5 opacity-50"></Icon>
            <input type="search" class="grow" placeholder="Search" />
          </label>
        </div>
      </div>

      <!-- Konten Utama (Galeri & Filter Folder) -->
      <div class="flex-1 p-2 flex">
        <!-- Galeri Aset -->
        <div class="flex-1 rounded-lg overflow-y-auto">
          <aset-grid class="p-4">
            <aset-item
              v-for="(asset, i) in assets"
              :key="asset.slug"
              :type="asset.type"
              :filename="asset.name"
              @click="toggleSelect(asset)"
              :selected="
                Boolean(selectedAsset && selectedAsset.slug === asset.slug)
              "
            >
              <template
                #preview
                v-if="
                  (asset.type === 'image' && asset.assetUrl) ||
                  (asset.type === 'video' && asset.thumbnail)
                "
              >
                <img
                  :src="
                    asset.type === 'video' ? asset.thumbnail : asset.assetUrl
                  "
                  :alt="asset.name"
                  class="absolute inset-0 w-full h-full object-cover rounded opacity-100 transition-opacity duration-300"
                />
              </template>
            </aset-item>
          </aset-grid>
        </div>
      </div>
    </div>

    <!-- Panel Detail Aset (kanan) -->
    <template v-if="selectedAsset">
      <!-- mobile-only overlay: click to close -->
      <div
        class="fixed inset-0 bg-black/30 z-40"
        @click="selectedAsset = null"
      ></div>

      <aset-panel :asset="selectedAsset" />
    </template>
  </div>
</template>
