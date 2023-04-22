import { useRef, forwardRef, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import CollectionsIcon from "@mui/icons-material/Collections";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import GifBoxIcon from "@mui/icons-material/GifBox";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import "./CreatePost.scss";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreatePostDialog = ({ open, onClose }) => {
  const textareaRef = useRef(null);
  const [postMessage, setPostMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(160);
  const onTextareaInput = (e) => {
    const { scrollHeight } = e.target;
    setTextareaHeight(scrollHeight); //保存输入框初始高度
    e.target.style.height = scrollHeight + "px";
    setPostMessage(e.target.value);
  };

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPostMessage("");
    }, 5000);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        创建帖子
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#e0e0e0",
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon sx={{ fontSize: 24, color: "#666" }} />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent
        sx={{
          width: 480,
        }}
      >
        <div className="post-avatar">
          <Avatar sx={{ width: 40, height: 40 }} />
          <div className="post-avatar-name">
            <div>张叁疯</div>
            <div>公开</div>
          </div>
        </div>
        <div className="post-text">
          <textarea
            value={postMessage}
            ref={textareaRef}
            name="postText"
            id="postText"
            placeholder="分享你的新鲜事！"
            onInput={onTextareaInput}
          ></textarea>
        </div>
        <div className="more-selector">
          <div className="left">添加更多内容</div>
          <div className="select-list">
            <IconButton>
              <CollectionsIcon sx={{ color: "#4527a0", fontSize: 30 }} />
            </IconButton>
            <IconButton>
              <EditLocationAltIcon sx={{ color: "#00b0ff", fontSize: 30 }} />
            </IconButton>
            <IconButton>
              <AddReactionIcon sx={{ color: "#ff3d00", fontSize: 30 }} />
            </IconButton>
            <IconButton>
              <GifBoxIcon sx={{ color: "#69f0ae", fontSize: 30 }} />
            </IconButton>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          disabled={!postMessage}
          loading={isLoading}
          loadingPosition="start"
          variant="contained"
          startIcon={<SendIcon />}
          onClick={onSubmit}
        >
          发帖
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePostDialog;
