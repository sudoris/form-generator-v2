<template>
    <div>     
          
        <!-- <fieldset>      -->
          <!-- might need to ensure that id is unique later, perhaps combine value with other attribute  -->
          <input type="checkbox" :id="fieldParams.values[0]" :value="fieldParams.values[0]" v-model="value[fieldParams.fieldName]">
          <label :for="fieldParams.values[0]">{{ fieldParams.values[0] }}</label>
          <input type="checkbox" :id="fieldParams.values[1]" :value="fieldParams.values[1]" v-model="value[fieldParams.fieldName]">
          <label :for="fieldParams.values[1]">{{ fieldParams.values[1] }}</label>
          <input type="checkbox" :id="fieldParams.values[2]" :value="fieldParams.values[2]" v-model="value[fieldParams.fieldName]">
          <label :for="fieldParams.values[2]">{{ fieldParams.values[2] }}</label>
          <input type="checkbox" :id="fieldParams.values[3]" :value="fieldParams.values[3]" v-model="value[fieldParams.fieldName]">
          <label :for="fieldParams.values[3]">{{ fieldParams.values[3] }}</label>
          <br>                  
          
        <!-- </fieldset>             -->
        
    </div>
</template>

<script>
// Imports

export default {
    components: {
        
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
          this.$set(this.value, this.currentFieldName, []);
          //this.value["keyOnCreate"] = {};
          this.$emit("input", this.value);
        }
    }
    
    
}
</script>

<style>

</style>