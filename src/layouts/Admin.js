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
import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminFooter from "components/Footers/AdminFooter.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import AuthService from 'services/AuthService.js';
import LocalidadeService from 'services/LocalidadeService.js';

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkPermissions() {
      const isNotAuthorized = !await AuthService.isAuthorized();
      if (isNotAuthorized) {
        navigate('/login');
        return
      }

      const localidade = await LocalidadeService.getLocalidade();
      if (!localidade) {
        navigate('/localidade');
        return
      }

      const accountRole = await LocalidadeService.getRole();

      const route = routes.find(route => {
        let regexPattern = route.layout + route.path;
        regexPattern = regexPattern.replace(/:[^/]+/g, '[^/]+');
        const routeRegex = new RegExp(regexPattern);
        return routeRegex.test(location.pathname);
      });
      if (!route?.roles?.includes(accountRole)) {
        navigate('/admin/index');
        return
        // TODO(permissions) ISSO AQUI E A TELA DE SELEÇÃO DE LOCALIDADE
      }
    };
    checkPermissions();
  });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/ems-logo.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props?.location?.pathname)}
        />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/admin/index" replace />} />
        </Routes>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
