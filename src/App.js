import React, {Component} from 'react';
import {Route} from 'react-router';
import {HashRouter} from 'react-router-dom';
// import Test from './widgetcomponents/Test/Test';
// import LoginComponent from './widgetcomponents/LoginComponent/LoginComponent';
import Comment from './widgetcomponents/Comment/Comment';
// import PlaceHolder from './components/PlaceHolderComponent/PlaceHolder';
// import ManageAccount from './widgetcomponents/ManageAccount/ManageAccount';
// import SiteDetails from './widgetcomponents/SiteDetails/SiteDetails';
// import DashboardComponent from './widgetcomponents/DashBoardComponent/DashboardComponent';
// import Invoices from './widgetcomponents/Invoice/Invoice';
// import BaseComponent from './widgetcomponents/BaseComponent/BaseComponent';
// import InvoiceDetails from './widgetcomponents/InvoiceDetails/InvoiceDetails';
// import Devices from './widgetcomponents/Device/Devices';
// import Alarm from './widgetcomponents/Alarm/Alarm';
// import BuyJourney from './widgetcomponents/BuyJourney/BuyJourney';
// import Display from './widgetcomponents/BuyJourney/Subcomponents/DisplayItem/Display';
// import Ticket from './widgetcomponents/Ticket/Ticket';
// import TicketDetails from './widgetcomponents/TicketDetails/TicketDetails';
// import ManageNetwork from './widgetcomponents/ManageNetwork/ManageNetwork';
// import Location from './widgetcomponents/Location/Location';
// import AddAppliences from './widgetcomponents/AddAppliences/AddAppliences';
// import Order from './widgetcomponents/Orders/Order';
// import StoreLocation from './widgetcomponents/Location/StoreLocation';
// import TimeLine from './widgetcomponents/Transaction Timeline/Timeline';

const NotFound = () => (
  <div className="col-12 text-center py-4 my-2">
      <h1 className="my-4 text-center">
        404.. error Page not Found .......!
      </h1>
  </div>
);


class App extends Component {
    render() {
        return (
            <HashRouter>
              <Route path="/" component={Comment}>
                  {/* <IndexRoute component={Test} />
                  <Route path="/Test" component={Test} />
                  <Route path="/manageaccount/:accountId" component={ManageAccount} />
                  <Route path="/sitedetails/:siteId" component={SiteDetails} />
                  <Route path="/invoices" component={Invoices} />
                  <Route path="/invoiceDetails/:invoiceNumber" component={InvoiceDetails} />
                  <Route path="/dashboard" component={DashboardComponent} />
                  <Route path="/itemlist" component={BaseComponent} />
                  <Route path="/alarms" component={Alarm} />
                  <Route path="/devices" component={Devices} />
                  <Route path="/order" component={Order} />
                  <Route path="/sitedevices/:siteId" component={Devices} />
                  <Route path="/tickets" component={Ticket} />
                  <Route path="/ticketdetails/:ticketNumber" component={TicketDetails} />
                   <Route path="/BuyJourney" component={BuyJourney} /> 
                  <Route path="/BuyJourney" component={Display} />
                  <Route path="/profile" component={ManageNetwork} />
                  <Route path="/storelocation" component={StoreLocation} />
                  <Route path="/maps" component={Location} />
                  <Route path="/AddAppliences" component={AddAppliences} />
                  <Route path="/timeline" component={TimeLine} />
                  <Route path="*" component={NotFound} /> */}
                  <Route path="*" component={NotFound} />
              </Route>
            </HashRouter>
        );
    }
}

export default App;
