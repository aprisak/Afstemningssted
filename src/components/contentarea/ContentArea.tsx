import React from "react";
import {Typography} from "@mui/material";

export interface Section {
    title: string
    content: string
}

class ContentArea extends React.Component {
    render() {
        const sections: Section[] = this.props.sections;
        return(
            sections.map(section => {
                return <div>
                            <Typography variant="h4">{section.title}</Typography>
                            <Typography variant="body2">{section.content}</Typography>
                       </div>
            })
        );
    }
}

export default ContentArea