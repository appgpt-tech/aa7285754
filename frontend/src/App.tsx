
// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import fakeDataProvider from "ra-data-fakerest";
import { Dashboard } from "./dashboard";
import { authProvider, apInitialize } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import LoginPage, { Login } from "./Login";
import data from "./data";
import { UsersList, UsersCreate, UsersEdit} from "./resources/Users";
import { EmployeesList, EmployeesCreate, EmployeesEdit} from "./resources/Employees";
import { EvaluationsList, EvaluationsCreate, EvaluationsEdit} from "./resources/Evaluations";
import { PayrollList, PayrollCreate, PayrollEdit} from "./resources/Payroll";
import { LeaveRequestsList, LeaveRequestsCreate, LeaveRequestsEdit} from "./resources/LeaveRequests";
import UsersIcon from "@mui/icons-material/Person";
import EmployeesIcon from "@mui/icons-material/Work";
import EvaluationsIcon from "@mui/icons-material/Assessment";
import PayrollIcon from "@mui/icons-material/Payments";
import LeaveRequestsIcon from "@mui/icons-material/BeachAccess"; 
// SUPERTOKENS
import React from "react";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + "/auth",
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: "EMAIL",
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === "true") {
  dataProvider = postgrestRestProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      "/proxy"
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/aa7285754">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != "DEV" ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
        
      >
    <Resource name="Users" options={{label:"Users"}} 
list={UsersList}
create={UsersCreate}
edit={UsersEdit}
recordRepresentation="userId"
icon={UsersIcon}/>
<Resource name="Employees" options={{label:"Employees"}} 
list={EmployeesList}
create={EmployeesCreate}
edit={EmployeesEdit}
recordRepresentation="employeeId"
icon={EmployeesIcon}/>
<Resource name="Evaluations" options={{label:"Evaluations"}} 
list={EvaluationsList}
create={EvaluationsCreate}
edit={EvaluationsEdit}
recordRepresentation="reviewId"
icon={EvaluationsIcon}/>
<Resource name="Payroll" options={{label:"Payroll"}} 
list={PayrollList}
create={PayrollCreate}
edit={PayrollEdit}
recordRepresentation="payrollId"
icon={PayrollIcon}/>
<Resource name="LeaveRequests" options={{label:"Leave Requests"}} 
list={LeaveRequestsList}
create={LeaveRequestsCreate}
edit={LeaveRequestsEdit}
recordRepresentation="requestId"
icon={LeaveRequestsIcon}/>
    <CustomRoutes noLayout>
      {/*This renders the login UI on the /auth route*/}
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
      {/*Your app routes*/}
    </CustomRoutes>
  </Admin>
  </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
