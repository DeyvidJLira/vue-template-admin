<template>
  <v-card
    class="ma-4"
    >
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-search"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="dataTable"
      :single-select="singleSelect"
      :search="search"
      item-key="column1"
      show-select
      class="elevation-1">
      <template v-slot:item.column6="{ item }">
        <v-chip :color="item.column6 ? 'green' : 'red'" dark>{{ item.column6 ? 'Sim' : 'Não' }}</v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        singleSelect: false,
        selected: [],
        headers: [
          {
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Column 1', value: 'column1' },
          { text: 'Column 2', value: 'column2' },
          { text: 'Column 3', value: 'column3' },
          { text: 'Column 4', value: 'column4' },
          { text: 'Column 5', value: 'column5' },
          { text: 'Column 6', value: 'column6' },
        ],
        dataTable: [
          {
            column1: 'Item 1',
            column2: 10,
            column3: 2.0,
            column4: '11/04/2019',
            column5: 'Lorem ipsum',
            column6: true,
          },
          {
            column1: 'Item 2',
            column2: 13,
            column3: 2.0,
            column4: '14/04/2019',
            column5: 'Lorem ipsum',
            column6: false,
          },
          {
            column1: 'Item 3',
            column2: 16,
            column3: 2.0,
            column4: '19/04/2019',
            column5: 'Lorem ipsum',
            column6: false,
          },
          {
            column1: 'Item 4',
            column2: 5,
            column3: 2.0,
            column4: '30/04/2019',
            column5: 'Lorem ipsum',
            column6: true,
          },
          {
            column1: 'Item 5',
            column2: 8,
            column3: 2.0,
            column4: '07/05/2019',
            column5: 'Lorem ipsum',
            column6: true,
          },
          {
            column1: 'Item 6',
            column2: 18,
            column3: 2.0,
            column4: '08/05/2019',
            column5: 'Lorem ipsum',
            column6: true,
          },
          {
            column1: 'Item 7',
            column2: 21,
            column3: 2.0,
            column4: '17/05/2019',
            column5: 'Lorem ipsum',
            column6: true,
          },
          {
            column1: 'Item 8',
            column2: 5,
            column3: 2.0,
            column4: '21/05/2019',
            column5: 'Lorem ipsum',
            column6: false,
          },
          {
            column1: 'Item 9',
            column2: 14,
            column3: 2.0,
            column4: '23/05/2019',
            column5: 'Lorem ipsum',
            column6: true,
          },
          {
            column1: 'Item 10',
            column2: 30,
            column3: 2.0,
            column4: '26/05/2019',
            column5: 'Lorem ipsum',
            column6: false,
          },
        ],
      }
    },
  }
</script>