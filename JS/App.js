//Variable global para almacenar el arreglo
let arrayProductos = [];

//Funcion General para seleccionar y validar las opciones a ejecutar
function preEntrega2() {
  let mensaje =
    "Ingrese la opcion :\n1-Agregar Productos.  \n2-Filtrar Producto. \n3-Eliminar Producto. \n4-Mostar Productos. \n5-Volver a comenzar. \n6-Cerrar Operacion";
  let opcion = parseInt(prompt(mensaje));

  if (!isNaN(opcion)) {
    if (opcion > 0 && opcion <= 6) {
      if (opcion == 1) {
        ejecutarOpcion1();
      } else if (opcion == 2) {
        ejecutarOpcion2();
      } else if (opcion == 3) {
        ejecutarOpcion3();
      } else if (opcion == 4) {
        ejecutarOpcion4();
      } else if (opcion == 5) {
        alert("Esta opcion volvera a limpiar todos los objectos de JS");
        location.reload();
      } else {
        alert("Se cerro la operación!!!");
      }
    } else {
      alert("Ingrese un numero correcto entre el 1 y 6");
      preEntrega2();
    }
  } else {
    alert("El valor ingresado no es un numero, ingrese un numero correcto");
    preEntrega2();
  }
}

//Funcion para ejecutar la opcion 1
function ejecutarOpcion1() {
  let cantidad = parseInt(
    prompt("¿Ingrese la cantidad de productos que va agregar?")
  );

  if (!isNaN(cantidad)) {
    alert(
      "Los productos van a tener 3 propiedades : \nDescripcion\nCantidad\nPrecio"
    );
    for (let i = 1; i <= cantidad; i++) {
      alert("Ingrese los datos del " + i + " Producto");
      let strDescripcion = prompt("¿Ingrese la descripcion del producto?");
      let prodDescripcion = strDescripcion;
      let strCantidad = prompt("¿Ingrese la cantidad del producto?");
      let prodCantidad = strCantidad;
      let strPrecio = prompt("¿Ingrese el precio del producto?");
      let prodPrecio = strPrecio;

      let producto = {
        id:
          arrayProductos.length > 0
            ? arrayProductos[arrayProductos.length - 1].id + 1
            : 1,
        descripcion: prodDescripcion,
        cantidad: Number(prodCantidad),
        precio: Number(prodPrecio),
      };
      //Agregando productos al arreglo declarado como global
      arrayProductos.push(producto);
    }
    console.table(arrayProductos);

    //Recorrer los productos para mostrar en un alert todos los productos agregados
    let listadoProductos = "Productos Agregados \n";
    let precioTotal = 0;

    arrayProductos.forEach((producto) => {
      precioTotal += producto.precio * producto.cantidad;
      listadoProductos =
        listadoProductos +
        `${producto.id}.- Descripcion : ${producto.descripcion} - Cantidad : ${
          producto.cantidad
        } - Precio : ${producto.precio} | Total : ${
          producto.precio * producto.cantidad
        }\n`;
    });

    listadoProductos =
      listadoProductos +
      `\n\nPrecio Total a Pagar de todos los productos : ${precioTotal} `;
    alert(listadoProductos);
    preEntrega2();
  } else {
    alert("Ingrese un cantidad correcto");
    ejecutarOpcion1();
  }
}

//Funcion para ejecutar la opcion 2
function ejecutarOpcion2() {
  if (arrayProductos.length > 0) {
    let mensaje =
      "Ingresa el precio, para filtrar los productos que sean igual o mayor al filtro ingresado!!";
    let opcion = parseInt(prompt(mensaje));
    if (!isNaN(opcion)) {
      let mensajeProductos = "Listado de Productos | Sin Filtro:\n";
      arrayProductos.forEach((producto) => {
        mensajeProductos =
          mensajeProductos +
          `${producto.id}.- Descripcion : ${
            producto.descripcion
          } - Cantidad : ${producto.cantidad} - Precio : ${
            producto.precio
          } | Total : ${producto.precio * producto.cantidad}\n`;
      });

      let productosFiltrados = arrayProductos.filter(
        (producto) => producto.precio >= opcion
      );

      if (productosFiltrados.length > 0) {
        let mensajeProductosFiltrados =
          "\nListado de Productos | Filtrados cuyo precio es mayor o igual a: " +
          opcion +
          "\n";
        productosFiltrados.forEach((producto) => {
          mensajeProductosFiltrados =
            mensajeProductosFiltrados +
            `${producto.id}.- Descripcion : ${
              producto.descripcion
            } - Cantidad : ${producto.cantidad} - Precio : ${
              producto.precio
            } | Total : ${producto.precio * producto.cantidad}\n`;
        });
        alert(mensajeProductos + mensajeProductosFiltrados);
        preEntrega2();
      } else {
        let mensajeProductos = "Listado de Productos | Sin Filtro:\n";
        arrayProductos.forEach((producto) => {
          mensajeProductos =
            mensajeProductos +
            `${producto.id}.- Descripcion : ${
              producto.descripcion
            } - Cantidad : ${producto.cantidad} - Precio : ${
              producto.precio
            } | Total : ${producto.precio * producto.cantidad}\n`;
        });
        alert(
          mensajeProductos +
            "\nNo existen Productos con el precio mayor igual a: " +
            opcion +
            " !!"
        );
        ejecutarOpcion2();
      }
    } else {
      alert("El valor ingresado no es un precio, ingrese un precio correcto");
      ejecutarOpcion2();
    }
  } else {
    alert(
      "No tienes productos agregados, no puedes filtrar hasta agregar productos!!!"
    );
    preEntrega2();
  }
}

//Funcion para ejecutar la opcion 3
function ejecutarOpcion3() {
  if (arrayProductos.length > 0) {
    let mensaje = "Listado de Productos: \nEliga una opcion a eliminar:\n";

    arrayProductos.forEach((producto) => {
      mensaje =
        mensaje +
        `${producto.id}.- Descripcion : ${producto.descripcion} - Cantidad : ${
          producto.cantidad
        } - Precio : ${producto.precio} | Total : ${
          producto.precio * producto.cantidad
        }\n`;
    });

    let opcion = parseInt(prompt(mensaje));

    let opcionCorrecta = arrayProductos.some(
      (producto) => producto.id == opcion
    );

    if (opcionCorrecta) {
      let obtenerIndice = arrayProductos.findIndex(
        (producto) => producto.id === Number(opcion)
      );

      if (obtenerIndice > -1) {
        let productoEliminado = arrayProductos[obtenerIndice];
        arrayProductos.splice(obtenerIndice, 1);
        let mensajeProductoEliminado = `\nSe elimino el producto ${opcion} :\n${productoEliminado.id}.- Descripcion: ${productoEliminado.descripcion} - Cantidad: ${productoEliminado.cantidad} - Precio: ${productoEliminado.precio}`;
        let mensaje = "Listado de Productos: \nLuego de Eliminar:\n";
        arrayProductos.forEach((producto) => {
          mensaje =
            mensaje +
            `${producto.id}.- Descripcion : ${
              producto.descripcion
            } - Cantidad : ${producto.cantidad} - Precio : ${
              producto.precio
            } | Total : ${producto.precio * producto.cantidad}\n`;
        });
        mensaje = mensaje + mensajeProductoEliminado;
        alert(mensaje);
        preEntrega2();
      }
    } else {
      alert("Seleccione un producto valido");
      ejecutarOpcion3();
    }
  } else {
    alert(
      "No tienes productos, Seleccione la opcion 1 para agregar productos!!!"
    );
    preEntrega2();
  }
}

//Funcion para ejecutar la opcion 4
function ejecutarOpcion4() {
  if (arrayProductos.length > 0) {
    let listadoProductos = "Listado de Productos: \n";
    let precioTotal = 0;

    arrayProductos.forEach((producto) => {
      precioTotal += producto.precio * producto.cantidad;
      listadoProductos =
        listadoProductos +
        `${producto.id}.- Descripcion : ${producto.descripcion} - Cantidad : ${
          producto.cantidad
        } - Precio : ${producto.precio} | Total : ${
          producto.precio * producto.cantidad
        }\n`;
    });
    listadoProductos =
      listadoProductos +
      `\n\nPrecio Total a Pagar de todos los productos : ${precioTotal} `;
    alert(listadoProductos);
    preEntrega2();
  } else {
    alert(
      "No tienes productos, Seleccione la opcion 1 para agregar productos!!!"
    );
    preEntrega2();
  }
}

//Llamando a la funcion inicial
preEntrega2();
