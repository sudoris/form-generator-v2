<template>
  <div>
    <div v-for="(field, key) in sectionSchema.properties" :key="key">   
      <!-- <div v-if="field.type != 'object'"> -->
        <component :is="getComponentName(field.type)" v-bind:fieldParams="field" v-model="sectionData" ></component>
      <!-- </div>                    -->
      <!-- <div v-else-if="field.type === 'object'">
        {{ initEmptyObject(field.fieldName) }}
        <div v-for="(nestedField, key) in field.properties" :key="key">                      
          <component :is="getComponentName(nestedField.type)" v-bind:fieldParams="nestedField" v-model="sectionData[field.fieldName]" ></component>
        </div>
      </div> -->
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

    <!-- <input type="text" v-model="garbageData.test">

    {{  }} -->
    {{ sectionData }}
  </div>
</template>

<script>
import TextInput from "./input_components/TextInput"
import RadioInput from "./input_components/RadioInput"
import ObjectComponent from "./utility_components/ObjectComponent"

export default {
  name: 'Section',
  components: {
    TextInput,
    RadioInput,
    ObjectComponent
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
    },
    initEmptyObject(objectKey) {
      this.sectionData[objectKey] = {}
    }
    
    // currentProps(field) {
    //   return field
    // }
  },
  computed: {
    
  },
  data() {
    return {
      garbageData: {
        test: {}
      },
      sectionData: { 
        productId: "10",
        productName: "SNES",
        available: "Yes",
        car: {
          carModel: "Ferrari",
          color: "Black",
          myObject: {
            innerObject: "another thing"
          }
        }        
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
              // attrs/metadata: {
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
              },
              myObject: {
                type: 'object',
                fieldName: 'myObject',
                properties: {
                  innerObject: {
                     description: "Model of car",
                     type: "radio",
                     fieldName: "innerObject",
                     label: "Inner Object",
                     values: ['something', 'another thing'],        
                  }
                }
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
