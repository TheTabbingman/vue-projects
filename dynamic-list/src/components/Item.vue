<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
defineEmits({
  deleteEvent: (index) => {
    if (index >= 0) {
      return true;
    } else {
      console.warn("index is negative");
      return false;
    }
  },
});
</script>

<template>
  <li class="list-group-item">
    {{ title }}
    <button
      class="btn btn-danger float-end"
      @click="$emit('deleteEvent', $.vnode.key)"
    >
      X
    </button>
  </li>
</template>
