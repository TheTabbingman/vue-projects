<script setup>
import { onMounted, ref } from "vue";
import Item from "./Item.vue";
/**
 * @template T
 * @typedef {import("vue").Ref<T>} Ref
 */

const input = ref("");
const itemArray = ref([""]);

onMounted(() => {
  const localStorageOutput = localStorage.getItem("itemArray");
  if (localStorageOutput) itemArray.value = JSON.parse(localStorageOutput);
  else itemArray.value = [];
});

/**
 * Add item from input into the itemArray
 */
function addItem() {
  if (input.value === "") return;
  itemArray.value.push(input.value);
  localStorage.setItem("itemArray", JSON.stringify(itemArray.value));
}

/**
 * Remove item from the item array which also removes it from the dom
 * @param {number} index - Index of the item to remove from the array
 */
function removeItem(index) {
  if (!itemArray.value.length) return;
  itemArray.value.splice(index, 1);
  localStorage.setItem("itemArray", JSON.stringify(itemArray.value));
}
</script>

<template>
  <form class="form-inline mb-2" @submit.prevent="addItem">
    <h2>Add Items</h2>
    <input
      type="text"
      name="inputItem"
      class="form-control"
      v-model.trim="input"
    />
    <button type="submit" class="btn btn-primary mt-2">Submit</button>
  </form>
  <h2>Items</h2>
  <div class="list">
    <ul class="list-group">
      <Item
        v-for="(input, index) in itemArray"
        :key="index"
        :title="input"
        @delete-event="removeItem"
      />
    </ul>
  </div>
</template>
