<template>
  <div>
    <div class="alert alert-danger">
      <h3>Error</h3>
      <p>{{ mensaje }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mensaje: { type: String, required: false, default: '' },
  },
}
</script>
