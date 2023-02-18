import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

function DrawerAppBar() {
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
                        }}
                    >
                        POST BLOGS
                    </Button>
                </Box>
            </AppBar>
        </Box>
    );
}

export default DrawerAppBar;
