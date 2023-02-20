import * as React from "react";
import {useNavigate} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

function DrawerAppBar() {
    const navigate = useNavigate();
    return (
        <Box sx={{display: "flex"}}>
            <AppBar>
                <Box
                    sx={{
                        display: {xs: "none", sm: "flex"},
                        height: 100,
                        background: "black",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        key={"post"}
                        sx={{
                            color: "#fff",
                            marginRight: 5,
                            fontSize: "20px",
                            padding: 5,
                        }}
                        onClick={() => {
                            navigate("/postBlog");
                        }}
                    >
                        <AddIcon style={{padding: 5, color: "white"}} /> POST
                        BLOGS
                    </Button>
                </Box>
            </AppBar>
        </Box>
    );
}

export default DrawerAppBar;
