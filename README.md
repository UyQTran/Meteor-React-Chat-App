# Chat App med ReactJS og Meteor

## 0: Forord ##
Dette kurset er ment til nybegynnere i React og Javascript, men helt grunnleggende
HTML-, CSS- og programmeringskunnskaper er forventet at du skal kunne. 

__Oppgave 0.1\: Editor__  
Kjør opp din favoritteditor/IDE! Jeg anbefaler IntelliJ, men Eclipse og Atom fungerer også
helt fint. IntelliJ koster orginalt 500EUR i året, men som UiO student så kan du få det gratis
ved å registrere deg her(husk å bruke UiO e-posten din): https://www.jetbrains.com/student/


__React__  
React er et front-end rammeverk som håndterer logikk på brukergrensesnittet til appen vår. Her bruker vi
konsepter som heter Components og Containers der Components er det som håndterer alt av rendering og visning av
brukergrensesnittet, mens Containers håndterer alt av databasespørringer og behandling av data som skal videre bli
sendt til Components.

Mer dokumentasjon om React: https://facebook.github.io/react/docs/hello-world.html

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

![alt tag](http://heim.ifi.uio.no/uqtran/Applitude/Chat-app/package-dependencies.png)

Hvis package-filen ser ut som bildet over kan du fortsette!

__Oppgave 1 fullført! Hva har vi lært?__  
* Hvordan vi installerer nye biblioteker med npm. Merk at kommandoen "meteor npm install"
kun fungerer med meteor.


## 2: React ##

__Oppgave 2.1\: __  