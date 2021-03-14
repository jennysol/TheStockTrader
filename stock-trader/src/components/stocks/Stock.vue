<template>
  <v-flex class="pr-4 pl-5 pt-5 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
          <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity" :error="insufficientFunds"/>
        <v-btn 
          class="green darken-3 white--text" 
          @click="byStock" 
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)" 
        >  {{ insufficientFunds ? 'Insuficiente' : 'Comprar' }}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    byStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)  
      this.quantity = 0
     }
  },
    
}
</script>