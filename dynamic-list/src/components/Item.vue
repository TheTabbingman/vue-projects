<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
defineEmits(["deleteEvent"]);
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
