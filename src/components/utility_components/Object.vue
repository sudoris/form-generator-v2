<template>
  <div>
    {{ initObject() }}
    
    <div v-for="(field, key) in fieldParams.properties" :key="key">                            
      <component 
        :is="getComponentName(field.type)" 
        v-bind:fieldParams="field" 
        v-model="value[currentFieldName]" >        
      </component>
      
      <br>                             
    </div>
    
    
  </div>
</template>

<script>
import TextInput from "../input_components/TextInput"
import RadioInput from "../input_components/RadioInput"
import Object from "./Object"

export default {
  name: 'Object',
  components: {
    TextInput,
    RadioInput,
    Object
  },
    methods: {  
      getComponentName(type) {
        if (type === 'string') {
          return 'TextInput'
        }
        else if (type === 'radio') {
          return 'RadioInput'
        }
        else if (type === 'object') {
          return 'Object'
        }
      },
      initObject() {
        if (!(this.currentFieldName in this.value)) {
          this.value[this.currentFieldName] = {}
        }
      }
    },
    computed: {
      
      
    },
    props: ['fieldParams', 'value'],
    data () {
        return {

            currentFieldName: this.fieldParams.fieldName
        }
    }
    
}
</script>

<style>

</style>