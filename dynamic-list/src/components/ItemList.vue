<script setup>
import Item from "./Item.vue";
defineProps({
  inputArray: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["deleteEvent"]);
function handleDelete(e) {
  emit("deleteEvent", e);
}
</script>

<template>
  <h2>Items</h2>
  <div class="list">
    <!--    <ul id="items" class="list-group"></ul>-->
    <ul class="list-group">
      <Item
        v-for="(input, index) in inputArray"
        :key="index"
        :title="input"
        @delete-event="handleDelete"
      />
    </ul>
  </div>
</template>
