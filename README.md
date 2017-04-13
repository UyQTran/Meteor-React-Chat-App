# Applitude - Chat App med ReactJS og Meteor

## 0: Forord ##
Dette kurset er ment til nybegynnere i React og Javascript, men helt grunnleggende
HTML-, CSS- og programmeringskunnskaper er forventet at du skal kunne. 

__Oppgave 0.1\: Editor__  
Kjør opp din favoritteditor/IDE! Jeg anbefaler Webstorm, men Eclipse og Atom fungerer også
helt fint. Webstorm koster orginalt 500EUR i året, men som UiO student så kan du få det gratis
ved å registrere deg her(husk å bruke UiO e-posten din): https://www.jetbrains.com/student/

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
"meteor add kadira:flow-router alanning:roles meteorhacks:subs-manager ultimatejs:tracker-react"


__Oppgave 1.7\: Skjekk!__  
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
Akkurat som klasser i Java så deklarer vi klasser i Javascript på nesten samme måte. Den eneste forskjellen er
at vi må eksportere klassen i tillegg for at andre komponenter kan importere klassen. Ved at klassen arver 
Component fra React gjør klassen om til en React komponent!
Alle komponenter i React har en funksjon med navn "render" og en konstruktør som tar imot "props" eller properties
som i HTML properties. 
Funksjonen render tegner opp HTML-koden den returnerer.

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
 
I javascript bruker vi ofte objekter som state. I koden over har state et attributt som heter
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

Flatbutton har en property, "onTouchTap", som tar imot en Javascript lambda-funksjon som 
blir kalt på når knappen blir trykket på.