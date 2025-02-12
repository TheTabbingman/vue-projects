<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

defineEmits(["deleteEvent"]);

/** @type {number | null} */
let timerInterval = null;

onMounted(() => {
  timer();
  timerInterval = setInterval(() => timer(), 1000);
});
onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

/** @type {number} */
let rawTime;

/**
 * Subtracts the current date from the set date
 */
function timer() {
  const setTimeObject = new Date(props.date);
  rawTime = setTimeObject.getTime() - Date.now();
  formatTime();
}

const formattedTime = ref("");
/**
 * Formats the time
 */
function formatTime() {
  const hours = Math.floor(rawTime / 3_600_000);
  rawTime %= 3_600_000;
  const minutes = Math.floor(rawTime / 60_000);
  rawTime %= 60_000;
  const seconds = Math.floor(rawTime / 1000);

  formattedTime.value = `Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
}
</script>

<template>
  <div>
    <button
      class="btn btn-primary float-end"
      @click="$emit('deleteEvent', $.vnode.key)"
    >
      X
    </button>
    <h1 class="titles">{{ title }}</h1>
    <h5 class="timers">{{ formattedTime }}</h5>
    <h6 class="setTime">{{ date }}</h6>
  </div>
</template>
