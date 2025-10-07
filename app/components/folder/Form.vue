<script setup lang="ts">
const emit = defineEmits<{
  (e: "close"): void;
}>();

function onCancel() {
  emit("close");
}
</script>

<template>
  <form class="flex items-center gap-2 border-b border-base-300 flex-nowrap">
    <input
      type="text"
      placeholder="Type here"
      class="input input-sm w-full input-primary"
      required
    />
    <button class="btn btn-xs btn-square btn-ghost btn-success">
      <Icon name="ri:check-double-fill" class="size-5"> </Icon>
    </button>
    <button class="btn btn-xs btn-ghost btn-error btn-square" @click="onCancel">
      <Icon name="ri:close-fill" class="size-5"></Icon>
    </button>
  </form>
</template>
