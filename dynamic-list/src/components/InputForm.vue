<script setup>
import { onMounted, ref } from "vue";
import Item from "./Item.vue";

const input = ref("");
const inputArray = ref([]);

onMounted(() => {
  if (localStorage.getItem("inputArray") === null) inputArray.value = [];
  else inputArray.value = JSON.parse(localStorage.getItem("inputArray"));
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
  <h2>Items</h2>
  <div class="list">
    <ul class="list-group">
      <Item
        v-for="(input, index) in inputArray"
        :key="index"
        :title="input"
        @delete-event="removeItem"
      />
    </ul>
  </div>
</template>
