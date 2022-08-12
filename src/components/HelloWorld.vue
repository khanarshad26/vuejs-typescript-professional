<!-- eslint-disable prettier/prettier -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input id="input" type="text" v-model="name" @input="handleInput"/>
    <button @click="handleInput">Button</button>
    <div v-if="showError">Error: Max character limit exceed of text input</div>
    <div v-if="!showError" > Name : {{name}}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { useStore } from "vuex";

export default class HelloWorld extends Vue {
  @Prop({ default: "This is a vue App" }) msg!: string;
  name = "";
  showError = false;
  store = useStore();
  // count = computed(() => this.store.state.count);
  // name = computed(() => this.store.state.name);
  increment = (): void => this.store.commit("increment");
  updateName = (newName: string): void =>
    this.store.commit("updateName", newName);

  handleInput(): void {
    if (this.name.length > 8) this.showError = true;
    else this.showError = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
