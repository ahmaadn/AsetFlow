<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    default: "my-drawer-2",
  },
});

const menu = [
  {
    title: "Recently",
    items: [{ label: "Overview", icon: "ri:search-eye-line", to: "" }],
  },
  {
    title: "Dashboard",
    items: [{ label: "Dashboard", icon: "ri:function-line", to: "" }],
  },
  {
    title: "Files",
    items: [
      { label: "Folder", icon: "ri:folder-line", to: "" },
      { label: "Media Library", icon: "ri:stack-line", to: "" },
      { label: "Dokumen", icon: "ri:file-2-line", to: "" },
      { label: "Photo", icon: "ri:multi-image-line", to: "" },
      { label: "Videos", icon: "ri:video-on-line", to: "" },
      { label: "Music", icon: "ri:music-line", to: "" },
    ],
  },
  {
    title: "Files",
    items: [
      { label: "Setting", icon: "ri:settings-line", to: "" },
      { label: "Logout", icon: "ri:logout-box-line", to: "" },
    ],
  },
];
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input :id="id" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side">
      <label
        :for="id"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <div
        class="min-h-full w-72 bg-base-100 shadow shadow-base-300 border-r border-base-300 text-base-content"
      >
        <div class="p-4 text-center">
          <h1 class="font-bold md:text-3xl text-2xl px-4">AsetFlow</h1>
        </div>

        <template v-for="(section, _) in menu" :key="_">
          <ul class="menu px-4 py-2 w-full">
            <h2 class="menu-title">{{ section.title }}</h2>
            <li v-for="(item, iIndex) in section.items" :key="iIndex">
              <a>
                <Icon :name="item.icon" class="h-5 w-5"></Icon>
                {{ item.label }}
              </a>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>
