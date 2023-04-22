import "./index.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotListedLocationRoundedIcon from "@mui/icons-material/NotListedLocationRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import YetiLogo from "../../assets/logo.png";
import UserInfoBg from "../../assets/user-info-bg.jpeg";

// 头部搜索
const Search = (props) => {
  const [keywords, setKeywords] = useState("");
  const onEnter = (e) => {
    if (e.nativeEvent.key === "Enter" || e.nativeEvent.keyCode === "13") {
      props.onEnter(keywords);
    }
  };
  const onInput = (e) => {
    setKeywords(e.target.value);
  };
  return (
    <div className="header-search bg-gray-100 rounded-full py-3 px-6 flex item-center">
      <SearchIcon />
      <input
        type="text"
        name="搜索内容"
        id="header-search-content"
        placeholder="variablo search"
        onInput={onInput}
        onKeyDown={onEnter}
      />
    </div>
  );
};

// 自定义个人信息菜单
const CustomMenuItem = ({ icon, name, onClickNative }) => {
  return (
    <MenuItem
      sx={{
        height: 45,
        borderRadius: 3,
      }}
      onClick={onClickNative}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{name}</ListItemText>
      <Typography variant="body2" color="text.secondary">
        <ArrowForwardIosRoundedIcon />
      </Typography>
    </MenuItem>
  );
};

const UserInfo = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserInfoClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserInfoClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { name, motto } = useSelector((state) => state.userBaseInfo);

  // 退出
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <Avatar onClick={handleUserInfoClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleUserInfoClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="p-4">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={UserInfoBg}
                sx={{
                  width: 320,
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography color="text.secondary">{motto}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                查看所有主页信息
              </Button>
            </CardActions>
          </Card>
          <MenuList>
            <CustomMenuItem icon={<SettingsRoundedIcon />} name="设置" />
            <CustomMenuItem
              icon={<NotListedLocationRoundedIcon />}
              name="帮助"
            />
            <CustomMenuItem
              icon={<ExitToAppRoundedIcon />}
              name="退出"
              onClickNative={onLogout}
            />
          </MenuList>
        </div>
      </Popover>
    </>
  );
};
// link tab
const LinkTab = (props) => {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
};

// default components header
const Header = () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, newVal) => {
    setActive(newVal);
  };

  const onSearch = (keywords) => {
    console.log("keywords", keywords);
  };
  return (
    <div className="common-header flex ">
      <div className="left-box flex-1 flex items-center pl-8">
        <div className="logo">
          <Avatar
            alt="yeti group"
            src={YetiLogo}
            sx={{ width: 60, height: 60 }}
          />
        </div>
        <div className="search ml-8 max-w-md flex-1">
          <Search onEnter={onSearch} />
        </div>
      </div>
      <div className="center-box flex-1 flex items-bottom">
        <Tabs value={active} onChange={handleChange} indicatorColor="red">
          <LinkTab
            icon={<LocalFireDepartmentRoundedIcon sx={{ fontSize: 32 }} />}
            iconPosition="start"
            href="/"
            selected="red"
          />
          <LinkTab
            icon={<CategoryRoundedIcon sx={{ fontSize: 32 }} />}
            iconPosition="start"
            href="/group"
            selected="green"
          />
          <LinkTab
            icon={<FavoriteIcon sx={{ fontSize: 32 }} />}
            iconPosition="start"
            href="/like"
          />
        </Tabs>
      </div>
      <div className="right-box flex-1 flex  justify-end pr-8">
        <div className="user-menus"></div>
        <div className="user-notify"></div>
        <div className="user-info">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Header;
