<template>
  <v-flex class="pr-4 pl-5 pt-5 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
          <strong>{{ stock.name }} <small>(Preço: {{ stock.price}}  | Qtde: {{ stock.quantity }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
        <v-btn 
          class="blue darken-3 white--text" 
          :error="insufficientQuantity || !Number.isInteger(quantity)" 
          @click="sellStock" 
          :disabled="insufficientQuantity ||  quantity <= 0 || !Number.isInteger(quantity)" 
        >  {{ insufficientQuantity ? 'Insuficiente' : 'Vender' }} </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    },
  },
  methods: {
    // ...mapActions(['sellStock]),
    ...mapActions({ sellStockAction: 'sellStock' }),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.sellStockAction(order)
    //   this.$store.dispatch('sellStock', order)  
      this.quantity = 0
     }
  },
}
</script>