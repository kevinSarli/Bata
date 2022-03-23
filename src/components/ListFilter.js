import React from 'react'

function ListFilter() {
  return (
    <>
    <div class="row g-2">

<div class="col-12 col-md-2">
    <select class="form-select filter" id="mark-filter">
        <option value="" selected hidden>categoria</option>
            <option value="categoria">
                corseteria
            </option>
            <option value="categoria">
                pijama
            </option>
            <option value="categoria">
                traje de baño
            </option>

           
                <option value="0">Todas las categorias</option>

    </select>
</div>

<div class="col-12 col-md-2">
    <select class="form-select" name="" id="select-limit">
        <option value="9">9</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
    </select>
</div>

<div class="col-12 col-md-2">
    <select class="form-select" name="" id="select-filtro">
        <option value="" selected hidden> Filtro </option>
        <option value="namedes"> Nombre : descendente </option>
        <option value="name"> Nombre: ascendente </option>
        <option value="pricedes"> Precio : mayor a menor </option>
        <option value="price"> Precio : menor a mayor </option>
        <option value="markId"> Marca : ascendente </option>
        <option value="markIddes"> Marca : descendente </option>
        <option value="id">Default</option>
    </select>
</div>



</div>
    </>
  )
}

export default ListFilter