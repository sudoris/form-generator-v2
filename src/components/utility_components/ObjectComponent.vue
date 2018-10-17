<template>
  <div>    
      
    <div v-for="(field, key) in fieldParams.properties" :key="key">   
      <!-- <div v-if="getComponentName(field.type) === 'ObjectComponent'"></div>            -->
      <fieldset>
        <!-- <legend class="field-title">{{ fieldParams.properties.description }}</legend>  -->
        <component 
          :is="getComponentName(field.type)" 
          v-bind:fieldParams="field" 
          v-model="value[currentFieldName]" >         
        </component>   
      </fieldset>
      <!-- <component 
        :is="getComponentName(field.type)" 
        v-bind:fieldParams="field" 
        v-model="value[currentFieldName]" >         
      </component>    -->
            
      
                                   
    </div>
    
    
  </div>
</template>

<script>
import TextInput from "../input_components/TextInput"
import RadioInput from "../input_components/RadioInput"
import CheckList from "../input_components/CheckList"
import ObjectComponent from "./ObjectComponent"

export default {
  name: 'ObjectComponent',
  components: {
    TextInput,
    RadioInput,
    ObjectComponent,
    CheckList
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
          return 'ObjectComponent'
        }
        else if (type === 'checklist') {
          return 'CheckList'
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