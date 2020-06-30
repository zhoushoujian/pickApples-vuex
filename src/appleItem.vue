<template>
  <div>
    <div class="apple">
      <img :src="applePic" alt="apple" />
    </div>
    <div class="info">
      <div class="name">abc - 222号</div>
      <div class="weight">{{apple.currentWeight}}克</div>
    </div>
    <div class="btn-div">
      <button @click="eatApple(apple)">吃掉</button>
      <button @click="changeAppleWeight(apple)">重量改变</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: ["apple"],
  data() {
    return {
      applePic: require("./assets/apple.png"),
    };
  },
  methods: {
    // 这里应当使用mapMutations里的changeWeight比较好，这里只是为了让这个demo涉及更多的知识点
    changeAppleWeight: function(apple){
      this.$store.commit("changeWeight", apple.appleIndex)  // 用于同步
      // this.$store.dispatch("changeWeight", apple.appleIndex)  用于异步调用并更新
    },
    ...mapMutations([
      'changeWeight', 'eatApple'
    ])
  },
  computed: {

  },
  created: function (){
    console.log("child dom mounted")
  }
};
</script>

