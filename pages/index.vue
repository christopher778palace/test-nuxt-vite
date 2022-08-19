<template>
  <div class="container mx-auto pt-2">
    <div class="grid gap-4">
      <mini-counter />
      <button
        class="button"
        @click="increment"
      >
        Incrementar counter
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import Todos from '~/store/todos'
import MiniCounter from '~/components/MiniCounter.vue'

@Component({
  name: 'Index',
  components: {
    MiniCounter
  }
})
export default class Index extends Vue {
  todosModule: Todos = getModule(Todos, this.$store)

  increment () {
    this.todosModule.incrementCounter()
  }
}
</script>
