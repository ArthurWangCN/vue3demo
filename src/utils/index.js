import { ref } from "vue";
export function Count() {
  let count = ref(0);
  function add() {
    count.value++
  }
  return {count, add}
}
