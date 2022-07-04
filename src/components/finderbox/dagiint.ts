export class PollingPlace {
    constructor(readonly name: string, readonly address: string, readonly latitude: number, readonly longitude: number) {
    }
}

interface DARAdress {
    id: string;
    adgangsadresse: DARAdgangsadresse;
}

interface DARAdgangsadresse {
    afstemningsområde: Afstemningsomraade;
}

interface Afstemningsomraade {
    href: string;
    nummer: number;
    navn: string;
}

interface AfstemningsomraadeDetails {
    afstemningssted: Afstemningssted
}

interface Afstemningssted {
    navn: string;
    adgangsadresse: Adgangsadresse;
}

interface Adgangsadresse {
    adressebetegnelse: string;
    koordinater: number[];
}

class AfstemningsStedFinder {
    private darId: string;


    constructor(theDarId: string) {
        this.darId = theDarId;
    }

    async getAfstemningsSted():Promise<PollingPlace> {
        const response = await fetch('https://api.dataforsyningen.dk/adresser/' + this.darId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json() as DARAdress;

        console.log(result)

        const response2 = await fetch(result.adgangsadresse.afstemningsområde.href, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response2.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result2 = await response2.json() as AfstemningsomraadeDetails;

        console.log(result2)

        return new PollingPlace(result2.afstemningssted.navn,
            result2.afstemningssted.adgangsadresse.adressebetegnelse,
            result2.afstemningssted.adgangsadresse.koordinater[0],
            result2.afstemningssted.adgangsadresse.koordinater[1]);
    }
}

export default AfstemningsStedFinder