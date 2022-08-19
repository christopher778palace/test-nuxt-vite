import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'todos',
  namespaced: true,
  stateFactory: true
})
export default class Todos extends VuexModule {
  counter = 0

  @Mutation
  incrementCounter () {
    this.counter = ++this.counter
  }
}
