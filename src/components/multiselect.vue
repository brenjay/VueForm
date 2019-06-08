<!-- Vue component -->
<template>
  <div>
    <tr v-for="(row, index) in selectedFields" :key=index>
      <td>{{row.name}}</td>
      <td>
        <template v-if="row.type === 'array'">
          <select v-model="row.value">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </template>
       <template v-else>
        <input :type=row.type v-model="row.value" :value=row.value />
      </template>
      </td>
    </tr>
    <button v-on:click="submit()"> Submit </button>
    <br>
    <br>
    <label class="typo__label" for="builder">Query Fields:</label>
    <multiselect
      v-model="selectedFields"
      id="builder"
      label="name"
      track-by="code"
      placeholder="Type to search or view dropdown for options."
      open-direction="bottom"
      :options="fields"
      :multiple="true"
      :searchable="true"
      :loading="isLoading"
      :internal-search="true"
      :clear-on-select="false"
      :close-on-select="false"
      :options-limit="300"
      :max-height="600"
      :show-no-results="true"
      :hide-selected="true"
    >
      <template slot="tag" slot-scope="{ option, remove }">
        <span class="custom__tag">
          <span>{{ option.name }}</span>
          <span class="custom__remove" @click="remove(option)">❌</span>
        </span>
      </template>
      <template slot="clear" slot-scope="props">
        <div
          class="multiselect__clear"
          v-if="selectedFields.length"
          @mousedown.prevent.stop="clearAll(props.search)"
        ></div>
      </template>
      <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
    </multiselect>
    <br>
    <br>
    <br>
    <pre class="language-json"><code>{{ selectedFields  }}</code></pre>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import Vue from "vue";
// register globally
Vue.component("multiselect", Multiselect);

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      rows: [],
      selectedFields: [],
      fields: [
        {
          name: "Issue Typess",
          code: "AD",
          type: "array",
         value: null,
        },
        {
          name: "Issue Type",
          code: "AX",
          type: "option",
         value: null,
        },
        {
          name: "Due Date",
          code: "AS",
          type: "date",
          value: null,
        }
      ],
      isLoading: false
    };
  },
  methods: {
    limitText(count) {
      return `and ${count} other fields`;
    },
    clearAll() {
      this.selectedFields = [];
    },
    selectedStuff() {
      var temp = [];
      for (var x in this.selectedFields) {
        temp.push(this.selectedFields[x].name);
      }
      return temp;
    },
    submit(){
      console.log(this.selectedFields.map(a => {return {name: a.name, value: a.value};}));
    },
  }
};
</script>

<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
</style>