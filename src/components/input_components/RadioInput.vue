<template>
    <div>       
        {{ value }}::: 
        <fieldset>            
          <legend>{{ fieldParams.label }}</legend>          
          <!-- use for loop to dynamically render necessary radio inputs -->
          <input type="radio" :id="fieldParams.values[0]" :value="fieldParams.values[0]" v-model="value[fieldParams.fieldName]">
          <label :for="fieldParams.values[0]">{{ fieldParams.values[0] }}</label>
          
          <input type="radio" :id="fieldParams.values[1]" :value="fieldParams.values[1]" v-model="value[fieldParams.fieldName]">
          <label :for="fieldParams.values[1]">{{ fieldParams.values[1] }}</label>
          <br>
        </fieldset>            
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
            
        }
    }
    
}
</script>

<style>

</style>