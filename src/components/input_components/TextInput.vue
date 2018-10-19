<template>      
	<div>
		<div v-if="showInputField">
			<label v-bind:for="fieldParams.fieldName">{{ fieldParams.label }}:</label>
			<input id="text-input" type="text" v-bind:name="fieldParams.fieldName" v-model="value[fieldParams.fieldName]">
			<br>
			<br>
			{{ value }}
			<br>
			<br>

			{{ fieldParams }}
					
			<br>
			<br>
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
		},
		methods: {
			clearInput() {
				// this.value[this.fieldParams.fieldName] = null
				this.$set(this.value, this.fieldParams.fieldName, '');
			}
		},
		computed: {
				showInputField() {
						if (this.value[this.fieldParams.attrs.dependencies.name] === this.fieldParams.attrs.dependencies.value) {
								return true
						}
						else {
								this.clearInput()
								return false
						}
				}
		}
    // watch: {
    //   value: function() {
    //     this.$emit('input', this.value)
    //   }
    // }

    
}
</script>

<style>

</style>