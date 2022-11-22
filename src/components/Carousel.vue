<template >
  <Transition name="slide-left">
    <swiper
      v-if="repositories.length != 0"
      :slides-per-view="'auto'"
      :space-between="20"
      class="card-box"
    >
      <swiper-slide
        @click.stop="launch(item)"
        v-for="(item, index) in repositories"
        class="card"
        :key="item.name"
        :class="item.node.stargazerCount < threshold && 'threshold'"
      >
        <div v-if="item.node.stargazerCount < threshold" class="threshold-icon">
          <Icon icon="lock" />
        </div>

        <h3>#{{ index + 1 }} {{ item.node.name }}</h3>

        <p>{{ item.node.description }}</p>

        <div class="star-box">
          <Icon icon="star" />
          <h1>{{ parseStars(item.node.stargazerCount) }}</h1>
        </div>
      </swiper-slide>
    </swiper>
  </Transition>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import Icon from "./Icon.vue";

export default {
  name: "Carousel",
  props: {
    repositories: Array,
    threshold: Number,
  },
  components: {
    Swiper,
    SwiperSlide,
    Icon,
  },
  methods: {
    launch(item) {
      const stars = this.threshold ?? 0;
      if (item.node.stargazerCount >= stars) {
        window.open(item.node.url, "_blank");
      }
    },
    parseStars(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.threshold-icon {
  position: absolute;
  top: 140px;
  transform: scale(3);
  left: 125px;
}

.star-box {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 20px;
}

h3,
h1 {
  margin: 0;
  text-transform: capitalize;
  user-select: none;
}

p {
  user-select: none;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
}

.card-box {
  margin: 50px 0;
  display: flex;
}

.card {
  height: 300px;
  width: 300px;
  border-radius: 20px;
  flex: 0 0 auto;
  box-sizing: border-box;
  padding: 20px;
  flex-grow: 1;
  background: #0d1117;
  border: var(--secondary) solid 3px;
  transition: background-color 2s ease-out;
  cursor: pointer;
}

@media (max-width: 600px) {
  .card {
    height: 200px;
    width: 200px;
  }
  p {
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
  .card-box {
    margin: 20px 0;
  }
  .threshold-icon {
    top: 90px;
    transform: scale(2);
    left: 85px;
  }
}

.threshold {
  background: #6362623f;
  border: #6362623f solid 3px;
  color: #80818391;
}

.card:hover {
  background: linear-gradient(
    45deg,
    rgb(28, 4, 136) 0%,
    rgba(182, 17, 187) 100%
  );
}

.threshold:hover {
  background: linear-gradient(
    45deg,
    rgba(28, 4, 136, 0.1) 0%,
    rgba(181, 17, 187, 0.1) 100%
  );
}

.card:first-child,
.threshold:first-child {
  margin-left: 10vw;
}

.card:last-child,
.threshold:last-child {
  margin-right: 10vw;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 500ms ease-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(50vw);
}
</style>