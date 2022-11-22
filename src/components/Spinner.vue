<template>
  <div  class="box-loading">
    <div v-if="loading" class="spinner" />
  </div>
</template>
<script>
export default {
  name: "Spinner",
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
.box-loading {
  width: 30px;
  height: 100%;
  margin: 0 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  border: 3px solid rgba(0, 0, 0, 0);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: spinner 500ms linear infinite;
  border-right: solid 3px var(--secondary);
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>