import React from "react";
import {Modal, Typography} from "@mui/material";
import ContentArea from "../contentarea/ContentArea";
import aboutsections from "../../assets/about.json"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function AboutModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <div className="about">
                    <Button id="aboutbutton" variant="contained" onClick={handleOpen}>Om Siden</Button>
                    <Modal open={open} onClose={handleClose}>
                        <Box className="aboutbox">
                            <Typography variant="h4">Om Siden</Typography>
                            <ContentArea sections={aboutsections.sections}></ContentArea>
                        </Box>
                    </Modal>
            </div>
        );
}