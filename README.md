# Applitude - Chat App med ReactJS og Meteor

## 0: Forord ##
Dette kurset er ment til nybegynnere i React og Javascript, men helt grunnleggende
HTML- og programmeringskunnskaper er forventet at du skal kunne. 

__Oppgave 0.1\: Editor__  
Kjør opp din favoritteditor/IDE! Jeg anbefaler Webstorm, men Eclipse og Atom fungerer også
helt fint. Webstorm koster orginalt 500EUR i året, men som UiO student så kan du få det gratis
ved å registrere deg her(husk å bruke UiO e-posten din): https://www.jetbrains.com/student/

Hvis du velger å bruke Eclipse så husk å bruke Javascript versjonen.

__Oppgave 0.2\: Nettleser__  
I dette kurset anbefaler jeg å bruke Google Chrome som nettleser for å teste appen. Google Chrome
har en utvidelse som heter React Developer Tools hjelper nettleresen å forstå hvordan appen vår fungerer
som gjør det lettere for oss å analysere appen.

__React__  
React er et front-end rammeverk som håndterer logikk på brukergrensesnittet til appen vår. Her bruker vi
konsepter som heter Components som er det som håndterer alt av rendering og visning av brukergrensesnittet.

Mer dokumentasjon om React: https://facebook.github.io/react/docs/hello-world.html
React sin livssykel: https://facebook.github.io/react/docs/react-component.html

__Meteor__  
Meteor er et back-end rammeverk som håndterer det meste av server og klient kommunikasjon.
Det gjør det lettere for oss som utviklere å kode fordi vi slipper å server-klient flyten fra scratch.
Meteor bruker Javascript som programmeringsspråk som gjør at vi kun trenger å kunne ett programmeringsspråk
til å lage appen vår. MongoDB er standard databaseverktøyet som blir brukt med Meteor som er kjapt å sette opp
og lett å bruke, tilnærmet ingen databasekunnskaper trengs for å begynne.

Mer dokumentasjon om Meteor: http://docs.meteor.com/#/full/

## 1: Oppsett ##
Til oppsett er oppgave 1.4 og 1.5 gjort i prekoden, gjør disse kun hvis du skal sette opp egne prosjekter.

__Oppgave 1.1\: Oppsett på egen maskin__  
Last ned og installer Meteor: https://www.meteor.com/install

__Oppgave 1.2\: Last ned prekoden__  
Scroll helt øverst på denne siden og trykk på den grønne knappen "Clone or download" og trykk på "download ZIP"  
Pakk så ut .zip filen i et valgfritt sted på din maskin  
ELLER  
Pull direkte fra repositorien med linken: https://github.com/UyQTran/Chat-App.git  

__Oppgave 1.3\: Prøvekjør appen__  
Åpne mappen du lastet ned i din favoritt-terminal eller kommandolinje  
Start appen ved å skrive kommandoen "meteor" og trykk enter, vent til Meteor er ferdig med å bygge appen  
Åpne en nettleser og gå til addressen "localhost:3000"

__Oppgave 1.4\: Installering av React__  
Bruk kommandoen "meteor npm install --save react react-mounter react-dom react-tap-event-plugin" i terminal eller kommandolinje
for å installere React-biblioteket  

__Oppgave 1.5\: Installering av Material-UI__  
Material-UI er et GUI-bibliotek av Google som tar i bruk av Material Design. Material-UI er skreddersydd til
React noe som gjør det mye lettere å bruke. Er du en Android bruker så er du sikkert allerede kjent med 
GUI-elementene
Bruk kommandoen "meteor npm install --save material-ui" i terminal eller kommandolinje
for å installere React-biblioteket  

__Oppgave 1.6\: Legg til FlowRouter og diverse__  
React har en\t innebygd router verktøy, men vi skal ikke bruke denne fordi det blir mye uryddig kode av det.
FlowRouter er et verktøy for React som nettopp fikser dette og er mye lettere å lære.
FlowRouter ligger i et bibliotek som heter Kadira som allerede finnes i Meteor.
Legg til FlowRouter og andre viktige verktøy i prosjektet med kommandoen 
"meteor add kadira:flow-router alanning:roles ultimatejs:tracker-react"

__Oppgave 1.7\: Last ned resterende dependencies__  
Kjør kommandoen "meteor npm install" for å laste ned dependencies som du mangler eller trenger å oppdatere.

__Oppgave 1.8\: Skjekk!__  
Sjekk om alt er som det skal. Filen som heter "package.json" er en fil som beskriver
hvilke biblioteker prosjektet er avhengig av. 

```
{
  "name": "chat-app",
  "private": true,
  "scripts": {
    "start": "meteor run"
  },
  "dependencies": {
    "material-ui": "^0.17.3",
    "meteor-node-stubs": "~0.2.0",
    "react": "^15.5.3",
    "react-dom": "^15.5.3",
    "react-mounter": "^1.2.0",
    "react-tap-event-plugin": "^2.0.1"
  }
}
```

Hvis package-filen ser ut som bildet over kan du fortsette!

__Oppgave 1 fullført! Hva har vi lært?__  
* Hvordan vi installerer nye biblioteker med npm. Merk at kommandoen "meteor npm install"
kun fungerer med meteor.
* Hvor lett det er å bygge appen.


## 2: React ##

__Oppgave 2.1\: Min chatteapp__  
Endelig kan du begynne å kode! La oss starte med å lage den aller første siden man ser i appen.
Vi kaller denne komponenten LandingPage, lag en fil med navn "LandingPage.jsx" i imports/client/components.

 ```
import React, { Component } from 'react';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <div className="landing-page">
                <h1>
                    Ditt appnavn her
                </h1>
            </div>
        );
    }
}
 ```

Forklaring:  
Akkurat som klasser i Java så deklarerer vi klasser i Javascript på nesten samme måte. Den eneste forskjellen er
at vi må eksportere klassen i tillegg for at andre komponenter kan importere klassen. Ved at klassen arver 
Component fra React gjør klassen om til en React komponent!
Alle komponenter i React har en funksjon med navn "render" og en konstruktør som tar imot "props" eller properties
som i HTML properties. 
Funksjonen render returnerer HTML kode som skal bli tegnet på nettleseren.

__Vent litt!__ Du har gjort noe som ikke er god React kodeskikk!  
Det er ikke god kodeskikk i React å hardkode tekst i HTML kode, dette er kanskje greit når du koder
ren HTML, men dette kan i visse tilfeller tvinge React til å rendere elementer unødvendig. 
Alt av tekst, verdier og funksjoner som skal bli brukt i render-funksjonen burde bli lagret i 
state-objektet slik:
 ```
this.state = {
    appName: 'Ditt chat app navn her'
};
 ```
 
I Javascript bruker vi ofte objekter som state. I koden over har state et attributt som heter
"appName" som er satt til teksten "Ditt chat app navn her".

Videre skal vi bruke state-objektet vårt til å få tak i appnavnet på følgene måte:
```
render() {
   return (
       <div className="landing-page">
            <h1>
                {this.state.appName}
            </h1>
       </div>
   );
}
```

Ved å bruke krøllparanteser gjør oss i stand til å skrive Javascript i HTML kode, det blir en
såkalt Javascript-modus. Disse krøllparantesene kan kun inneholde ett uttrykk. Man kan bytte 
på denne modusen til HTML ved å skrive HTML igjen inne i krøllparantesen og dette kan da 
gjentas i evigheter.

__Oppgave 2.2\: Routing__  
For å kunne deklarere vår LandingPage som det aller første appen skal vise må vi lage en routing 
for dette in FlowRouter. Alt av logikk i routing skal ligge i imports/startup/client/routes.jsx.

I routes.jsx importer vår LandingPage slik:
```
import LandingPage from '../ui/LandingPage.jsx';
```

og legg til følgende kode:
```
FlowRouter.route('/', {
    name: 'rootview',
    action(props, {goToUrl}) {
        mount(AppLayout, {
            body: (<LandingPage/>)
        });
    }
});
```

Forklaring:  
FlowRouter er en modul som husker alt av routing mellom sider i appen vår. Om du vil legge 
til en side i appen må du sende med logikk til FlowRouter før den kan bli aksessert. 

FlowRouter har en funksjon, route, som tar imot to paramtere. 
* Det første parameteren er hva som skal stå i lenken etter domenenavnet, for eksempel
hello.com/parameter-tekst-her.
* Det andre er et objekt som inneholder to attributter, name og en lamba-funksjon. Atributtet 
name må alltid bli satt til en unik tekststreng, grunnen til dette er fordi vi senere skal 
kalle på en funksjon som skal finne routes
basert på navnet. 

Lambda-funksjonen er en funksjon, action, parameter props som er eventuelle parametere som 
skal bli sent med i action fra den siden vi går fra til den siden vi skal til.

React-funksjonen mount forteller react hvilken komponent den skal kjøre funksjonen render på.
Akkurat i vårt tillfelle så vil vi alltid kjøre render i AppLayout og heller sende inn
eventuelle andre komponenter som vi vil skal rendere fordi vi vil kun ha en type layout.

Skjekk appen nå med kommando "meteor" eller localhost:3000 på en nettleser hvis du allerede har
meteor kjørende. Du skal nå se innholdet i komponenten LandingPage.

__Oppgave 2.3\: Knapper__  
Akkurat som HTML så er det veldig lett å legge til knapper. Importer FlatButton fra 
"material-ui/FlatButton" akkurat som du har gjort tidligere.

Legg til to FlatButton-komponenter rett under h1-elementet i LandingPage. FlatButton har
en property som heter "label". Denne propertien tar imot en tekststreng som bestemmer hva som
skal stå på knappen. På den ene knappen skal det stå "Create" og på den andre skal det stå
"Join". Appen skal se slik ut:  
![alt tag](http://heim.ifi.uio.no/uqtran/Applitude/Chat-app/button-screen.png)

La oss nå kun fokusere på "Create"-knappen og dens funksjonalitet for nå. Vi vil at denne 
knappen skal føre klienten til en ny side med nye komponenter og med en ny addresse. 

FlatButton har en property, "onTouchTap", som tar imot en Javascript-funksjon som 
blir kalt på når knappen blir trykket på. Når vi trykker på knappen så vil vi bli ført
til et nytt chatterom med en random generert pin-kode. Da må vi ta i bruk av FlowRouter igjen.

For å generere en random pin-kode så finnes det et verktøy for dette allerede i prosjektet som
heter PinGeneratorService. Importer denne slik:

```
import PinGeneratorService from '../services/PinGeneratorService.jsx';
```

Importer FlowRouter som du har gjort i routes.js. Nå kan vi lage en lambda-funksjon som
sender oss til en ny side slik:
```
render() {
    return (
        <div className="landing-page">
            <h1>
                {this.state.appName}
            </h1>
            <FlatButton
                label="Create"
                onTouchTap={()=>{
                    const pin = PinGeneratorService.generatePin();
                    FlowRouter.go('chat-room', {pin:pin});
                }}/>
            <FlatButton label="Join"/>
        </div>
    );
}
```

Forklaring:  
Lambda-funksjoner i Javascript har formen (<par1>,<parX>)=>{<kode>}. Disse funksjonene er navnløse
og selve koden er bare referansen til funksjonen. Altså den funksjonen som blir ikke kalt på med en
gang fordi vi kune sender referansen inn til FlatButton. FlowRouter sin go-funksjon tar imot navnet
på routen knappen skal føre til og tar imot eventuelle parametere i et objekt.

__Vent litt!__ Du har skrevet ineffektiv kode! Alle referanser av lambda-funksjoner i Javascript har sin
helt egne unike id. Dette gjør at React tror at vi sender inn forskjellige funksjoner hver gang LandingPage
blir endret litt på. Med andre ord, FlatButton for Create blir renderet unødvendig flere ganger enn det den
trenger.

Vi fikser dette ved å flytte funksjonen vår ut av render. Istedet for å lage en lambda funksjon så kan vi
heller lage en vanlig funksjon og sende den referanser inn i onTouchTap:
```
handleCreateButton() {
    const pin = PinGeneratorService.generatePin();
    FlowRouter.go('chat-room', {pin:pin});
}
```

For å gjøre denne funksjonen "bærbar" så må vi knytte LandingPage til funksjonen. Dette gjør vi i 
konstruktøren slik:
```
this.handleCreateButton = this.handleCreateButton.bind(this);
```

Så kan vi endelig sende med referansen til denne funksjonen i onTouchTap slik:
```
render() {
    return (
        <div className="landing-page">
            <h1>
                {this.state.appName}
            </h1>
            <FlatButton
                label="Create"
                onTouchTap={this.handleCreateButton}/>
            <FlatButton label="Join"/>
        </div>
    );
}
```

Nå må vi lage den nye siden og tilsvarende route til den.

__Oppgave 2.4\: ChatPage__  
Vi vil ha selve chattefunksjonaliteten i en helt egen side så lag en fil med navn "ChatPage.jsx"
i imports/client/components. Fyll filen med klasse-, konstruktør-, state-, og render-deklarasjoner
akkurat som du har gjort i LandingPage.jsx. Husk også å importere React!

Nå gjenstår det å lage en route til denne siden i routes.js. Importer ChatPage og legg til følgende 
kode i routes.js:
```
FlowRouter.route('/chat-room/:pin', {
    name: 'chat-room',
    action({pin}) {
        mount(AppLayout, {
            body: (<ChatPage roomNumber={pin}/>)
        });
    }
});
```

__Oppgave 2 fullført! Hva har vi lært?__
* Hvordan skrive logikk for knapper
* Hvordan opprette komponenter i React
* Hvordan React er en blanding av HTML og Javascript
* Litt om hva som skjer bak kulissene i React.


## 3: Database ##

__Oppgave 3.1\: TextField__  
Material-UI følger med et ganske fint tekstfelt som vi kan bruke. Komponenten heter TextField og har
en rekke properties vi skal bruke.
* hintText tar imot en tekststreng og viser denne strengen når tekstfeltet er tomt
* fullWidth tar imot en bolsk verdi, enten true eller false, som bestemmer om tekstfeltet skal prøve å ta
mest mulig tilgjengelig plass
* onChange tar imot en funksjon som blir kalt på hver gang noen skjer i tekstfeltet, enten sletting eller
skriving. onChange sender inn to parametere, newValue og event som ikke er så viktig til vårt behov. newValue
er den mest oppdaterte strengen som er skrevet i teksfeltet.
* onKeyDown tar også imot en funksjon og blir kalt på etter hvert tastetrykk fra tastatur. Den er veldig lik
onChange i den forstand, men den sender inn en viktig parameter, keyCode, som er et heltall som representerer
det brukeren tastet på tastaturet.
* value tar imot en tekststreng og er det som er skrevet i tekstfeltet.

Importer komponenten TextField i ChatPage og fyll inn valgfri tekst i hintText og sett fullWidth til true.
Husk at true og false er verdier i Javascript, men ikke i HTML.

For å ta vare på verdien i tekstfeltet så må vi ha et attributt i state. Kall denne for textFieldValue og sett den
til å være tom. Du kan deretter sette propertyen value i TextField til å bli lik this.state.textFieldValue.

Legg til følgende funksjon i ChatPage:
```
handleTextFieldChange(event, newValue) {
    this.setState({textFieldValue:newValue});
}
```

Forklaring:  
Attributtet state kan ikke bli endret direkte uten videre så derfor må vi bruke et asynkront kall (et kall
som skjer i en egen programflyt) på setState. Funksjonen setState tar imot et objekt med attributter du vil
endre på eller legge til i state.

__Oppgave 3.2\: MongoDB__  
For å kunne lagre alle meldingene i appen så må det bli lagret i en database. Meteor følger med MongoDB
som er på veldig mange måter lett å bruke. 

Importer MongoDB og deklarer en collection med navn Messages i imports/api/collections.js:
```
import { Mongo } from 'meteor/mongo';

const Messages = new Mongo.Collection('messages');

export {
    Messages
};

export default {
    Messages
};
```

Forklaring:  
Messages er en collection eller en tabell i databasen vår.

Nå blir du nødt til å avslutte Meteor hvis du har den kjørende i en termninal. Du skal nemlig fjerne en pakke
som er inkludert i prosjektet fra før. Gjør dette ved å kjøre kommandoen "meteor remove autopublish".

Forklaring:
autopublish er et verktøy som fjerner veldig mye logikk fra databasen vår ved å gi alle klienter tilgang til
all data i en gitt collection. Dette er ikke så bra for oss fordi vi vil ha flere chatrom. Tenk hvis alle
hadde sett alle sine meldinger uavhengig av hvilket rom du er i. Fyr opp meteor igjen og fortsett!

Inkluder følgende kode i publicasions.js:
```
import { Messages } from '/imports/api/collections.js';

Meteor.publish('messages.byRoomNumber', (roomNumber) => {
    return Messages.find({roomNumber});
});
```

Forklaring:  
Vi legger til en logikk i databasen vår slik at serveren kun kan sende data til klienten som klienten spør om.
Med andre ord, klienten må vite romnummeret til chatrommet for å kunne få tak i data derfra.

Nå må vi lage en databasespørring (databasekode) slik at vi kan legge til data i databasen. Denne funksjonaliteten
må være tilgjenglig for klienten så dette blir da gjort i imports/startup/api/methods.js. Legg til følgende kode:
```
import { Messages } from '/imports/api/collections.js';

Meteor.methods({
    addMessage(roomNumber, messageString) {
        const message = {roomNumber, messageString};

        return Messages.insert(message);
    }
});
```

Forklaring:  
Akkurat som publish så putter vi inn logikk i Meteor bare at denne logikken gjør at vi kan legge til data i databasen.

Nå skal vi tilbake til komponenten ChatPage igjen og lage funksjonen handleKeyDown og ta i bruk databasen vår.
Legg til følgende kode i ChatPage:
```
handleKeyDown({keyCode}) {
    if(keyCode === 13) {
        Meteor.call('addMessage', this.props.roomNumber, this.state.textFieldValue);
        this.setState({textFieldValue:''});
    }
}
```

Forklaring:  
TextField sin onKeyDown property tar imot en funksjon og putter inn ett objekt som blant annet inneholder
keyCode. Når keyCode er like 13 så har brukeren trykker på enter-tasten. Vi bruker da Meteor.call() som
tar imot navnet på Meteor metoden vi lagde tidligere i publications.js og paramtere til den gitte metoden
og setter tekstfeltet til å være tomt igjen.

Husk å gjøre disse "bærbare" ved å knytte scopet til ChatPage til begge funksjonene i konstruktøren. Så kan du
sende handleKeyDown til propertyen onKeyDown.

__Oppgave 3.3\: Data fetching__  
Nå har du klart å sette data inn i databasen, men det er ikke nyttig hvis man ikke kan se det på appen.
Det er vanlig i React å dele opp komponenter i flere deler når de etterhvert blir store. Lag en ny
komponent med navn MessageBox med samme struktur som de andre komponentene. Denne komponenten skal være litt
annerledes med at det er en komponent som også har logikk på data og skal derfor ha en annen type 
klassedeklarasjon:
```
export default class MessageBox extends TrackerReact(Component)
```

Til dette må vi importere TrackerReact fra meteor/ultimatejs:tracker-react. Som en regel vi har satt for oss
selv så må vi definere hva slags data vi vil ha fra databasen for å kunne få data i det hele tatt. Vi trenger
roomNumber for dette så det kan vi få fra props. Vi sier til Meteor hvilke data vi vil ha ved å ha et kall på
subscribe i en subscription attributt i state:
```
this.state = {
    subscription: {
        messages: Meteor.subscribe('messages.byRoomNumber', props.roomNumber)
    }
};
```

For å faktisk hente denne dataen må vi han en funksjon som gjør en spørring på hva enn den kan få fra databasen.
Legg til denne funksjonen slik:
```
messages() {
    return Messages.find().fetch();
}
```

Nå som vi har dataene vi ville ha, kan vi vise dem i render. Her er det mye frihet, et simpelt forslag er å gjøre
det slik:
```
render() {
    const messageList = this.messages();
    return (
        <div>
            {messageList.map((message, index)=>{
                return (
                    <p key={index}>
                        {message.messageString}
                    </p>
                );
            })}
        </div>
    );
}
```

__Oppgave 3 fullført! Hva har vi lært?__  
* Hvordan håndtere logikk for tekstfelter
* Hvor lett det er å sette opp en MongoDB database og bruke den

__Oppgave 4.1\: Join__  
Helt tilbake til knappen for Join i LandingPage, knappen er fortsatt helt tom og har ingen funksjonalitet. Bruk
det du har lært for å lage en side som spør brukeren om en pin-kode og fører brukeren til riktig chat-rom.
Siden kan se slik ut:
![alt tag](http://heim.ifi.uio.no/uqtran/Applitude/Chat-app/join-page.png)

__Videre__  
Dette er bare begynnelsen, skjellettet på appen. Det er mye mer man kan gjøre som er mye morsommere. Alt fra
farger, animasjoner, brukere, mer fonksjonalitet og mer robusthet kan blir lagt til i appen. Bli med i neste kurs 
når vi går enda mer i dybden på Meteor og React!
