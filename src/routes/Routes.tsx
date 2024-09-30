import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// layout constants
import { LayoutTypes } from "../constants/layout";
import { Layoutadmin } from "../constants/layouthospital";

// store
import { RootState } from "../redux/store";

// All layouts containers
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import DetachedLayout from "../layouts/Detached";
import HorizontalLayout from "../layouts/Horizontal";
import TwoColumnLayout from "../layouts/TwoColumn";
import DefaultLayoutHospital from "../layoutshospital/Default";
import VerticalLayoutHospital from "../layoutshospital/Vertical";
import DetachedLayoutHospital from "../layoutshospital/Detached";
import HorizontalLayoutHospital from "../layoutshospital/Horizontal";
import TwoColumnLayoutHospital from "../layoutshospital/TwoColumn";

import {
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
  publicProtectedFlattenRoutesHospital
  
} from "./index";

interface IRoutesProps {}

const AllRoutes = (props: IRoutesProps) => {
  const { layout } = useSelector((state: RootState) => ({
    layout: state.Layout,
  }));

  const getLayoutHospital = () => {
    switch (layout.layoutType) {
      case Layoutadmin.LAYOUT_HORIZONTAL:
        return HorizontalLayoutHospital;
      case Layoutadmin.LAYOUT_DETACHED:
        return DetachedLayoutHospital;
      case Layoutadmin.LAYOUT_VERTICAL:
        return VerticalLayoutHospital;
      default:
        return TwoColumnLayoutHospital;
    }
  };

  const LayoutHospital = getLayoutHospital();
  const getLayout = () => {
    let layoutCls = TwoColumnLayout;

    switch (layout.layoutType) {
      case LayoutTypes.LAYOUT_HORIZONTAL:
        layoutCls = HorizontalLayout;
        break;
      case LayoutTypes.LAYOUT_DETACHED:
        layoutCls = DetachedLayout;
        break;
      case LayoutTypes.LAYOUT_VERTICAL:
        layoutCls = VerticalLayout;
        break;
      default:
        layoutCls = TwoColumnLayout;
        break;
    }
    return layoutCls;
  };

  const Layout = getLayout();

  // Check for token in localStorage
  const isAuthenticated = !!localStorage.getItem('jwtToken');
  const isAuthenticatedadmin = !!localStorage.getItem('tokenadmin');
  console.log("token admin" + isAuthenticatedadmin);

  return (
    <React.Fragment>
      <Routes>
        {/* Default route: Redirect to /landing */}
        <Route path="/" element={<Navigate to="/page/landing" />} />

        {publicProtectedFlattenRoutes.map((route, idx) => {
          return (
            <Route
              path={route.path}
              element={
                isAuthenticated && (route.path === "/medical/auth/login2" || route.path === "/medical/auth/register2") ? (
                  <Navigate to="/medical/" />
                ) : (
                  <DefaultLayout {...props} layout={layout}>
                    {route.element}
                  </DefaultLayout>
                )
              }
              key={idx}
            />
          );
        })}
   
        {authProtectedFlattenRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              isAuthenticated ? (
                <Layout {...props}>{route.element}</Layout>
              ) : (
                <Navigate to="/auth/login2" />
              )
            }
          />
        ))}
        
        {publicProtectedFlattenRoutesHospital.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              isAuthenticatedadmin ? (
                <LayoutHospital {...props}>{route.element}</LayoutHospital>
              ) : (
                <Navigate to="/hospital/organization-loginorg" />
              )
            }
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default AllRoutes;
