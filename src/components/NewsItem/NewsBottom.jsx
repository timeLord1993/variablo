import Button from "@mui/material/Button";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import "./NewsBottom.scss";

const NewsBottom = () => {
  return (
    <div className="news-bottom flex items-center">
      <Button
        className="flex-1"
        size="large"
        sx={{ color: "#777777" }}
        startIcon={<ThumbUpAltIcon />}
      >
        点赞
      </Button>
      <Button
        className="flex-1"
        size="large"
        color="info"
        sx={{ color: "#777777" }}
        startIcon={<AnnouncementIcon />}
      >
        评论
      </Button>
      <Button
        className="flex-1"
        size="large"
        color="info"
        sx={{ color: "#777777" }}
        startIcon={<ShareIcon />}
      >
        分享
      </Button>
    </div>
  );
};

export default NewsBottom;
