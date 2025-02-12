<script setup></script>

<template>
  <div class="container">
    <form>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
      <label for="date">Date</label>
      <input
        type="datetime-local"
        name="date"
        id="date"
        value="2025-01-01T00:00"
      />
      <button type="submit" id="addBtn" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>
