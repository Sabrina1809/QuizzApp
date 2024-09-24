const questions = [
  {
    question: "Welches HTML-Element wird verwendet, um einen Link zu erstellen?",
    answer_1: "<a>",
    answer_2: "<link>",
    answer_3: "<href>",
    answer_4: "<url>",
    right_answer: 1
  },
  {
    question: "Was bedeutet 'defer' im Zusammenhang mit einem <script>-Tag?",
    answer_1: "Das Script wird asynchron geladen und vor dem DOM-Parsing ausgeführt",
    answer_2: "Das Script wird synchron geladen und ausgeführt",
    answer_3: "Das Script wird asynchron geladen und nach dem DOM-Parsing ausgeführt",
    answer_4: "Das Script wird parallel geladen und sofort ausgeführt",
    right_answer: 3
  },
  {
    question: "Wie definiert man eine JavaScript-Klasse?",
    answer_1: "class MyClass { constructor() { } }",
    answer_2: "function MyClass() { }",
    answer_3: "defineClass MyClass() { }",
    answer_4: "class() MyClass { constructor() { } }",
    right_answer: 1
  },
  {
    question: "Was bedeutet 'this' in einer JavaScript-Funktion?",
    answer_1: "Referenz auf das globale Objekt",
    answer_2: "Referenz auf das Element, das die Funktion aufgerufen hat",
    answer_3: "Referenz auf das aktuelle Dokument",
    answer_4: "Referenz auf den nächsten Funktionsaufruf",
    right_answer: 2
  },
  {
    question: "Wie verhält sich 'const' in JavaScript?",
    answer_1: "Die Variable kann neu zugewiesen werden, aber nicht neu definiert",
    answer_2: "Die Variable kann weder neu zugewiesen noch neu definiert werden",
    answer_3: "Die Variable kann neu definiert, aber nicht neu zugewiesen werden",
    answer_4: "Die Variable kann nur innerhalb eines Blocks neu zugewiesen werden",
    right_answer: 2
  },
  {
    question: "Wie kann man in CSS eine Flexbox-Container erstellen?",
    answer_1: "display: block;",
    answer_2: "display: grid;",
    answer_3: "display: inline-flex;",
    answer_4: "display: flex;",
    right_answer: 4
  },
  {
    question: "Was ist der Unterschied zwischen 'const' und 'let' in JavaScript?",
    answer_1: "'const' erlaubt keine Neuinitialisierung, 'let' schon",
    answer_2: "'let' gilt nur in Schleifen, 'const' ist global",
    answer_3: "'const' ist funktional, 'let' ist blockbezogen",
    answer_4: "Es gibt keinen Unterschied",
    right_answer: 1
  },
  {
    question: "Was wird bei folgendem Code ausgegeben?\n\nlet x = 1;\nif (true) {\n  let x = 2;\n  console.log(x);\n}\nconsole.log(x);",
    answer_1: "1, 1",
    answer_2: "2, 1",
    answer_3: "2, 2",
    answer_4: "1, 2",
    right_answer: 2
  },
  {
    question: "Was bewirkt 'display: none' in CSS?",
    answer_1: "Versteckt das Element, aber reserviert Platz",
    answer_2: "Versteckt das Element komplett, ohne Platz zu reservieren",
    answer_3: "Macht das Element transparent, aber klickbar",
    answer_4: "Ändert die Sichtbarkeit, ohne das Layout zu beeinflussen",
    right_answer: 2
  },
  {
    question: "Wie wird ein Promise in JavaScript erstellt?",
    answer_1: "new Promise()",
    answer_2: "promise.create()",
    answer_3: "createPromise()",
    answer_4: "new.promise()",
    right_answer: 1
  },
  {
    question: "Was macht die 'async'-Funktion in JavaScript?",
    answer_1: "Kennzeichnet eine Funktion als asynchron, wodurch sie ein Promise zurückgibt",
    answer_2: "Macht den Funktionsaufruf sofort blockierend",
    answer_3: "Verwandelt alle Rückgabewerte in Promises",
    answer_4: "Stellt sicher, dass die Funktion synchron ausgeführt wird",
    right_answer: 1
  },
  {
    question: "Welcher Operator wird verwendet, um 'AND' in JavaScript zu implementieren?",
    answer_1: "&&",
    answer_2: "||",
    answer_3: "&",
    answer_4: "and()",
    right_answer: 1
  },
  {
    question: "Welcher Befehl kann verwendet werden, um eine Seite in HTML zu aktualisieren?",
    answer_1: "location.reload()",
    answer_2: "window.load()",
    answer_3: "document.refresh()",
    answer_4: "page.update()",
    right_answer: 1
  },
  {
    question: "Wie kann man den ersten Buchstaben eines Strings in JavaScript großschreiben?",
    answer_1: "str.capitalize()",
    answer_2: "str[0].toUpperCase() + str.slice(1)",
    answer_3: "str.firstUpper()",
    answer_4: "str.upperFirst()",
    right_answer: 2
  },
  {
    question: "Wie erstellt man eine Medienabfrage in CSS?",
    answer_1: "@media (min-width: 600px) { }",
    answer_2: "media-query: screen and (min-width: 600px)",
    answer_3: "@screen (min-width: 600px) { }",
    answer_4: "query(media) and (min-width: 600px)",
    right_answer: 1
  },
  {
    question: "Was gibt 'Array.isArray([1, 2, 3])' in JavaScript zurück?",
    answer_1: "null",
    answer_2: "true",
    answer_3: "false",
    answer_4: "undefined",
    right_answer: 2
  },
  {
    question: "Wie entfernt man den ersten Eintrag aus einem Array in JavaScript?",
    answer_1: "array.pop()",
    answer_2: "array.shift()",
    answer_3: "array.removeFirst()",
    answer_4: "array.delete(0)",
    right_answer: 2
  },
  {
    question: "Was ist 'event.preventDefault()' in JavaScript?",
    answer_1: "Verhindert das Standardverhalten eines Events",
    answer_2: "Bricht die Event-Ausführung ab",
    answer_3: "Hält die Seite an, bis das Event abgeschlossen ist",
    answer_4: "Verhindert, dass ein Event an Elternknoten weitergegeben wird",
    right_answer: 1
  },
  {
    question: "Was macht die CSS-Eigenschaft 'z-index'?",
    answer_1: "Ändert die horizontale Position eines Elements",
    answer_2: "Ändert die Stapelreihenfolge von Elementen auf der Z-Achse",
    answer_3: "Vergrößert die Höhe eines Elements",
    answer_4: "Definiert die vertikale Reihenfolge eines Elements im Layout",
    right_answer: 2
  },
  {
    question: "Was ist die richtige Syntax für eine Pfeilfunktion in JavaScript?",
    answer_1: "let myFunc = (a) => a + 1;",
    answer_2: "let myFunc = -> (a) a + 1;",
    answer_3: "function myFunc => a + 1;",
    answer_4: "myFunc = (a) => return a + 1;",
    right_answer: 1
  },
  {
    question: "Wie definiert man einen Standardwert für eine JavaScript-Funktion?",
    answer_1: "function myFunc(a = 10) { }",
    answer_2: "function myFunc(a: 10) { }",
    answer_3: "function myFunc(a -> 10) { }",
    answer_4: "function myFunc(10) { }",
    right_answer: 1
  },
  {
    question: "Was macht der Befehl 'window.localStorage.setItem()' in JavaScript?",
    answer_1: "Speichert einen Wert temporär im Browser",
    answer_2: "Speichert Daten auf dem Server",
    answer_3: "Speichert einen Schlüssel-Wert-Paar im lokalen Speicher des Browsers",
    answer_4: "Löscht Daten aus dem Browser-Cache",
    right_answer: 3
  },
  {
    question: "Was bedeutet 'position: absolute' in CSS?",
    answer_1: "Positioniert das Element relativ zu seinem nächsten Verwandten",
    answer_2: "Positioniert das Element relativ zum Dokument",
    answer_3: "Positioniert das Element statisch",
    answer_4: "Ändert die Position des Eltern-Elements",
    right_answer: 1
  },
  {
    question: "Wie ruft man eine externe JavaScript-Datei auf?",
    answer_1: "<script src='file.js'></script>",
    answer_2: "<javascript src='file.js'></javascript>",
    answer_3: "<script href='file.js'></script>",
    answer_4: "<script source='file.js'></script>",
    right_answer: 1
  },
  {
    question: "Wie entfernt man einen Event-Listener in JavaScript?",
    answer_1: "element.removeEventListener()",
    answer_2: "element.detachEvent()",
    answer_3: "element.unbind()",
    answer_4: "element.cancelListener()",
    right_answer: 1
  },
  {
    question: "Welcher HTTP-Statuscode bedeutet 'Not Found'?",
    answer_1: "200",
    answer_2: "404",
    answer_3: "500",
    answer_4: "302",
    right_answer: 2
  },
  {
    question: "Was macht die Methode 'Array.prototype.map()' in JavaScript?",
    answer_1: "Ändert das Array direkt",
    answer_2: "Erstellt ein neues Array basierend auf einer Funktion",
    answer_3: "Fügt ein Element am Anfang eines Arrays hinzu",
    answer_4: "Reduziert das Array auf einen Wert",
    right_answer: 2
  },
  {
    question: "Was bedeutet 'position: fixed' in CSS?",
    answer_1: "Das Element wird relativ zu seinem nächsten Container positioniert",
    answer_2: "Das Element bleibt immer an derselben Stelle im Viewport",
    answer_3: "Das Element verschiebt sich mit dem Scrollen der Seite",
    answer_4: "Das Element wird über anderen Elementen platziert",
    right_answer: 2
  },
  {
    question: "Wie kann man in JavaScript eine JSON-Zeichenkette in ein Objekt umwandeln?",
    answer_1: "JSON.stringify()",
    answer_2: "JSON.parse()",
    answer_3: "parseJSON()",
    answer_4: "toJSON()",
    right_answer: 2
  },
  {
    question: "Was macht 'padding' in CSS?",
    answer_1: "Ändert den Abstand außerhalb des Rahmens eines Elements",
    answer_2: "Ändert den inneren Abstand innerhalb des Rahmens eines Elements",
    answer_3: "Setzt die Breite eines Elements",
    answer_4: "Verändert die Hintergrundfarbe eines Elements",
    right_answer: 2
  },
  {
    question: "Wie ändert man in JavaScript den Textinhalt eines HTML-Elements?",
    answer_1: "element.innerText = 'Neuer Text';",
    answer_2: "element.textContent = 'Neuer Text';",
    answer_3: "element.value = 'Neuer Text';",
    answer_4: "element.innerHTML = 'Neuer Text';",
    right_answer: 2
  },
  {
    question: "Was wird bei folgendem Code ausgegeben?\n\nlet x = '10';\nlet y = 5;\nconsole.log(x - y);",
    answer_1: "NaN",
    answer_2: "'105'",
    answer_3: "5",
    answer_4: "5",
    right_answer: 3
  },
  {
    question: "Was macht die Methode 'Array.prototype.reduce()' in JavaScript?",
    answer_1: "Erstellt ein neues Array basierend auf einer Funktion",
    answer_2: "Reduziert das Array auf einen einzigen Wert",
    answer_3: "Ändert das Array direkt",
    answer_4: "Entfernt den ersten Eintrag im Array",
    right_answer: 2
  },
  {
    question: "Wie ruft man in JavaScript die Breite des Browser-Fensters ab?",
    answer_1: "window.innerWidth",
    answer_2: "document.body.clientWidth",
    answer_3: "window.screen.width",
    answer_4: "window.clientWidth",
    right_answer: 1
  },
  {
    question: "Was macht 'box-shadow' in CSS?",
    answer_1: "Fügt einem Element eine Schattierung hinzu",
    answer_2: "Ändert die Transparenz eines Elements",
    answer_3: "Erstellt eine Box um ein Element",
    answer_4: "Verändert die Größe eines Elements",
    right_answer: 1
  },
  {
    question: "Was macht 'setTimeout()' in JavaScript?",
    answer_1: "Ruft eine Funktion wiederholt in einem bestimmten Intervall auf",
    answer_2: "Führt eine Funktion nach einer Verzögerung einmalig aus",
    answer_3: "Stoppt die Ausführung eines Codes für eine bestimmte Zeit",
    answer_4: "Pausiert die Ausführung der gesamten Seite für die angegebene Zeit",
    right_answer: 2
  },
  {
    question: "Was bedeutet 'em' in CSS?",
    answer_1: "Eine relative Maßeinheit, basierend auf der Schriftgröße des Elternelements",
    answer_2: "Eine absolute Maßeinheit, festgelegt in Pixeln",
    answer_3: "Eine Einheit zur Definition von Bildgrößen",
    answer_4: "Eine Einheit, die die Breite des Bildschirms beschreibt",
    right_answer: 1
  },
  {
    question: "Was bewirkt 'document.createElement()' in JavaScript?",
    answer_1: "Erstellt ein neues HTML-Dokument",
    answer_2: "Fügt ein HTML-Element zu einer bestehenden Seite hinzu",
    answer_3: "Erstellt ein neues HTML-Element",
    answer_4: "Entfernt ein bestehendes HTML-Element",
    right_answer: 3
  },
  {
    question: "Wie kann man in CSS einen Hover-Effekt erzeugen?",
    answer_1: ":hover { color: red; }",
    answer_2: "::hover { color: red; }",
    answer_3: "hover { color: red; }",
    answer_4: "@hover { color: red; }",
    right_answer: 1
  },
  {
    question: "Wie verhindert man in JavaScript das Absenden eines Formulars?",
    answer_1: "event.preventDefault()",
    answer_2: "return false",
    answer_3: "form.stop()",
    answer_4: "form.prevent()",
    right_answer: 1
  },
  {
    question: "Was bewirkt 'background-clip: content-box' in CSS?",
    answer_1: "Der Hintergrund wird auf den Inhalt beschränkt",
    answer_2: "Der Hintergrund wird auf den Rahmen des Elements beschränkt",
    answer_3: "Der Hintergrund wird auf den gesamten Elementbereich beschränkt",
    answer_4: "Der Hintergrund wird auf den inneren Rand des Elements beschränkt",
    right_answer: 1
  },
  {
    question: "Wie überprüft man in JavaScript, ob eine Variable ein Array ist?",
    answer_1: "typeof variable === 'array'",
    answer_2: "Array.isArray(variable)",
    answer_3: "variable.instanceof Array",
    answer_4: "variable.isArray()",
    right_answer: 2
  },
  {
    question: "Was bedeutet 'position: relative' in CSS?",
    answer_1: "Das Element wird relativ zu seinem normalen Platz im Dokumentfluss verschoben",
    answer_2: "Das Element wird relativ zu seinem Elternelement positioniert",
    answer_3: "Das Element bleibt fest im Fenster positioniert",
    answer_4: "Das Element wird relativ zum nächsten Nachbarelement positioniert",
    right_answer: 1
  },
  {
    question: "Was bewirkt 'transform: rotate(45deg)' in CSS?",
    answer_1: "Dreht das Element um 45 Grad im Uhrzeigersinn",
    answer_2: "Dreht das Element um 45 Grad gegen den Uhrzeigersinn",
    answer_3: "Vergrößert das Element um das 45-fache",
    answer_4: "Verkleinert das Element um 45 Grad",
    right_answer: 1
  },
  {
    question: "Wie kann man eine forEach-Schleife in JavaScript abbrechen?",
    answer_1: "Mit 'break'",
    answer_2: "Mit 'return'",
    answer_3: "Mit 'exit'",
    answer_4: "Es ist nicht möglich, eine forEach-Schleife zu unterbrechen",
    right_answer: 4
  },
  {
    question: "Was bewirkt 'opacity: 0' in CSS?",
    answer_1: "Das Element wird vollständig transparent, aber bleibt klickbar",
    answer_2: "Das Element wird unsichtbar und nicht klickbar",
    answer_3: "Das Element wird halbtransparent",
    answer_4: "Das Element wird sichtbar, aber transparent",
    right_answer: 1
  },
  
  // Fortsetzung von 61-80:
  {
    question: "Wie selektiert man in CSS ein Element mit der ID 'header'?",
    answer_1: "#header",
    answer_2: ".header",
    answer_3: "header",
    answer_4: "$header",
    right_answer: 1
  },
  {
    question: "Welches Schlüsselwort wird verwendet, um eine Konstante in JavaScript zu definieren?",
    answer_1: "let",
    answer_2: "var",
    answer_3: "const",
    answer_4: "constant",
    right_answer: 3
  },
  {
    question: "Wie bindet man eine Schriftart in CSS ein?",
    answer_1: "@font-face",
    answer_2: "@import",
    answer_3: "font-family",
    answer_4: "@font-url",
    right_answer: 1
  },
  {
    question: "Wie selektiert man alle <div>-Elemente in CSS?",
    answer_1: "#div",
    answer_2: ".div",
    answer_3: "div",
    answer_4: "*div",
    right_answer: 3
  },
  {
    question: "Was bedeutet 'line-height' in CSS?",
    answer_1: "Die Breite einer Zeile Text",
    answer_2: "Der Abstand zwischen Zeilen innerhalb eines Elements",
    answer_3: "Der Abstand zwischen Buchstaben in einer Zeile",
    answer_4: "Die Höhe der Buchstaben in einer Zeile",
    right_answer: 2
  },
  {
    question: "Wie kann man in JavaScript ein Element zu einem Array hinzufügen?",
    answer_1: "array.push(element)",
    answer_2: "array.append(element)",
    answer_3: "array.insert(element)",
    answer_4: "array.add(element)",
    right_answer: 1
  },
  {
    question: "Was bedeutet 'z-index' in CSS?",
    answer_1: "Es bestimmt die Größe eines Elements",
    answer_2: "Es bestimmt die Position eines Elements auf der Z-Achse (Tiefe)",
    answer_3: "Es bestimmt die Transparenz eines Elements",
    answer_4: "Es bestimmt den Abstand eines Elements",
    right_answer: 2
  },
  {
    question: "Was macht die 'addEventListener'-Methode in JavaScript?",
    answer_1: "Fügt einem HTML-Element einen Event-Listener hinzu",
    answer_2: "Startet einen Timer für ein Event",
    answer_3: "Verbindet ein HTML-Element mit einem anderen",
    answer_4: "Löscht einen bestehenden Event-Listener",
    right_answer: 1
  },
  {
    question: "Wie initialisiert man eine Variable in JavaScript?",
    answer_1: "let variableName = value;",
    answer_2: "variable variableName = value;",
    answer_3: "var variableName = value;",
    answer_4: "init variableName = value;",
    right_answer: 1
  },
  {
    question: "Was ist das Ergebnis von 'typeof NaN' in JavaScript?",
    answer_1: "'number'",
    answer_2: "'undefined'",
    answer_3: "'NaN'",
    answer_4: "'object'",
    right_answer: 1
  },

  // Weitere Fragen bis 100:

  {
    question: "Wie selektiert man alle direkten Kinder eines Elements in CSS?",
    answer_1: ">",
    answer_2: "~",
    answer_3: "+",
    answer_4: "*",
    right_answer: 1
  },
  {
    question: "Was bewirkt 'overflow: hidden' in CSS?",
    answer_1: "Verhindert das Anzeigen von überlaufendem Inhalt",
    answer_2: "Zeigt überlaufenden Inhalt an",
    answer_3: "Verhindert das Scrollen",
    answer_4: "Verhindert das Ändern der Größe eines Elements",
    right_answer: 1
  },
  {
    question: "Was bedeutet 'JSON'?",
    answer_1: "JavaScript Object Notation",
    answer_2: "Java Syntax Object Number",
    answer_3: "JavaScript Oriented Notation",
    answer_4: "JavaScript Object Numbers",
    right_answer: 1
  },
  {
    question: "Wie überprüft man, ob eine Zahl in JavaScript ungerade ist?",
    answer_1: "if (num % 2 === 1)",
    answer_2: "if (num % 2 === 0)",
    answer_3: "if (num.isOdd())",
    answer_4: "if (num === odd)",
    right_answer: 1
  },
  {
    question: "Was bedeutet 'typeof null' in JavaScript?",
    answer_1: "'null'",
    answer_2: "'undefined'",
    answer_3: "'object'",
    answer_4: "'number'",
    right_answer: 3
  },
  {
    question: "Welches Attribut wird verwendet, um eine Bildquelle anzugeben?",
    answer_1: "src",
    answer_2: "href",
    answer_3: "alt",
    answer_4: "link",
    right_answer: 1
  },
  {
    question: "Wie rundet man in JavaScript eine Zahl ab?",
    answer_1: "Math.round()",
    answer_2: "Math.ceil()",
    answer_3: "Math.floor()",
    answer_4: "Math.abs()",
    right_answer: 1
  },
  {
    question: "Was macht 'setInterval()' in JavaScript?",
    answer_1: "Ruft eine Funktion wiederholt nach einer festgelegten Zeit auf",
    answer_2: "Ruft eine Funktion einmal nach einer Verzögerung auf",
    answer_3: "Beendet die Ausführung eines Codes für eine bestimmte Zeit",
    answer_4: "Pausiert die Ausführung der gesamten Seite für die angegebene Zeit",
    right_answer: 1
  },
  {
    question: "Wie bindet man eine externe CSS-Datei in HTML ein?",
    answer_1: "<style src='style.css'>",
    answer_2: "<link href='style.css' rel='stylesheet'>",
    answer_3: "<script src='style.css'>",
    answer_4: "<css link='style.css'>",
    right_answer: 2
  },
  {
    question: "Was ist das Ergebnis von 2 + '2' in JavaScript?",
    answer_1: "4",
    answer_2: "'22'",
    answer_3: "undefined",
    answer_4: "'4'",
    right_answer: 2
  },
  {
    question: "Was bewirkt die Eigenschaft 'text-transform' in CSS?",
    answer_1: "Ändert die Schriftgröße",
    answer_2: "Transformiert Text in Groß- oder Kleinbuchstaben",
    answer_3: "Ändert den Zeilenabstand",
    answer_4: "Ändert die Schriftart",
    right_answer: 2
  },
  {
    question: "Wie erstellt man in JavaScript eine Funktion?",
    answer_1: "function name() { }",
    answer_2: "def name() { }",
    answer_3: "createFunction name() { }",
    answer_4: "func name() { }",
    right_answer: 1
  },
  {
    question: "Was bewirkt 'display: inline-block' in CSS?",
    answer_1: "Das Element wird als Block, aber in einer Linie dargestellt",
    answer_2: "Das Element wird nur in einer Linie dargestellt",
    answer_3: "Das Element wird als Block dargestellt",
    answer_4: "Das Element wird transparent",
    right_answer: 1
  },
  {
    question: "Wie bindet man eine JavaScript-Datei in HTML ein?",
    answer_1: "<script href='app.js'></script>",
    answer_2: "<script src='app.js'></script>",
    answer_3: "<js src='app.js'></js>",
    answer_4: "<script link='app.js'></script>",
    right_answer: 2
  },
  {
    question: "Was bedeutet 'NaN' in JavaScript?",
    answer_1: "Not a Null",
    answer_2: "Number and Null",
    answer_3: "Not a Number",
    answer_4: "Number and Negative",
    right_answer: 3
  },
  {
    question: "Wie definiert man in HTML einen Kommentar?",
    answer_1: "// Kommentar",
    answer_2: "/* Kommentar */",
    answer_3: "<!-- Kommentar -->",
    answer_4: "# Kommentar",
    right_answer: 3
  },
  {
    question: "Was bewirkt 'flex-wrap' in CSS?",
    answer_1: "Legt fest, ob Flexbox-Elemente auf mehrere Zeilen umbrechen",
    answer_2: "Zentriert die Flexbox-Elemente horizontal",
    answer_3: "Verteilt Flexbox-Elemente gleichmäßig",
    answer_4: "Ändert die Flex-Richtung von horizontal zu vertikal",
    right_answer: 1
  },
  {
    question: "Wie beendet man eine Schleife in JavaScript?",
    answer_1: "stop;",
    answer_2: "exit;",
    answer_3: "break;",
    answer_4: "end;",
    right_answer: 3
  },
  {
    question: "Wie definiert man eine Klasse in HTML?",
    answer_1: "<class='className'>",
    answer_2: "<div class='className'>",
    answer_3: "<element className>",
    answer_4: "<div className>",
    right_answer: 2
  },
  {
    question: "Was bedeutet 'float' in CSS?",
    answer_1: "Lässt das Element innerhalb seines Containers schweben",
    answer_2: "Hebt das Element hervor",
    answer_3: "Verankert das Element am oberen Rand",
    answer_4: "Erlaubt es dem Element, neben anderen Elementen zu schweben",
    right_answer: 4
  },
  {
    question: "Was ist das Ergebnis von 'null == undefined' in JavaScript?",
    answer_1: "true",
    answer_2: "false",
    answer_3: "'null'",
    answer_4: "undefined",
    right_answer: 1
  },
  {
    question: "Was ist der Zweck des 'alt'-Attributs in HTML?",
    answer_1: "Es definiert einen alternativen Text für ein Bild, falls dieses nicht geladen werden kann",
    answer_2: "Es definiert den Pfad eines Bildes",
    answer_3: "Es definiert den Stil eines Bildes",
    answer_4: "Es speichert den Titel des Bildes",
    right_answer: 1
  },
  {
    question: "Was bewirkt 'align-items: center' in CSS Flexbox?",
    answer_1: "Zentriert Elemente vertikal im Flexcontainer",
    answer_2: "Zentriert Elemente horizontal im Flexcontainer",
    answer_3: "Zentriert das gesamte Flexcontainer-Layout",
    answer_4: "Zentriert die Schriftgröße der Elemente",
    right_answer: 1
  },
  {
    question: "Wie löscht man ein Element aus einem Array in JavaScript?",
    answer_1: "array.remove(index)",
    answer_2: "array.splice(index, 1)",
    answer_3: "array.delete(index)",
    answer_4: "array.cut(index, 1)",
    right_answer: 2
  },
  {
    question: "Welches Attribut in HTML wird verwendet, um einen Link zu erstellen?",
    answer_1: "src",
    answer_2: "link",
    answer_3: "href",
    answer_4: "url",
    right_answer: 3
  },
  {
    question: "Was macht die Eigenschaft 'white-space' in CSS?",
    answer_1: "Legt fest, ob Leerzeichen und Zeilenumbrüche beibehalten oder ignoriert werden",
    answer_2: "Verändert die Hintergrundfarbe eines Elements",
    answer_3: "Definiert den Abstand zwischen Wörtern",
    answer_4: "Ändert die Schriftart eines Elements",
    right_answer: 1
  },
  {
    question: "Was ist der Unterschied zwischen '==' und '===' in JavaScript?",
    answer_1: "'==' vergleicht Werte ohne Typen zu berücksichtigen, '===' vergleicht auch die Typen",
    answer_2: "'==' vergleicht Typen ohne Werte zu berücksichtigen, '===' vergleicht nur Werte",
    answer_3: "'==' und '===' sind gleichwertig",
    answer_4: "'===' vergleicht Werte ohne Typen zu berücksichtigen, '==' vergleicht auch die Typen",
    right_answer: 1
  },
  {
    question: "Was bedeutet 'vh' in CSS?",
    answer_1: "Viewport Breite",
    answer_2: "Viewport Höhe",
    answer_3: "Element Breite",
    answer_4: "Element Höhe",
    right_answer: 2
  },
  {
    question: "Wie öffnet man einen Link in einem neuen Tab in HTML?",
    answer_1: "<a href='url' newtab>",
    answer_2: "<a href='url' target='_blank'>",
    answer_3: "<a href='url' open='_blank'>",
    answer_4: "<a href='url' new='_blank'>",
    right_answer: 2
  },
  {
    question: "Wie macht man in JavaScript eine Zahl negativ?",
    answer_1: "Math.neg(value)",
    answer_2: "value = value - (2 * value)",
    answer_3: "value = -value",
    answer_4: "value *= -1",
    right_answer: 3
  },
  {
    question: "Wie kann man in CSS einen Rahmen nur um die linke Seite eines Elements erstellen?",
    answer_1: "border-left: 1px solid;",
    answer_2: "border-only-left: 1px solid;",
    answer_3: "left-border: 1px solid;",
    answer_4: "border-side-left: 1px solid;",
    right_answer: 1
  },
  {
    question: "Was bedeutet 'DOM' in JavaScript?",
    answer_1: "Document Object Model",
    answer_2: "Data Output Model",
    answer_3: "Document Output Management",
    answer_4: "Data Object Model",
    right_answer: 1
  },
  {
    question: "Wie ruft man in JavaScript die Anzahl der Elemente in einem Array ab?",
    answer_1: "array.count",
    answer_2: "array.size",
    answer_3: "array.length",
    answer_4: "array.number",
    right_answer: 3
  },
  {
    question: "Was ist 'this' in JavaScript?",
    answer_1: "Ein Verweis auf das aktuelle Objekt",
    answer_2: "Ein Verweis auf das übergeordnete Objekt",
    answer_3: "Ein Verweis auf das globale Objekt",
    answer_4: "Ein Verweis auf das Funktionsobjekt",
    right_answer: 1
  },
  {
    question: "Wie kann man in CSS ein Hintergrundbild wiederholen?",
    answer_1: "background-repeat: yes;",
    answer_2: "background-repeat: repeat;",
    answer_3: "background-repeat: true;",
    answer_4: "background-repeat: all;",
    right_answer: 2
  },
  {
    question: "Wie fügt man einen Titel zu einer HTML-Seite hinzu?",
    answer_1: "<meta title='Seitenname'>",
    answer_2: "<header>Seitenname</header>",
    answer_3: "<title>Seitenname</title>",
    answer_4: "<name>Seitenname</name>",
    right_answer: 3
  },
  {
    question: "Wie verhindert man in JavaScript die Ausführung eines Standardereignisses?",
    answer_1: "preventDefault()",
    answer_2: "stopDefault()",
    answer_3: "cancelDefault()",
    answer_4: "stopAction()",
    right_answer: 1
  },
  {
    question: "Welches HTML-Attribut gibt eine eindeutige ID an?",
    answer_1: "class",
    answer_2: "id",
    answer_3: "name",
    answer_4: "key",
    right_answer: 2
  },
  {
    question: "Was ist der Unterschied zwischen 'inline' und 'block' Elementen in HTML?",
    answer_1: "Inline-Elemente haben keine Breiten- und Höhenattribute",
    answer_2: "Block-Elemente haben keine Breiten- und Höhenattribute",
    answer_3: "Inline-Elemente breiten sich über die gesamte Breite ihres Containers aus",
    answer_4: "Block-Elemente breiten sich nicht über die gesamte Breite aus",
    right_answer: 1
  }
];
