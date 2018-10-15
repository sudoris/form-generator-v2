<template>
  <div>
    <div v-for="(field, key) in sectionSchema.properties" :key="key">                      
      <component :is="getComponentName(field.type)" v-bind:fieldParams="field" v-model="sectionData" ></component>
      <!-- <div v-if="field.properties">
        <p>FOUND NESTING</p>
        <p>{{ field.fieldName }}</p>
        <div v-for="(nestedField, key) in field.properties" :key="key">                      
          <component :is="getComponentName(nestedField.type)" v-bind:fieldParams="nestedField" v-model="sectionData[key]" ></component>
      </div>
      <br>                
      </div>            -->
      <br>
    </div>

    {{ sectionData }}
  </div>
</template>

<script>
import TextInput from "./input_components/TextInput"
import RadioInput from "./input_components/RadioInput"
import Object from "./utility_components/Object"

export default {
  name: 'Section',
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
    }
    // currentProps(field) {
    //   return field
    // }
  },
  computed: {
    
  },
  data() {
    return {
      // currentKey: '',
      sectionData: { 
        // productId: "10",
        // productName: "SNES"
      },
      sectionSchema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: "http://example.com/product.schema.json",
        title: "Product",
        description: "A product from Acme's catalog",
        type: "object",
        properties: {
          productId: {
            description: "The unique identifier for a product",
            type: "string",
            label: "Product Id",
            fieldName: "productId"
            // attrs: {
            //   placeholder: "Id of product",
            //   title: "Please enter product Id"
            // }
          },
          productName: {
            description: "Name of the product",
            type: "string",
            fieldName: "productName",
            label: "Product Name"
          },
          available: {
            description: "Product availability",
            type: "radio",
            fieldName: "available",
            label: "Available",
            values: ['Yes', 'No'],            
          },
          car: {
            description: "blah",
            type: 'object',
            fieldName: "car",
            properties: {
              carModel: {
                description: "Model of car",
                type: "radio",
                fieldName: "carModel",
                label: "Model",
                values: ['Ferrari', 'Viper'],            
              },
              color: {
                description: "color of car",
                type: "string",
                fieldName: "color",
                label: "Car Color"
              }
            }
          }
        },
        required: [ "productId" ]
      }      
    }    
  }
}
</script>

<style>

</style>
