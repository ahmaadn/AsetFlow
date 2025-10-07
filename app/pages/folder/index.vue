<script setup lang="ts">
const data = [
  {
    id: 1,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 2,
    name: "Folder 2",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 3,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 4,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
  {
    id: 5,
    name: "Folder 1",
    slug: "folder-1",
    tags: ["work", "project"],
    createdAt: "2024-01-01",
    updatedAt: "2024-01-02",
    totalAssets: 10,
  },
];

const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "slug", label: "Slug", sortable: true },
  { key: "tags", label: "Tags" },
  { key: "createdAt", label: "Created", sortable: true },
  { key: "updatedAt", label: "Updated", sortable: true },
  { key: "totalAssets", label: "Total Assets", sortable: true },
];

const tags = [
  {
    name: "work",
    color: "primary",
  },
  {
    name: "project",
    color: "success",
  },
  {
    name: "personal",
    color: "warning",
  },
];

const router = useRouter();

function onRowClick(row: Record<string, any>) {
  if (row && row.slug) router.push(`/folder/${row.slug}`);
}
</script>

<template>
  <Content>
    <ContentHeader>
      <template #left>
        <button class="btn btn-sm btn-square btn-ghost">
          <Icon
            name="ri:restart-line"
            class="size-5 opacity-80 hover:opacity-100"
          >
          </Icon>
        </button>
      </template>
      <template #right>
        <div class="flex items-center space-x-4">
          <!-- Search Input -->
          <label class="input w-72">
            <Icon name="ri:search-line" class="size-5 opacity-50"></Icon>
            <input type="search" class="grow" placeholder="Search" />
          </label>
        </div>
      </template>
    </ContentHeader>
    <div class="flex-1 overflow-auto p-4">
      <data-table
        :columns="columns"
        :rows="data"
        rowKey="id"
        @row-click="onRowClick"
        class="w-full"
      >
        <template #cell-name="{ row }">
          <div class="flex items-center gap-3">
            <Icon name="ri:folder-fill" class="size-5 text-amber-500"></Icon>
            <div>
              <div class="font-medium">{{ row.name }}</div>
              <div class="text-xs text-neutral/60">{{ row.slug }}</div>
            </div>
          </div>
        </template>
        <template #cell-tags="{ row }">
          <div class="flex gap-1">
            <span
              v-for="tag in row.tags"
              :key="tag"
              class="badge badge-sm"
              :class="{
                'badge-primary':
                  tags.find((t) => t.name === tag)?.color === 'primary',
                'badge-success':
                  tags.find((t) => t.name === tag)?.color === 'success',
                'badge-warning':
                  tags.find((t) => t.name === tag)?.color === 'warning',
              }"
            >
              {{ tag }}
            </span>
          </div>
        </template>
      </data-table>
    </div>
  </Content>
</template>
