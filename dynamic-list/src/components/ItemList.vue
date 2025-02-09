<script setup>
import Item from "./Item.vue";
defineProps({
  inputArray: {
    type: Array,
    required: true,
  },
});
defineEmits(["deleteEvent"]);
</script>

<template>
  <h2>Items</h2>
  <div class="list">
    <!--    <ul id="items" class="list-group"></ul>-->
    <Item
      v-for="(input, index) in inputArray"
      :key="index"
      :title="input"
      @delete-event="(e) => $emit('deleteEvent', e)"
    />
  </div>
</template>
