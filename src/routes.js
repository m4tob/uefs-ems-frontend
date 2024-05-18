/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Icons from "views/examples/Icons.js";
import Login from "views/Login.js";
import Maps from "views/examples/Maps.js";
import Profile from "views/examples/Profile.js";
import Tables from "views/examples/Tables.js";
import GrandezaForm from "views/grandeza/GrandezaForm.js";
import Grandezas from "views/grandeza/GrandezasList.js";
import SensorForm from "views/sensor/SensorForm.js";
import Sensores from "views/sensor/SensorList.js";
import TipoEmergenciaForm from "views/tipo-emergencia/TipoEmergenciaForm.js";
import TiposEmergencia from "views/tipo-emergencia/TipoEmergenciaList.js";
import UdeForm from "views/ude/UdeForm.js";
import Udes from "views/ude/UdeList.js";
import UsuarioForm from "views/usuario/UsuarioForm.js";
import Usuarios from "views/usuario/UsuarioList.js";
import ZonaForm from "views/zona/ZonaForm.js";
import Zonas from "views/zona/ZonaList.js";

const resources = [
  { name: "usuarios", listComponent: <Usuarios />, formComponent: <UsuarioForm />, label: "Usuários", icon: 'ni-single-02', color: "text-gray" },
  { name: "grandezas", listComponent: <Grandezas />, formComponent: <GrandezaForm />, label: "Grandezas", icon: 'ni-atom', color: "text-green" },
  { name: "tipos-emergencia", listComponent: <TiposEmergencia />, formComponent: <TipoEmergenciaForm />, label: "Tipos de Emergência", icon: 'ni-bell-55', color: "text-red" },
  { name: "sensores", listComponent: <Sensores />, formComponent: <SensorForm />, label: "Sensores", icon: 'ni-sound-wave', color: "text-orange" },
  { name: "zonas", listComponent: <Zonas />, formComponent: <ZonaForm />, label: "Zonas", icon: 'ni-square-pin', color: "text-brown" },
  { name: "udes", listComponent: <Udes />, formComponent: <UdeForm />, label: "Udes", icon: 'ni-app', color: "text-blue" },
];

const routes = [
  {
    path: "/*",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/login",
    show: false,
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",

  },
  // Hidden Routes
  ...resources.map(resource => ({
    show: false,
    path: `/${resource.name}/edit`,
    name: resource.label,
    component: resource.formComponent,
    layout: "/admin",
  })),
  ...resources.map(resource => ({
    show: false,
    path: `/${resource.name}/edit/:id`,
    name: resource.label,
    component: resource.formComponent,
    layout: "/admin",
  })),

  // Sidebar Routes
  ...resources.map(resource => ({
    path: `/${resource.name}`,
    name: resource.label,
    icon: `ni ${resource.icon} ${resource.color}`,
    component: resource.listComponent,
    layout: "/admin",

  })),
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
    show: false,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
    show: false,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
    show: false,
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
    show: false,
  },
];
export default routes;