<template>
  <h2 class="text-8xl text-center">
    {{ counter }}
  </h2>
</template>

<script lang="ts">

import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import Todos from '~/store/todos'

@Component({
  name: 'MiniCounter'
})
export default class MiniCounter extends Vue {
  todos = getModule(Todos, this.$store)

  get counter () {
    return this.todos.counter
  }
}
</script>

<style scoped>

</style>
