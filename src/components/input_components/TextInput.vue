<template>
    <div>        
        <div>
            <label v-bind:for="fieldParams.fieldName">{{ fieldParams.label }}:</label>
            <input id="text-input" type="text" v-bind:name="fieldParams.fieldName" v-model="value[fieldParams.fieldName]">
        </div>            
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