<script setup>
import { onMounted, ref } from "vue";
import Timer from "./Timer.vue";

/**
 * @typedef {object} timer
 * @property {string} title - Title of the timer
 * @property {string} date - End date of the timer
 */

const titleInput = ref("");
const dateInput = ref("");
/** @type {import("vue").Ref<timer[], timer[]>} */
const timers = ref([]);

onMounted(() => {
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0);
  const isoStringCurrentDate = currentDate.toISOString().slice(0, 16);
  dateInput.value = isoStringCurrentDate;
  console.log(dateInput.value);
});

/**
 * Push timer into the timers array
 */
function addTimer() {
  console.log(dateInput.value);
  const timer = {
    title: titleInput.value,
    date: dateInput.value,
  };
  timers.value.push(timer);
}

/**
 * Deletes timer at the index specified
 * @param {number} index - Index of timer to delete
 */
function deleteTimer(index) {
  timers.value.splice(index, 1);
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="addTimer">
      <label for="title">Name</label>
      <input type="text" name="title" v-model="titleInput" />
      <label for="date">Date</label>
      <input
        type="datetime-local"
        name="date"
        value="2025-01-01T00:00"
        v-model="dateInput"
      />
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
    <div class="card card-body mt-3" id="timerList">
      <Timer
        v-for="(timer, index) in timers"
        :key="index"
        :title="timer.title"
        :date="timer.date"
        @delete-event="deleteTimer"
      />
    </div>
  </div>
</template>
