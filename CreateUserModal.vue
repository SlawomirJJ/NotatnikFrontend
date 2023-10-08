<template>
<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>    
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
        
    <div class="input-group mb-3">
        <span class="input-group-text">First name</span>
        <input type="text" class="form-control" v-model="firstName">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Last name</span>
        <input type="text" class="form-control" v-model="lastName">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Birth date</span>
        <input type="text" class="form-control" v-model="birthDate">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Gender</span>
        <input type="text" class="form-control" v-model="gender">
    </div>

    <button type="button" @click="createClick()"
    class="btn btn-primary">
    Create
    </button>
    
    </div>
</div>
</div>
</div>
  </template>
  
  <script>
  export default {
    name: 'ModalComponent',
    props: {
      modalTitle: String,
      // Inne propsy, które potrzebujesz
    },
    methods: {
      // Metody obsługujące akcje w modalu
    },
  };
  </script>
  
  <style scoped>
  /* Stylizacja modala */
  </style>