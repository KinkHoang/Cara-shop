import Router from "./Router";
import ScrollTop from "react-scrolltop-button";
import MessengerCustomerChat from 'react-messenger-customer-chat';
function App() {
  return (
    <div>
      <Router />
      <MessengerCustomerChat
    pageId="109134945196808"
    appId="737329090719652"
  />,
  <ScrollTop
  text="top"
  distance={50}
  breakpoint={991}
  style={{ backgroundColor: "red" }}
  className="scroll-your-role"
  speed={250}
  target={0}
  // icon={<MyIcon />}
/>
    </div>
  );
}

export default App;
