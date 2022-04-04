<template>
<p>{{person.name}}</p>
<p class="count">{{count}}</p>
<button @click="add">add</button>
<button @click="changeName">change name</button>
</template>

<script>
import { ref, reactive, computed, watchEffect } from 'vue';
import {Count} from '@/utils/index.js'
export default {
  setup() {
    const {count ,add} = Count();

    // 生成计算属性doubleCount
    const doubleCount = computed(() => count.value * 2);
    let color = ref('red');

    const person = reactive({
      name: 'aa',
      age: 18
    })

    // function changeName() {
    //   person.name = "xxx"
    // }

    const watchEffectStop = watchEffect(() => {
      if (count.value % 2) {
        color.value = 'red';
      } else {
        color.value = 'blue';
      }
    });

    return {
      count,
      color,
      person,
      doubleCount,
      add
    }
  },
  methods: {
    changeName() {
      this.person.name = "xxx"
    }
  }
}
</script>

<style scoped>
.count{
    color: v-bind(color)
}
</style>
