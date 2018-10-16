<template>
  <div>    
    
    <div v-for="(field, key) in fieldParams.properties" :key="key">   
                            
      <component 
        :is="getComponentName(field.type)" 
        v-bind:fieldParams="field" 
        v-model="value[currentFieldName]" >         
      </component>
      <!-- {{ field.fieldName }}
      <br>
      {{ value[currentFieldName] }} -->
      
      
      
      <br>                             
    </div>
    
    
  </div>
</template>

<script>
import TextInput from "../input_components/TextInput"
import RadioInput from "../input_components/RadioInput"
import ObjectComponent from "./ObjectComponent"

export default {
  name: 'ObjectComponent',
  components: {
    TextInput,
    RadioInput,
    ObjectComponent
  },
    methods: {  
      changeVal() {
        this.value[this.currentFieldName] = {
          test1: "value1",
          test2: "value2"
        }
      },
      getComponentName(type) {
        if (type === 'string') {
          return 'TextInput'
        }
        else if (type === 'radio') {
          return 'RadioInput'
        }
        else if (type === 'object') {
          return 'ObjectComponent'
        }
      }
      // initObject() {
      //   if (!(this.currentFieldName in this.value)) {
      //     this.value[this.currentFieldName] = {}

      //   }
      // }
    },
    computed: {
      
      
    },
    props: ['fieldParams', 'value'],
    data () {
        return {
            currentFieldName: this.fieldParams.fieldName
        }
    },
    created: function() {
       if (!(this.currentFieldName in this.value)) {
          // this.value[this.currentFieldName] = {}
          // this.$emit('input', this.value)
          this.$set(this.value, this.currentFieldName, {});
          //this.value["keyOnCreate"] = {};
          this.$emit("input", this.value);
        }
    }
    
}
</script>

<style>

</style>