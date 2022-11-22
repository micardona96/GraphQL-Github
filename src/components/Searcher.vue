<template >
  <div class="box-center">
    <div class="box">
      <h1>Buscar en GitHub</h1>

      <p>
        Una lista de los 10 repositorios con más estrellas en Github dado un
        topic y un umbral de estrellas.
      </p>

      <div class="box-input">
        <Icon icon="search" />

        <input
          class="spacer-2"
          @keyup.enter="onEnter"
          placeholder="Tema"
          v-model="topic"
        />

        <Spinner :loading="loading" />
        <Icon icon="pipe" />

        <input
          class="spacer"
          type="number"
          placeholder="Umbral"
          v-model="threshold"
        />
      </div>

      <div class="box-trending">
        <div
          @click.stop="byTrending(item)"
          :key="item"
          v-for="item in ['Swiper', 'Vuejs', 'GraphQL', 'Axios', 'Github']"
          class="bubble"
        >
          {{ item }}
        </div>

        <div @click.stop="threshold = 10000" class="bubble gradient">+10K</div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Spinner from "./Spinner.vue";

export default {
  name: "Searcher",
  props: {
    loading: Boolean,
  },
  components: {
    Icon,
    Spinner,
  },
  data() {
    return {
      topic: "",
      threshold: undefined,
    };
  },
  watch: {
    threshold(newValue) {
      this.$emit("threshold", newValue);
    },
  },
  methods: {
    onEnter() {
      this.$emit("search", this.topic);
    },
    byTrending(value) {
      this.topic = value;
      this.onEnter();
    },
  },
};
</script>

<style scoped>
.box-trending {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.bubble {
  border: solid 1px white;
  padding: 5px 20px;
  border-radius: 20px;
  margin: 0 10px;
  user-select: none;
  font-size: 13px;
  user-select: none;
}

.gradient {
  background: linear-gradient(
    45deg,
    rgb(28, 4, 136) 0%,
    rgba(182, 17, 187, 1) 100%
  );
  border: none;
}

.bubble:hover {
  cursor: pointer;
  background: var(--secondary);
}

input {
  all: unset;
  height: 100%;
  font-weight: 400;
  color: black;
  margin-left: 1vw;
  width: 5vw;
  user-select: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.box-input {
  background: white;
  height: 50px;
  width: 100%;
  border-radius: 50px;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 20px 0;
}

.spacer {
  flex-grow: 1;
}
.spacer-2 {
  flex-grow: 3;
}

.box-center {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 50vh;
}

.box {
  width: 30%;
}

@media (max-width: 500px) {
  .box {
    width: 90%;
  }
  .bubble:nth-child(-n + 3) {
    display: none;
  }
}

p {
  color: #b8bdc5;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-clamp: 4;
  font-size: 18px;
  padding: 0 20px;
  user-select: none;
}

h1 {
  margin: 0;
  letter-spacing: 0.03vw;
  text-align: center;
  user-select: none;
}
</style>

