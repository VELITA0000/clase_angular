# ClaseAngular

# services
el hijo le dice al padre que seleccionaron un elemento de ese hijo, el hijo tiene el constructor
, el padre guarda el elemento en el servicio

# binders
(event en html) le mandamos datos del hijo al padre, disparamos un metodo de la clase padre que hace alguna accion 
 [property] le mandamos datos del padre al hijo
 cuando te lleguen los datos, asignalos a la propiedad y el binder los pasa al html

 # rutas
 que quiero cargar
 donde lo quiero cargar: routerOutlet
 cuando quiero cargarlo

# tipos de datos
se implementan los tipos de datos con las interfaces

# implementacion interfaz movie
recibes de una API un objeto movie
todos los componentes donde se usa el componente movie, necesitan saber de la interfaz por lo que se crea en shared
ng generate interface shared/types/movie

El componente de la lista movies no recibe un arreglo sino una promesa que va a enviar el arreglo
Se usa el implements OnInit que es el metodo 