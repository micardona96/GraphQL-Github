<template>
  <main>
    <Searcher
      :loading="loading"
      @search="search"
      @threshold="(value) => (threshold = value)"
    />
    <Carousel :threshold="threshold" :repositories="repositories" />

    <img
      class="astrocat-img"
      :src="require('@/assets/hero-drone.webp')"
      alt="astrocat"
    />

    <footer>
      <a href="https://github.com/micardona96">@micardona96</a>
    </footer>
  </main>
</template>

<script>
import Searcher from "./components/Searcher.vue";
import Carousel from "./components/Carousel.vue";

import { geRepositories } from "./services";

export default {
  name: "App",
  components: {
    Searcher,
    Carousel,
  },
  async created() {
    const value = await prompt("INSERT API KEY GITHUB");
    this.token = value;
  },
  data: () => {
    return {
      token: "",
      topic: "",
      threshold: undefined,
      loading: false,
      repositories: [],
    };
  },
  methods: {
    search(topic) {
      this.loading = true;
      this.repositories = [];
      geRepositories(topic, this.token)
        .then((e) => {
          this.repositories = e.data.data.topic.repositories.edges;
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
a {
  all: unset;
  cursor: pointer;
}

footer {
  position: absolute;
  bottom: 1vw;
  right: 1vw;
}

@keyframes MoveUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.astrocat-img {
  position: fixed;
  right: 15vw;
  top: 5vw;
  height: 10vw;
  max-height: 400px;
  min-height: 150px;
  animation: MoveUpDown 2s ease-in infinite;
}

@media (max-width: 600px) {
  .astrocat-img {
    display: none;
  }
}
</style>
