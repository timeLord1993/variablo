import { useSelector, useDispatch } from "react-redux";
import AsideMenus from "./components/AsideMenus";
import NewsList from "./components/NewsList";
import AssistantRoundedIcon from "@mui/icons-material/AssistantRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";
import BreakfastDiningRoundedIcon from "@mui/icons-material/BreakfastDiningRounded";
import { useEffect } from "react";
import { setInformation } from "@store/informationSlice";
import ShareBlock from "./components/ShareBlock";

import "./index.scss";

const Home = () => {
  const menus = [
    {
      label: "最新动态",
      icon: <AssistantRoundedIcon sx={{ fontSize: 28, color: "red" }} />,
      id: 1,
    },
    {
      label: "收藏夹",
      icon: <AcUnitRoundedIcon sx={{ fontSize: 28, color: "green" }} />,
      id: 1 << 1,
    },
    {
      label: "特别关注",
      icon: <BreakfastDiningRoundedIcon sx={{ fontSize: 28, color: "blue" }} />,
      id: 1 << 2,
    },
    {
      label: "直播视频",
      icon: <AssistantPhotoRoundedIcon sx={{ fontSize: 28, color: "black" }} />,
      id: 1 << 3,
    },
  ];
  const dispatch = useDispatch();
  const { data: informationData } = useSelector(
    (state) => state.informationList
  );
  useEffect(() => {
    dispatch(setInformation({ count: 20 }));
    console.log("informationData", informationData);
  }, []);
  return (
    <div className="flex flex-column p-4 max-w-screen-xl mx-auto container">
      <div className="w-96">
        <AsideMenus data={menus} />
      </div>
      <div className="flex-1 mx-6 scroll-smooth content-list">
        <ShareBlock />
        {informationData.map((items) => (
          <NewsList data={items} />
        ))}
      </div>
      <div className="w-96">3</div>
    </div>
  );
};

export default Home;
