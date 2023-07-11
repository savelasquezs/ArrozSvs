<template>
  <div>All Orders nanana</div>

  <q-list bordered class="rounded-borders" dense>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        flat
        bordered
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
        dark
      />
    </div>
  </q-list>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script setup>
import { usePedidosStore } from "../stores/Pedidos";
const pedidosStore = usePedidosStore();
pedidosStore.listenChanges();
const pedidos = pedidosStore.pedidosDatabase;
console.log(pedidos);
const columns = [
  {
    name: "cliente",
    required: true,
    label: "Cliente",
    align: "left",
    field: "cliente",
    sortable: true,
  },
  {
    name: "fecha",
    align: "center",
    label: "Fecha",
    field: "calories",
    sortable: true,
  },
  { name: "hora", label: "Hora", field: "hora", sortable: true },
  { name: "direccion", label: "Dirección ", field: "direccion" },
  { name: "valor", label: "Valor ($)", field: "valor" },
  { name: "estado", label: "Estado ", field: "estado" },
  {
    name: "domiciliario",
    label: "Domiciliario ",
    field: "domiciliario",
    sortable: true,
  },
  {
    name: "pago",
    label: "Pago",
    field: "pago",
    sortable: true,
  },
  {
    name: "liquidado",
    label: "Liquidado",
    field: "liquidado",
    sortable: true,
  },
];
const rows = pedidos.map((pedido) => {
  return {
    cliente: pedido.cliente.nombre,
    direccion: pedido.cliente.direccion.split(",")[0],
  };
});
</script>

<style lang="scss" scoped>
</style>
