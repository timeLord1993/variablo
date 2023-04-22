import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import "./NewsHeader.scss";

const NewsHeader = () => {
  return (
    <div className="news-header-box flex items-center justify-between gap-4 mb-4">
      <div className="left flex align-center">
        <Avatar
          sx={{
            width: 38,
            height: 38,
          }}
        />
      </div>
      <div className="center flex-1">
        <div className="author">张学友</div>
        <div className="push-date">
          3天前 <MoreTimeIcon sx={{ fontSize: 10 }} />
        </div>
      </div>
      <div className="right flex items-center gap-2">
        {/* <IconButton aria-label="more">
          <MoreHorizIcon sx={{ fontSize: 22, color: "#9a9a9a" }} />
        </IconButton> */}
        <IconButton aria-label="close">
          <CloseIcon sx={{ fontSize: 22, color: "#9a9a9a" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default NewsHeader;
