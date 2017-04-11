# Chat App med ReactJS og Meteor

## 0: Forord ##
Dette kurset er ment til nybegynnere i React og Javascript, men helt grunnleggende
HTML-, CSS- og programmeringskunnskaper er forventet at du skal kunne. 

__Oppgave 0.1\: Editor__  
Kjør opp din favoritteditor/IDE! Jeg anbefaler Webstorm, men Eclipse og Atom fungerer også
helt fint. Webstorm koster orginalt 500EUR i året, men som UiO student så kan du få det gratis
ved å registrere deg her(husk å bruke UiO e-posten din): https://www.jetbrains.com/student/

__React__  
React er et front-end rammeverk som håndterer logikk på brukergrensesnittet til appen vår. Her bruker vi
konsepter som heter Components og Containers der Components er det som håndterer alt av rendering og visning av
brukergrensesnittet, mens Containers håndterer alt av databasespørringer og behandling av data som skal videre bli
sendt til Components.

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
Bruk kommandoen "meteor npm install --save react react-dom react-tap-event-plugin" i terminal eller kommandolinje
for å installere React-biblioteket  

__Oppgave 1.5\: Installering av Material-UI__  
Bruk kommandoen "meteor npm install --save material-ui" i terminal eller kommandolinje
for å installere React-biblioteket  

__Oppgave 1.6\: Sjekk!__  
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
    "react-tap-event-plugin": "^2.0.1"
  }
}
```

Hvis package-filen ser ut som bildet over kan du fortsette!

__Oppgave 1 fullført! Hva har vi lært?__  
* Hvordan vi installerer nye biblioteker med npm. Merk at kommandoen "meteor npm install"
kun fungerer med meteor.


## 2: React ##

__Oppgave 2.1\: Min chatteapp__  
Endelig kan du begynne å kode! Nå skal du gi appen et navn. Gjør dette ved å endre på tittelen
på nettsiden i client/main.html.

Javascript filen imports/ui/App.jsx er den første komponenten til appen vår. Innholdet i denne
blir vist helt på starten av appen. Til å starte med så må vi laste inn Material-UI temaet inn i
appen vår. Importer MuiThemeProvider ved å skrive følgende øverst i App.jsx filen:
```
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
```

I render-funksjonen til App.jsx vil vi at alle barnekomponentene(alle komponentene som blir 
brukt) til App-komponenten skal bruke dette temaet. Fuknsjonen skal da returnere noe som ser
ut som HTML-kode med HTML-elementer slik:
```
render() {
   return (
       <MuiThemeProvider></MuiThemeProvider>
   );
}
```

Vi vil helst ha minst mulig kode i denne komponenten akkurat som main-metoden i Java. 
App-komponenten skal derfor bare ha en barnekomponent. Lag en ny komponent i imports/ui som 
skal hete LandingPage.jsx og innholdet skal være, til å begynne med, veldig lik App.jsx:
```
import React, { Component } from 'react';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return;
    }
}
```

Akkurat nå er den helt tom så du kan prøve å legge til
en h1-element med navnet på appen inne i et div-element slik:
```
render() {
   return (
       <div className="landing-page">
            <h1>
                Ditt chat app navn her
            </h1>
       </div>
   );
}
```
React har litt andre navn på HTML-properties, men className er akkurat det samme som class i
vanlig HTML og CSS. Klassen landing-page er en klasse som er forhåndsdefinert i prosjektet,
men du må gjerne lage en egen i client/main.css.
I App.jsx kan du nå importere LandingPage.jsx slik:
```
import LandingPage from './LandingPage.jsx';
```

Husk at alt av importering alltid skal være øverst i filen!  
Videre så vil vi bruke LandingPage i App, men vi vil også wrappe temaet rundt LandingPage.
```
render() {
   return (
        <MuiThemeProvider>
            <LandingPage />
        </MuiThemeProvider>
   );
}
```

Lagre så skal appen være oppdatert hvis du allerede kjører meteor. Det kan ta litt tid på Windows, 
men på Linux og Mac skal appen oppdateres nesten med en gang.

Forklaring:  
Du har nettopp endret på en React-komponent. Komponenter har i hovedansvar i å rendere eller
tegne opp hva den har blitt bedt om. Derfor er HTML perfekt til dette.

__Vent litt!__ Du har gjort noe som ikke er god React kodeskikk!  
Det er ikke god React kodeskikk å hardkode tekst i HTML kode, dette er kanskje greit når du koder
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
såkalt Javascript-modus. Man kan bytte på denne modusen til HTML ved å skrive HTML igjen inne
i krøllparantesen og dette kan da gjentas i evigheter.

__Oppgave 2.2\: Legg til knapper__  
