import Box from "@mui/material/Box";
import React from "react";
import DawaAutocomplete2 from "./DawaAutocomplete2";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import AfstemningsStedFinder, {PollingPlace} from "./dagiint";

class FinderBox extends React.Component {
    private afstemningsSted: PollingPlace | undefined;

    render () {
        const isSelected = !(undefined === this.afstemningsSted)
        let cardContent;
        let cardActions;
        if(isSelected) {
            cardContent = <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Dit Afstemningsted
                            </Typography>
                            <Typography variant="h5">{this.afstemningsSted?.name}</Typography>
                            <Typography variant="h6">{this.afstemningsSted?.address}</Typography>
                          </CardContent>
            cardActions = <CardActions>
                             <Button onClick={() => {
                                 this.openGoogleMaps();
                                }}>Se på Google Maps</Button>
                          </CardActions>
        } else {
            cardContent = <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Dit Afstemningsted
                            </Typography>
                            <Typography variant="body2">Indtast en addresse i søgeboksen ovenover.</Typography>
                          </CardContent>
        }
        return <Box className='finderbox'>
            <DawaAutocomplete2
                select={(selected) => {
                    this.handleSeekAddress(selected.data.id)
                }}
                classes={{
                    root: 'root',
                    input: 'input',
                    ul: 'ul',
                    li: 'li',
                    selected: 'selected'
                }}
            />
            <Card>
                {cardContent}
                {cardActions}
            </Card>
        </Box>
    }

    private handleSeekAddress(id: string) {
        new AfstemningsStedFinder(id).getAfstemningsSted().then(value => {
            console.log(value)
            this.afstemningsSted = value;
            this.forceUpdate();
        });
    }

    private openGoogleMaps() {
        window.open("https://www.google.com/maps/search/?api=1&query=" + this.afstemningsSted?.longitude +","+this.afstemningsSted?.latitude);
    }
}

export default FinderBox