<script setup>
import ItemList from "./ItemList.vue";
import { onMounted, ref } from "vue";

const input = ref("");
const inputArray = ref([]);

onMounted(() => {
  inputArray.value = JSON.parse(localStorage.getItem("inputArray"));
});

function addItem() {
  if (input.value === "") return;
  inputArray.value.push(input.value);
  localStorage.setItem("inputArray", JSON.stringify(inputArray.value));
}
function removeItem(index) {
  if (!inputArray.value.length) return;
  inputArray.value.splice(index, 1);
  localStorage.setItem("inputArray", JSON.stringify(inputArray.value));
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
  <ItemList :inputArray="inputArray" @delete-event="(e) => removeItem(e)" />
</template>
