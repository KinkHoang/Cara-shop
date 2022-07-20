import { Tabs, Row, Col, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartListAction,
  getProductListAction,
} from "../../../redux/actions";
import { Link } from "react-router-dom";
import ProductItem from "../../../components/User/ProductItem";
import BannerSilder from "../../../components/User/BannerSlider";
import { ArrowRightAltSharp } from "@mui/icons-material";
import "./styles.scss";
import "./header.css";


function HomePage() {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productReducer.productList);
  useEffect(() => {
    dispatch(getProductListAction({}));
    dispatch(getCartListAction({}));
  }, []);

  function renderProductList() {
    if (!productList.load) {
      return productList.data.map((item) => {
        return (
          <Col key={item.id} span={8}>
            <ProductItem product={item} />
          </Col>
        );
      });
    }

    return <Spin />;
  }

  return (
    <main className="home container-1">

      <BannerSilder />
      <section className="home__product">
        <Tabs defaultActiveKey="2" centered>
          <TabPane  key="1">
            <Row gutter={16}>{renderProductList()}</Row>
          </TabPane>

        </Tabs>
      </section>

        
        <header className="header parallax-image flex-row flex-align-center flex-justify-center">
			<section className="hero-content flex-col flex-justify-center flex-align-start py-5 px-3">
				<h2 className="hero-head text-light">
        Giảm giá tới 40% cho tất cả mặt hàng trong hôm nay. Đừng bỏ lỡ!
				</h2>
				<h6 className="hero-cta mt-1">
					<Link
						to="/category/3"
						className="btn btn-primary btn-text-icon py-0-25 px-0-5 mt-1"
					>
						Mua Ngay!
						<span className="icon flex flex-col flex-align-center flex-justify-center">
							<ArrowRightAltSharp style={{ fontSize: "2rem" }} />
						</span>
					</Link>
				</h6>
        
			</section>
      
		</header>

    </main>
  );
}

export default HomePage;
