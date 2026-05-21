'use client'; 

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';




import Link from 'next/link'; 
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.


//solo veo tres objetos en el array, cada uno con un nombre, un href y un icono.|
const links = [
  { 
    name: 'Home', 
    href: '/dashboard', 
    icon: HomeIcon 
  },

  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },

  { 
    name: 'Customers', 
    href: '/dashboard/customers', 
    icon: UserGroupIcon 
  },
  
];


export default function NavLinks() {
  const pathname = usePathname(); //llama a una funcion que devuelve la ruta actual del navegador. Esto es útil para determinar qué enlace está activo en la navegación.
  return (
    <>
      {
        links.map( /*esta es la funcion argumento de map */(link) => {
        const LinkIcon = link.icon;  //supongamos que el primero vale HomeIcon component. link es el objeto actual del array links, entonces link.icon es HomeIcon. Entonces LinkIcon es igual a HomeIcon. Esto se hace para poder usar el icono como un componente de React en el JSX que se devuelve a continuación. En lugar de escribir <HomeIcon />, se puede escribir <LinkIcon /> y se renderizará el icono correspondiente al enlace actual.
        return (
          <Link //componente de Next.js que se utiliza para crear enlaces de navegación entre páginas. Es similar a la etiqueta <a> en HTML, pero con funcionalidades adicionales específicas de Next.js, como el prefetching de páginas para mejorar el rendimiento.
            key={link.name} //
            href={link.href}//
            className={/* aqui empieza la clase*/clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )/* aqui termina la clase*/}
            >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      }/*y aqui termina, con cada objeto del array va a hacer esto*/
    )
      }
    </>
  );
}
