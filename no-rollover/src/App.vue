<script setup>
let pressed = false;
/**
 * Prevents pressing a key before another key is released
 * @param {KeyboardEvent} e - The keyboard event object
 */
function keydown(e) {
  if (pressed) e.preventDefault();
  else pressed = true;
}
/**
 * Resets the pressed flag when a key is released
 * @returns {boolean} - The pressed flag
 */
const keyup = () => (pressed = false);
</script>

<template>
  <div class="container">
    <label for="input">input</label>
    <input
      type="text"
      name="input"
      id="input"
      @keydown="keydown"
      @keyup="keyup"
    />
  </div>
</template>
