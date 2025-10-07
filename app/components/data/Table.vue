<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  columns: { key: string; label: string; sortable?: boolean }[];
  rows: Record<string, any>[];
  rowKey?: string;
}>();

const emit = defineEmits<{
  (e: "row-click", row: Record<string, any>): void;
  (e: "sort-change", key: string | null, dir: "asc" | "desc" | null): void;
}>();

const sortKey = ref<string | null>(null);
const sortDir = ref<"asc" | "desc" | null>(null);

function onHeaderClick(col: { key: string; sortable?: boolean }) {
  // cek apakah kolom dapat diurutkan
  if (!col.sortable) return;

  // jika kolom yang diklik berbeda dari kolom saat ini, atur ke kolom baru dan urutkan naik
  if (sortKey.value !== col.key) {
    sortKey.value = col.key;
    sortDir.value = "asc";
  } else {
    // jika kolom yang sama diklik lagi, ubah arah urutan dari: asc -> desc -> none
    if (sortDir.value === "asc") sortDir.value = "desc";
    else if (sortDir.value === "desc") {
      sortKey.value = null;
      sortDir.value = null;
    } else sortDir.value = "asc";
  }

  // emit perubahan urutan
  emit("sort-change", sortKey.value, sortDir.value);
}

const sortedRows = computed(() => {
  // jika tidak ada kolom yang diurutkan, kembalikan baris asli
  if (!sortKey.value) return props.rows;

  // urutkan baris berdasarkan kolom dan arah yang dipilih
  // jika kolom yang diurutkan adalah string, urutkan secara alfabetis
  const key = sortKey.value;
  const dir = sortDir.value === "asc" ? 1 : -1;
  return [...props.rows].sort((a, b) => {
    const A = a[key];
    const B = b[key];
    if (A == null) return 1;
    if (B == null) return -1;

    // jika kolom yang diurutkan adalah angka, urutkan secara numerik
    if (typeof A === "number" && typeof B === "number") return (A - B) * dir;

    // default: urutkan sebagai string (case insensitive)
    const aS = String(A).toLowerCase();
    const bS = String(B).toLowerCase();
    if (aS < bS) return -1 * dir;
    if (aS > bS) return 1 * dir;
    return 0;
  });
});

function onRowClick(row: Record<string, any>) {
  emit("row-click", row);
}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table table-xs w-full">
      <thead>
        <tr>
          <th
            v-for="col in props.columns"
            :key="col.key"
            @click="onHeaderClick(col)"
            class="cursor-pointer select-none"
          >
            <div class="flex items-center gap-1">
              <span>{{ col.label }}</span>
              <span
                v-if="col.sortable"
                class="text-sm flex items-center"
                :class="{
                  'opacity-40 hover:opacity-60': !sortDir,
                  'opacity-60 hover:opacity-80': sortDir,
                }"
              >
                <span v-if="sortKey === col.key" class="contents">
                  <Icon
                    v-if="sortDir === 'asc'"
                    name="ri:arrow-up-double-line"
                  ></Icon>
                  <Icon
                    v-else-if="sortDir === 'desc'"
                    name="ri:arrow-down-double-line"
                  ></Icon>
                </span>
                <Icon v-else name="ri:arrow-up-down-line"></Icon>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in sortedRows"
          :key="row[props.rowKey || 'id']"
          class="hover:cursor-pointer hover:bg-base-300"
          @click="onRowClick(row)"
        >
          <td v-for="col in props.columns" :key="col.key">
            <slot :name="`cell-${col.key}`" :row="row">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
