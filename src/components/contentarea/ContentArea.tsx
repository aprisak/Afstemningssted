import React from "react";
import {Typography} from "@mui/material";

interface Section {
    title: string
    content: string
}

interface ContentAreaProps {
    sections: Section[]
}

class ContentArea extends React.Component<ContentAreaProps, {}> {

    render() {
        var count:number = 0;
        return(
            this.props.sections.map(section => {
                count++;
                return <div key={count} className="contentarea">
                            <Typography variant="h6">{section.title}</Typography>
                            <div dangerouslySetInnerHTML={{__html:section.content}}></div>
                       </div>
            })
        );
    }
}

export default ContentArea