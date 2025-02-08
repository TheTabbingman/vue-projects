<script setup>
let pressed = false;
function keydown(e) {
  if (pressed) e.preventDefault();
  else pressed = true;
}
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
