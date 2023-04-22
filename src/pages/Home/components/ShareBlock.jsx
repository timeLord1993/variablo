import { useState } from "react";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Button from "@mui/material/Button";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Card from "@components/Card";
import CreatePostDialog from "./CreatePost";
import "./ShareBlock.scss";

const ShareBlock = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <div className="share-block">
        <div className="top">
          <AccountCircleSharpIcon
            sx={{
              fontSize: 42,
              color: "#999999",
            }}
          />
          <div className="trigger-input" onClick={handleClickOpen}>
            分享你想说的新鲜事！
          </div>
        </div>
        <div className="split-line"></div>
        <div className="bottom">
          <Button
            size="large"
            sx={{ color: "#777777" }}
            startIcon={
              <VideoChatIcon
                sx={{
                  color: "red",
                }}
              />
            }
          >
            直播视频
          </Button>
          <Button
            size="large"
            color="info"
            sx={{ color: "#777777" }}
            startIcon={
              <PhotoCameraBackIcon
                sx={{
                  color: "green",
                }}
              />
            }
          >
            照片/视频
          </Button>
          <Button
            size="large"
            color="info"
            sx={{ color: "#777777" }}
            startIcon={
              <Diversity3Icon
                sx={{
                  color: "skyblue",
                }}
              />
            }
          >
            感受/活动
          </Button>
        </div>
      </div>
      <CreatePostDialog onClose={handleClose} open={open} />
    </Card>
  );
};

export default ShareBlock;
