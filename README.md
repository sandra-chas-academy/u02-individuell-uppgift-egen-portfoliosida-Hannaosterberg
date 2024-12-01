# u02 - Egen portfoliosida, Hannaosterberg

### Sammanfattning av arbete: 

Jag tyckte detta projektet var svårstartat, vi skulle bygga vidare på u01 projektet fast göra det till eget med en fetch av json fil där mitt cv skulle ligga och lägga till funktionalitet med Javascript. Det som var svårt att komma igång med var vad för funktionalitet man skulle addera till sidan då jag inte vet vad man kan lägga till med Javascript. Jag började med att designa sidan och strukturera upp den då jag gjorde en helt ny sida istället för att använda det tidigare u01 projektets mall men utgick ändå från samma struktur. Jag arbetade med att göra klart första sektionen för att sedan göra “about”, “projects” och slutligen “contact”-sektionen.  HTML-strukturen blev kortare då jag istället valde att addera många taggar med innerHTML i Javascript och de taggar jag hade i dokumentet hämtade jag med queryselctor i min Javascript-fil. Jag utgick från mobilefirst på 375px och mina andra brytpunkter är 768px, 1024px och 1200px. 

Det första jag skrev i min Javascript-kod var en async await-funktion och använde fetch för att hämta datan från json-filen. Sedan skrev jag en funktion där jag läste ut datan till hemsidan med innerHTML. Detta hade vi arbetat med tidigare så jag visste hur jag skulle skriva koden men problemet jag stötte på här var att jag bara fick ut information om ett av jobben från datan. Det enda jag behövde göra för att lösa problemet var att lägga till “+=” i min innerHTML. När detta var klart gick jag vidare till att hämta mina repon och gjorde en till async await funktion med fetch från github API och även en funktion där jag läste ut data från det. Detta var svårt till en början då jag först inte förstod hur jag skulle hämta API:et men efter lite google sökningar fick jag till det. För att lägga till bilderna till de olika projekten gjorde jag ytterligare en lista i min json-fil för dessa och hämtade dem från en tidigare async-funktion för att sedan använda array metoden find. Detta var lite klurigt till en början men det fungerade tillslut. Jag adderade även en loader som visas när min repon hämtas från API:et. Jag adderade även event lyssnare med “click” funktion på lite olika ställen där det passade såsom nav-baren, för att få ut info om de olika jobben, för darkmode och för att scrollas upp till toppen av sidan. 

För att summera så är jag nöjd över mitt projekt, det finns utrymme för förbättringar och jag hade även velat ha lite mer funktionalitet så som scroll funktioner och dylikt men tiden räckte inte till. Jag har fått med alla krav utifrån kravspecifikationen och även VG-kraven och det är jag nöjd över. När det kommer till SEO har jag inte lagt till några metataggar och min prestanda kan bli bättre, jag har komprimerat bilderna men kunde även gjort dessa ännu mindre då det kan förbättra min prestanda på sidan. 


### Instuderingsfrågor:

1. __Vad kan man utveckla m.h.a av Javascript inom frontend?__
   
Inom frontend finns det mycket man kan göra med hjälp av Javascript, du kan skapa webbapplikationer, webbsidor, mobilappar, interaktiva kartor, animationer och spel mm. Javascript används för att göra webbsidor och applikationer interaktiva och dynamiska. Nästan alla webbsidor och applikationer du stöter på idag använder Javascript och tillsammans med HTML och CSS utgör de grunden för alla dessa. 
T ex inom AI har många utvecklare använt JS för att bygga webbsidor och system som utnyttjar AI. JS används också för att göra de flesta spel och applikationer på internet. Detta eftersom det körs direkt i webbläsaren och JS tillåter användare att spela spel och köra applikationer utan att ladda ner programvara. Utvecklare kan med hjälp av Javascript skapa enkla arkadspel till större solida flerspelarspel. 
Bara för att nämna några exempel, Javascript är ett av de mest kraftfulla och mångsidiga språken för frontendutvecklare som tillåter dig att skapa nästan vad som helst. Det ger en utvecklare stor flexibilitet och kontroll över användarupplevelsen på webben, vilket gör det till ett nödvändigt verktyg i moderna webbapplikationer. 


3. __Vad är JSON och hur används det inom frontend?__
   
JSON eller Javascript Object Notation är ett lättviktigt datautbytesformat. Det används för att skicka data från backend till frontend. Oftast kommer datan från en server och backend omvandlar detta till JSON. 
JSON har två huvudsakliga datastrukturer:
Arrayer, en ordnad lista av värden.
Objekt, en samling av nyckel/värdepar. 
Eftersom formatet endast är text kan JSON-data skickas mellan datorer och användas av vilket programmeringspråk som helst. Javascript-objekt och JSON har liknande syntax och i ett javascript-program kan man då enkelt konvertera JSON-datan till Javascript-objekt. För att konvertera en JSON-sträng till JS-objekt: JSON.parse() och för att konvertera objekt till JSON-sträng: JSON.stringify(). 
Sammafattningsvis används JSON inom frontend-utveckling för att hantera och utbyta data mellan klienten och servern. 	


4. __Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?__

HTTP eller hypertext Transfer Protocol är grunden för all datakommunikation på internet. Detta protokoll gör det möjligt för din webbläsare att hämta och visa webbsidor och i detta finns HTTP-metoder som definierar de åtgärder en klient kan utföra. 
Dessa HTTP-metoder har var och en ett specifikt syfte och ger ett standardiserat sätt för klienter såsom webbläsare eller applikationer att interagera med webbservrar. 
GET-metoden används för att begära data från en specifik resurs.
POST-metoden används för att skicka in data som ska bearbetas av en resurs. 
PUT-metoden används för att uppdatera en resurs eller skapa den om den inte finns.
DELETE-metoden används för att begära borttagning av en resurs. 
Som frontend-utvecklare skapar vi användargränssnitt som hämtar data från servern och skickar data tillbaka. Det är grundläggande för oss att förstå hur HTTP och dess protokoll fungerar för att effektivt kunna utveckla applikationer-och webbsidor. Och även för att kunna felsöka problem som kan uppstå under utvecklingsprocessen.


#### Länk till netlify: <https://portofoliosite-hannaaosterberg.netlify.app/>



