import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login-form backdrop-blur-sm bg-white/60">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="user or phone"
            variant="standard"
            sx={{ flex: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <VisibilityIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="password"
            variant="standard"
            sx={{ flex: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="code"
            variant="standard"
            sx={{ flex: 1 }}
          />
          <Button size="small" variant="contained">
            验证码
          </Button>
        </Box>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <Button variant="contained" sx={{ flex: 1 }} onClick={onLogin}>
            登陆
          </Button>
          <Button color="success" variant="contained" sx={{ flex: 1 }}>
            注册
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Login;
