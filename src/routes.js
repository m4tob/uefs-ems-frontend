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
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Usuarios from "views/usuario/List.js";
import Grandezas from "views/grandeza/GrandezasList.js";
import GrandezaForm from "views/grandeza/GrandezaForm.js";
import TiposEmergencia from "views/tipo-emergencia/List.js";
import Sensores from "views/sensor/List.js";
import Zonas from "views/zona/List.js";
import Udes from "views/ude/List.js";

var routes = [
  {
    path: "/usuarios",
    name: "Usuários",
    icon: "ni ni-single-02 text-gray",
    component: <Usuarios />,
    layout: "/admin",
  },
  {
    path: "/grandezas",
    name: "Grandezas",
    icon: "ni ni-bullet-list-67 text-green",
    component: <Grandezas />,
    layout: "/admin",
  },
  {
    path: "/grandezas/edit/:id",
    name: "Formulário de Grandeza",
    icon: "ni ni-bullet-list-67 text-green",
    component: <GrandezaForm />,
    layout: "/admin",
  },
  {
    path: "/tipos-emergencia",
    name: "Tipos de Emergência",
    icon: "ni ni-bullet-list-67 text-red",
    component: <TiposEmergencia />,
    layout: "/admin",
  },
  {
    path: "/sensores",
    name: "Sensores",
    icon: "ni ni-bullet-list-67 text-orange",
    component: <Sensores />,
    layout: "/admin",
  },
  {
    path: "/zonas",
    name: "Zonas",
    icon: "ni ni-bullet-list-67 text-brown",
    component: <Zonas />,
    layout: "/admin",
  },
  {
    path: "/udes",
    name: "Udes",
    icon: "ni ni-bullet-list-67 text-blue",
    component: <Udes />,
    layout: "/admin",
  },

  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
