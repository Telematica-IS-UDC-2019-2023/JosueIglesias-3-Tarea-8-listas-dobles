export default class Inventario {

    constructor(){
        this.inicio = null
    }

    agregarProducto(nuevo){
        if (this.inicio === null){
            this.inicio = nuevo
        } else {
            let t = this.inicio
            while (t.siguiente != null){
                t = t.siguiente
            }
            t.siguiente = nuevo
            t.siguiente.anterior = t
        }
    }
    
    agregarInicio(nuevo){
        if (this.inicio === null) {
            this.inicio = nuevo
        } else {
            let t = this.inicio
            this.inicio = nuevo
            nuevo.siguiente = t
            nuevo.siguiente.anterior = nuevo
        }
    }

    eliminarProducto(cod) {
        let t = this.inicio
        if (this.inicio.codigo === cod){
            this.inicio = this.inicio.siguiente
            this.inicio.anterior = null
        } else {
            while (t.siguiente.codigo != cod){
                t = t.siguiente
            }
    
            if (t.siguiente.codigo === cod){
                t.siguiente = t.siguiente.siguiente
                t.siguiente.anterior = t
            } else {
                alert ('Producto no encontrado')
            }
        } 
    }

    eliminarPrimero() {
        this.inicio = this.inicio.siguiente
        this.inicio.anterior = null
    }
    
    buscarProducto(cod){
        let t = this.inicio
        while (t.codigo != cod){
            t = t.siguiente
        }
        if (t.codigo === cod){
            return t
        }
    }


    listarProductos(){
        let concat = ""
        let t = this.inicio
        while (t != null){
            concat += t.nombre + " "
            t = t.siguiente
        }
        return concat
    }
  
    listarInverso(){
        let t = this.inicio
        while(t.siguiente != null){
            t = t.siguiente
        }
        let concat = "" + t.nombre
        while(t.anterior != null){
            t = t.anterior
            concat += " " + t.nombre
        }
        return concat
    }
    
   
    insertarProducto(nuevo, posicion){
        let t = this.inicio
        if (posicion === 1){
            this.agregarInicio(nuevo)
        } else {
            let i = 1
            while (i != posicion){
                if (t.siguiente != null){
                    t = t.siguiente
                    i++
                } else {
                    alert('Posición inválida')
                    break
                }
            } 
    
            if (i === posicion){
                nuevo.anterior = t.anterior
                nuevo.siguiente = t
                nuevo.anterior.siguiente = nuevo
                nuevo.siguiente.anterior = nuevo
            }
        }
    }
}