
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
import { VendorsList, VendorsCreate, VendorsEdit} from "./resources/Vendors";
import { CustomersList, CustomersCreate, CustomersEdit} from "./resources/Customers";
import { InventoryList, InventoryCreate, InventoryEdit} from "./resources/Inventory";
import { ProductsList, ProductsCreate, ProductsEdit} from "./resources/Products";
import { ProductCategoriesList, ProductCategoriesCreate, ProductCategoriesEdit} from "./resources/ProductCategories";
import { DiscountsList, DiscountsCreate, DiscountsEdit} from "./resources/Discounts";
import { ShoppingCartList, ShoppingCartCreate, ShoppingCartEdit} from "./resources/ShoppingCart";
import { OrdersList, OrdersCreate, OrdersEdit} from "./resources/Orders";
import { OrderDetailsList, OrderDetailsCreate, OrderDetailsEdit} from "./resources/OrderDetails";
import { PaymentsList, PaymentsCreate, PaymentsEdit} from "./resources/Payments";
import { ReviewsList, ReviewsCreate, ReviewsEdit} from "./resources/Reviews";
import { SupportTicketsList, SupportTicketsCreate, SupportTicketsEdit} from "./resources/SupportTickets";
import UsersIcon from "@mui/icons-material/Person";
import VendorsIcon from "@mui/icons-material/Storefront";
import CustomersIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory2";
import ProductsIcon from "@mui/icons-material/ShoppingCart";
import ProductCategoriesIcon from "@mui/icons-material/Category";
import DiscountsIcon from "@mui/icons-material/LocalOffer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartCheckout";
import OrdersIcon from "@mui/icons-material/ReceiptLong";
import OrderDetailsIcon from "@mui/icons-material/ListAlt";
import PaymentsIcon from "@mui/icons-material/Payment";
import ReviewsIcon from "@mui/icons-material/RateReview";
import SupportTicketsIcon from "@mui/icons-material/SupportAgent"; 
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
<Resource name="Vendors" options={{label:"Vendors"}} 
list={VendorsList}
create={VendorsCreate}
edit={VendorsEdit}
recordRepresentation="vendorId"
icon={VendorsIcon}/>
<Resource name="Customers" options={{label:"Customers"}} 
list={CustomersList}
create={CustomersCreate}
edit={CustomersEdit}
recordRepresentation="customerId"
icon={CustomersIcon}/>
<Resource name="Inventory" options={{label:"Inventory"}} 
list={InventoryList}
create={InventoryCreate}
edit={InventoryEdit}
recordRepresentation="productId"
icon={InventoryIcon}/>
<Resource name="Products" options={{label:"Products"}} 
list={ProductsList}
create={ProductsCreate}
edit={ProductsEdit}
recordRepresentation="productId"
icon={ProductsIcon}/>
<Resource name="ProductCategories" options={{label:"Product Categories"}} 
list={ProductCategoriesList}
create={ProductCategoriesCreate}
edit={ProductCategoriesEdit}
recordRepresentation="categoryId"
icon={ProductCategoriesIcon}/>
<Resource name="Discounts" options={{label:"Discounts"}} 
list={DiscountsList}
create={DiscountsCreate}
edit={DiscountsEdit}
recordRepresentation="productId"
icon={DiscountsIcon}/>
<Resource name="ShoppingCart" options={{label:"Shopping Cart"}} 
list={ShoppingCartList}
create={ShoppingCartCreate}
edit={ShoppingCartEdit}
recordRepresentation="cartId"
icon={ShoppingCartIcon}/>
<Resource name="Orders" options={{label:"Orders"}} 
list={OrdersList}
create={OrdersCreate}
edit={OrdersEdit}
recordRepresentation="orderId"
icon={OrdersIcon}/>
<Resource name="OrderDetails" options={{label:"Order Details"}} 
list={OrderDetailsList}
create={OrderDetailsCreate}
edit={OrderDetailsEdit}
recordRepresentation="orderId"
icon={OrderDetailsIcon}/>
<Resource name="Payments" options={{label:"Payments"}} 
list={PaymentsList}
create={PaymentsCreate}
edit={PaymentsEdit}
recordRepresentation="paymentId"
icon={PaymentsIcon}/>
<Resource name="Reviews" options={{label:"Reviews"}} 
list={ReviewsList}
create={ReviewsCreate}
edit={ReviewsEdit}
recordRepresentation="reviewId"
icon={ReviewsIcon}/>
<Resource name="SupportTickets" options={{label:"Support Tickets"}} 
list={SupportTicketsList}
create={SupportTicketsCreate}
edit={SupportTicketsEdit}
recordRepresentation="ticketId"
icon={SupportTicketsIcon}/>
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
