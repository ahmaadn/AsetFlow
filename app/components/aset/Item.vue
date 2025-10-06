<script setup lang="ts">
const props = defineProps<{
  type: "image" | "video" | "audio" | "document";
  filename: string;
  selected?: boolean;
}>();

const icons = {
  image: "ri:image-line",
  video: "ri:video-line",
  audio: "ri:music-line",
  document: "ri:file-2-line",
};

const hoverableItem = useTemplateRef<HTMLButtonElement>("hoverableItem");
const isHovered = useElementHover(hoverableItem);
</script>

<template>
  <div
    class="relative group/aset aspect-square rounded cursor-pointer"
    :class="{ 'ring-2 ring-offset-2 ring-primary': props.selected }"
    ref="hoverableItem"
  >
    <slot name="preview">
      <div class="flex items-center justify-center h-full bg-base-200">
        <Icon :name="icons[props.type]" class="h-12 w-12" />
      </div>
    </slot>
    <slot name="hoverable" :isHovered="isHovered">
      <div
        class="absolute inset-0 bg-neutral transition-opacity rounded z-1 opacity-0 group-hover/aset:opacity-30"
      ></div>
    </slot>

    <div
      class="absolute inset-0 flex items-end p-2 opacity-0 group-hover/aset:opacity-100 transition-opacity rounded z-10"
    >
      <p class="text-neutral text-xs font-medium truncate">
        {{ props.filename }}
      </p>
    </div>
  </div>
</template>
