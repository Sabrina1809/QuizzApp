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
  }
];