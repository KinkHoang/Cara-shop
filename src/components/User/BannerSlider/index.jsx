
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBannerListAction } from "../../../redux/actions";
import "./styles.scss";
import sample from '../../../assets/images/cabinet2.mp4';


function BannerSilder() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerListAction({}));
  }, []);

  return (
    <div className="banner-slider">
      <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
    </div>
  );

}

export default BannerSilder;
