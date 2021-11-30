import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Usando modelos en Angular';

  public inventario : any = [
    {id: 1, nombre: "Pantalon" , precio : 250},
    {id: 2, nombre: "Chamarra" , precio : 500},
    
  ];

  public formulario : any = {
    id : null,
    nombre : null,
    precio : null
  }
  public seleccionar(articulos : any) : void{
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre,
    this.formulario.precio = articulos.precio;

  }
  public limpiar() : void{
    this.formulario.id = "";
    this.formulario.nombre = "";
    this.formulario.precio = "";

  }
  public eliminar(id : number) : void{
    for (let index = 0; index < this.inventario.length; index++) {  
      if (this.inventario[index].id == id) {
        this.inventario.splice(index, 1);
        alert("Eliminado con exito");
        break;
      }    
    }
  }

  public agregar() : void{
    let datoNuevo = {
      id : this.formulario.id,
      nombre : this.formulario.nombre,
      precio : this.formulario.precio
    }
    let rep: number = 0;
    for (let index = 0; index < this.inventario.length;index++){
        if (parseInt(this.inventario[index].id) == parseInt(datoNuevo.id)) {
          
          rep = 1;
          break;
        }else{
        }
      }
      if(rep == 1){
        alert("Existe ya una Id");
      }else{
        if (datoNuevo.id == null && datoNuevo.nombre == null || datoNuevo.nombre == "" && datoNuevo.precio ==null) {
          alert("Rellena todos los campos faltantes");
        }else if (datoNuevo.id==null){
          alert("Rellena el campo Id");
        }else if(datoNuevo.nombre==null || datoNuevo.nombre == ""){
          alert("Rellena el campo nombre");
        }else if(datoNuevo.precio == null){
          alert("Rellena el campo precio");
        }else{
          this.inventario.push(datoNuevo);
          alert("Agregado con exito!!");
          this.limpiar();
        }
      }
    }

  public editar() : void{
    let datoNuevo = {
      id : this.formulario.id,
      nombre : this.formulario.nombre,
      precio : this.formulario.precio
    }
    if (datoNuevo.id==null && datoNuevo.nombre==null || datoNuevo.nombre== "" && datoNuevo.precio==null) {
      alert("Rellena todos los campos");
    }else if(datoNuevo.id==null){
      alert("Rellena el campo Id");
    }else if (datoNuevo.nombre==null || datoNuevo.nombre =="") {
      alert("Rellena el campo nombre");
    }else if(datoNuevo.precio==null){
      alert("Rellena el campo precio");
    }
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == this.formulario.id) {
        this.inventario[index].id = this.formulario.id;
        this.inventario[index].nombre = this.formulario.nombre;
        this.inventario[index].precio = this.formulario.precio;
        alert("Modificado con exito!!");
        this.limpiar();
        break;
      }
    }

  }
}
