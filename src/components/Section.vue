<template>
  <div>
    <div v-for="(field, key) in sectionSchema.properties" :key="key">   
        
        <fieldset>
          <!-- <div class="field-title"></div> -->
          <legend class="field-title">{{ field.description}}</legend>          
          <component :is="getComponentName(field.type)" v-bind:fieldParams="field" v-model="sectionData" ></component>
          
        </fieldset>
      
      <br>
    </div>

    
    {{ sectionData }}
  </div>
</template>

<script>
import TextInput from "./input_components/TextInput"
import RadioInput from "./input_components/RadioInput"
import CheckList from "./input_components/CheckList"
import ObjectComponent from "./utility_components/ObjectComponent"

export default {
  name: 'Section',
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
          carModel: "Civic",
          color: "Black",
          addons: {
            turbo: "No"
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
            description: "Vehicle Information",
            type: 'object',
            fieldName: "car",
            properties: {
              carModel: {
                description: "model of car",
                type: "radio",
                fieldName: "carModel",
                label: "Model",
                values: ['Civic', 'GTR'],            
              },
              color: {
                description: "color of car",
                type: "string",
                fieldName: "color",
                label: "Car Color"
              },              
              addons: {
                type: 'object',
                fieldName: 'addons',
                properties: {
                  turbo: {
                     description: "turbo",
                     type: "radio",
                     fieldName: "turbo",
                     label: "Turbo",
                     values: ['Yes', 'No']        
                  },
                  dogs: {
                    description: "man's best friend",
                    type: "checklist",
                    fieldName: "dogs",
                    label: "Dogs you like",
                    values: ['Dachshund', 'Golden', 'Corgi', 'Shiba']
                  }
                }
              }
            }            
          }
          // dogs: {
          //   description: "man's best friend",
          //   type: "checklist",
          //   fieldName: "dogs",
          //   label: "Dogs you like",
          //   values: ['Dachshund', 'Golden', 'Corgi', 'Shiba']
          // }
          
        },
        required: [ "productId" ]
      }      
    }    
  }
}
</script>

<style>
.field-title {
  color: blueviolet;
}

</style>
