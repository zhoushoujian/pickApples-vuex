<template>
  <div id="app">
    <div class="appleBasket">
      <div class="title">苹果篮子(vuex)</div>
      <div class="stats">
        <div class="section">
          <div class="head">当前</div>
          <div class="content">{{currentNumber}}个苹果, {{currentWeight}}克</div>
        </div>
        <div class="section">
          <div class="head">已吃掉</div>
          <div class="content">{{hasEatNumber}}个苹果, {{hasEatWeight}}克</div>
        </div>
      </div>
      <appleItem
        class="appleItem"
        v-for="apple in list"
        v-bind:key="apple.appleIndex"
        :apple="apple"
      ></appleItem>
      <div class="btn-div">
        <button @click="addApples">摘苹果</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapMutations, mapState} from 'vuex'
import AppleItem from "./appleItem";

export default {
  components: {
    AppleItem
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapMutations(['addApples'])
  },
  computed: {
    ...mapState({
      list: state => state.appleService.list,
      currentWeight: state => state.appleService.currentWeight,
      currentNumber: state => state.appleService.currentNumber,
      hasEatNumber: state => state.appleService.hasEatNumber,
      hasEatWeight: state => state.appleService.hasEatWeight,
    })
  },
  created: function (){
    window.self1 = this.$store.state
    console.log("dom mounted")
  }
};
</script>

<style>
#root {
  width: 500px;
  border: 1px solid #ddd;
  margin: 50px auto;
}
.appleBasket {
  width: 470px;
  margin: 20px auto;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.appleBasket > .title {
  height: 66px;
  line-height: 66px;
  text-align: center;
  color: #069;
  font-size: 22px;
  font-weight: bold;
}
.appleBasket > .btn-div {
  text-align: center;
}
.appleBasket > .btn-div > button {
  background-color: #096;
  padding: 10px 45px;
  margin: 10px auto;
}
.appleBasket > .stats {
  width: 100%;
  border-top: 1px dashed #ddd;
  border-bottom: 1px dashed #ddd;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
}
.btn-div > button {
  border: none;
  outline: none;
  margin: 0 3px;
  padding: 8px 15px;
  background-color: #3498db;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
}
.appleItem {
  width: 420px;
  margin: 10px auto;
  padding: 5px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.appleItem > .info > .name {
  padding: 6px 0;
  font-size: 18px;
  color: #069;
  font-weight: 500;
}
.appleItem > .info > .weight {
  font-size: 15px;
  font-weight: 200;
}
.btn-div > button {
  border: none;
  outline: none;
  margin: 0 3px;
  padding: 8px 15px;
  background-color: #3498db;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
}
.section {
  width: 50%;
  padding: 0 40px;
  border-right: 1px solid #f0f0f0;
}
.section > .content {
  font-size: 18px;
  font-weight: 400;
}
.section > .head {
  padding: 6px 0;
  font-size: 16px;
  color: #069;
}
.btn-div > button:hover {
  background-color: #5dade2;
}
.appleBasket > .btn-div > button:hover {
  background-color: #55d98d;
}
button {
  cursor: pointer;
}
</style>
