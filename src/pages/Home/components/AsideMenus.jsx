import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

const LinkMenuItem = (props) => {
  return (
    <MenuItem
      sx={{
        borderRadius: 3,
        height: 46,
      }}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <Typography
        variant="inherit"
        sx={{
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        {props.label}
      </Typography>
    </MenuItem>
  );
};

const AsideMenus = ({ data }) => {
  return (
    <MenuList>
      {data.map((item, idx) => {
        return <LinkMenuItem {...item} key={item.id} />;
      })}
    </MenuList>
  );
};

export default AsideMenus;
