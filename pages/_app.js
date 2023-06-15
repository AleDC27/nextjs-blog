/* 
La exportación predeterminada de _app.jses un componente React de
 nivel superior que envuelve todas las páginas de su aplicación.
  Puede usar este componente para mantener el estado cuando navega 
  entre páginas o para agregar estilos globales como lo estamos haciendo aquí.
*/

import '../styles/globals.css';

export default function App({Component,pageProps}){
    return <Component {...pageProps} />
}

/* 
El Componentprop es el activo page, por lo que siempre que navegue entre rutas,
 Component cambiará al nuevo page. Por lo tanto, cualquier apoyo que envíe Component será
  recibido por el page.

pagePropses un objeto con los accesorios iniciales que se precargaron para su página
 mediante uno de nuestros métodos de obtención de datos ; de lo contrario,
  es un objeto vacío.
*/