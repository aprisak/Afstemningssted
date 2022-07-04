/**
 * @function DawaAutocomplete2
 */
import * as React from 'react'
import {FilledInput, FormControl, InputLabel} from "@mui/material";

// noinspection JSNonASCIINames,NonAsciiCharacters
interface Selected {
    caretpos: number
    data: {
        dør: string
        etage: number
        href: string
        husnr: string
        id: string
        postnr: string
        postnrnavn: string
        stormodtagerpostnr: string
        stormodtagerpostnrnavn: string
        supplerendebynavn: string
        vejnavn: string
    }
    forslagstekst: string
    stormodtagerpostnr: boolean
    tekst: string
    type: string
}

interface SelectedCallback {
    (selected: Selected ) : void
}

interface Classes {
    root?: string;
    input?: string;
    ul?: string;
    li?: string;
    selected?: string;
}

interface Props {
    classes?: Classes;
    select: SelectedCallback;
    baseUrl?: URL;
    adgangsadresserOnly?: boolean;
    fuzzy?: boolean;
    params?: Object;
    stormodtagerpostnumre?: boolean;
    minLength?: number;
    multiline?: boolean;
    id?: string;
}

function DawaAutocomplete2(props: Props) {
    const {
        classes,
        ...rest
    } = props;
    const containerEl = React.createRef<HTMLDivElement>();
    const inputEl = React.createRef<HTMLInputElement>();

    React.useEffect(() => {

        const mutationCallback = (mutationsList: any) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class' ) {
                    if(mutation.target.classList.contains('dawa-selected')){
                        mutation.target.classList.remove('dawa-selected')
                        if(classes && classes.selected){
                            mutation.target.classList.add(classes.selected)
                        }
                    }
                    if(classes && classes.ul && mutation.target.classList.contains('dawa-autocomplete-suggestions') && !mutation.target.classList.contains(classes.ul)){
                        mutation.target.classList.add(classes.ul)
                    }
                    if(classes && classes.li && mutation.target.classList.contains('dawa-autocomplete-suggestion') && !mutation.target.classList.contains(classes.li)){
                        mutation.target.classList.add(classes.li)
                    }
                }
            }
        }
        
        new MutationObserver(mutationCallback).observe(
            containerEl.current!,
            { attributes: true, childList: true, subtree: true }
        );
        const dawaAutocomplete2 = require('dawa-autocomplete2');
        const component = dawaAutocomplete2.dawaAutocomplete(inputEl.current, {
            ...rest
        });

        return () => {
            component.destroy();
        }
    }, [classes, containerEl, inputEl, rest])

    return (
        <div className="autocomplete-container" ref={containerEl}>
            <FormControl sx={{ width: '650px' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-address">Din adresse</InputLabel>
                <FilledInput
                    id="filled-adornment-address"
                    type='text'
                    inputRef={inputEl}
                />
            </FormControl>
        </div>
    )
}

export default DawaAutocomplete2