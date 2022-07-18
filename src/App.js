import Router from "./Router";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
function App() {
  const location = useLocation();

	const handleScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		handleScrollToTop();
	}, [location.pathname]);
  return (
    <div>
      <button className="btn btn-floating" onClick={handleScrollToTop}>
				<span className="icon">
					<i className="fas fa-arrow-up fa-icon"></i>
				</span>
			</button>
      <Router />
      <MessengerCustomerChat
    pageId="109134945196808"
    appId="737329090719652"
  />,
    </div>
  );
}

export default App;
