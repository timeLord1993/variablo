import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RecommendIcon from "@mui/icons-material/Recommend";
import Tooltip from "@mui/material/Tooltip";
import "./NewsDescription.scss";

const NewsDescription = () => {
  return (
    <div className="new-desc flex justify-between items-center mb-2 mt-2">
      <div className="left flex flex-start px-3 items-center">
        <Tooltip title="喜欢" arrow>
          <FavoriteIcon className="cursor-pointer" sx={{ color: "red" }} />
        </Tooltip>
        <Tooltip title="点赞" arrow>
          <RecommendIcon className="cursor-pointer" sx={{ color: "green" }} />
        </Tooltip>
        <span>1.5w</span>
      </div>
      <div className="right">
        <Button variant="text" sx={{ color: "#999" }} color="info">
          505条评论
        </Button>
        <Button variant="text" sx={{ color: "#999" }} color="info">
          170次分享
        </Button>
      </div>
    </div>
  );
};

export default NewsDescription;
