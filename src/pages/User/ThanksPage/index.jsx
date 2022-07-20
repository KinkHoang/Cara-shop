import TitlePage from "../../../components/User/TitlePage";
import history from "../../../utils/history";
import { Row, Button } from "antd";
import "./styles.scss";
import { useEffect } from "react";
import { getCartListAction } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function ThanksPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartListAction({}));  },);
  // }, []);

  return (
    <main className="thanks-page">
      <TitlePage title="Xin Cảm Ơn!" />
      <div className="container-1">
        <div className="thanks-page__main">
          <p className="thanks-page__main--content">
            Cảm ơn bạn đã mua hàng, sản phẩm sẽ được giao cho bạn trong
            3-5 ngày tiếp theo
          </p>
          <Row justify="center">
            <Button onClick={() => history.push("/")} type="primary">
              Về Trang Chủ
            </Button>
          </Row>
        </div>
      </div>
    </main>
  );
}

export default ThanksPage;
