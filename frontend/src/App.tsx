
// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import { customDataProvider } from "./dataProvider";
import fakeDataProvider from "ra-data-fakerest";
import { Dashboard } from "./dashboard";
import { authProvider, apInitialize } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import LoginPage, { Login } from "./Login";
import data from "./data";
import { UsersList, UsersCreate, UsersEdit} from "./resources/Users";
import { CardsList, CardsCreate, CardsEdit} from "./resources/Cards";
import { SetsList, SetsCreate, SetsEdit} from "./resources/Sets";
import { InventoryList, InventoryCreate, InventoryEdit} from "./resources/Inventory";
import { WishlistList, WishlistCreate, WishlistEdit} from "./resources/Wishlist";
import UsersIcon from "@mui/icons-material/Person";
import CardsIcon from "@mui/icons-material/Collections";
import SetsIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import WishlistIcon from "@mui/icons-material/Favorite"; 
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
  dataProvider = customDataProvider(
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
<Resource name="Cards" options={{label:"Cards"}} 
list={CardsList}
create={CardsCreate}
edit={CardsEdit}
recordRepresentation="cardId"
icon={CardsIcon}/>
<Resource name="Sets" options={{label:"Sets"}} 
list={SetsList}
create={SetsCreate}
edit={SetsEdit}
recordRepresentation="setId"
icon={SetsIcon}/>
<Resource name="Inventory" options={{label:"Inventory"}} 
list={InventoryList}
create={InventoryCreate}
edit={InventoryEdit}
recordRepresentation="userId"
icon={InventoryIcon}/>
<Resource name="Wishlist" options={{label:"Wishlist"}} 
list={WishlistList}
create={WishlistCreate}
edit={WishlistEdit}
recordRepresentation="userId"
icon={WishlistIcon}/>
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
