const questions = [
    {
      question: "Was ist das Grundgerüst eines HTML-Dokuments?",
      answer_1: `"<!DOCTYPE html>"`,
      answer_2: "<html><head><title></title></head><body></body></html>",
      answer_3: "<html><body></body></html>",
      answer_4: "<!DOCTYPE html><html></html>",
      right_answer: 2
    },
    {
      question: "Wie definiert man eine Klasse in CSS?",
      answer_1: ".classname { }",
      answer_2: "#classname { }",
      answer_3: "classname { }",
      answer_4: ".classname = { }",
      right_answer: 1
    },
    {
      question: "Welches Attribut in HTML wird verwendet, um ein Bild zu definieren?",
      answer_1: "src",
      answer_2: "href",
      answer_3: "alt",
      answer_4: "link",
      right_answer: 1
    },
    {
      question: "Welches HTML-Tag wird verwendet, um ein Formular zu erstellen?",
      answer_1: "<form>",
      answer_2: "<input>",
      answer_3: "<textarea>",
      answer_4: "<select>",
      right_answer: 1
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
      question: "Wie greift man in JavaScript auf ein HTML-Element per ID zu?",
      answer_1: "document.getElementById()",
      answer_2: "document.querySelector()",
      answer_3: "document.getElementByClass()",
      answer_4: "document.findById()",
      right_answer: 1
    },
    {
      question: "Welches CSS-Attribut ändert die Hintergrundfarbe eines Elements?",
      answer_1: "background-image",
      answer_2: "background-color",
      answer_3: "color",
      answer_4: "background-style",
      right_answer: 2
    },
    {
      question: "Wie kommentiert man eine Zeile in CSS?",
      answer_1: "// Kommentar",
      answer_2: "/* Kommentar */",
      answer_3: "<!-- Kommentar -->",
      answer_4: "-- Kommentar",
      right_answer: 2
    },
    {
      question: "Wie fügt man ein JavaScript in eine HTML-Seite ein?",
      answer_1: "<js>",
      answer_2: "<script>",
      answer_3: "<javascript>",
      answer_4: "<code>",
      right_answer: 2
    },
    {
      question: "Welches Attribut fügt in einem <img>-Tag einen Alternativtext hinzu?",
      answer_1: "src",
      answer_2: "alt",
      answer_3: "title",
      answer_4: "description",
      right_answer: 2
    },
    {
      question: "Welches HTML-Tag wird verwendet, um den Titel einer Webseite festzulegen?",
      answer_1: "<head>",
      answer_2: "<meta>",
      answer_3: "<title>",
      answer_4: "<header>",
      right_answer: 3
    },
    {
      question: "Wie lautet das Schlüsselwort zum Erstellen einer Funktion in JavaScript?",
      answer_1: "function",
      answer_2: "func",
      answer_3: "method",
      answer_4: "define",
      right_answer: 1
    },
    {
      question: "Wie selektiert man alle <p>-Elemente in CSS?",
      answer_1: "#p",
      answer_2: ".p",
      answer_3: "p",
      answer_4: "*p",
      right_answer: 3
    },
    {
      question: "Was macht 'box-sizing: border-box' in CSS?",
      answer_1: "Ermöglicht das Styling der Ränder",
      answer_2: "Schließt Padding und Border in die Breite und Höhe ein",
      answer_3: "Setzt die Box in eine Border",
      answer_4: "Ändert die Größe des Inhalts auf Basis der Border",
      right_answer: 2
    },
    {
      question: "Was ist der Unterschied zwischen '==' und '===' in JavaScript?",
      answer_1: "'==' überprüft nur den Wert, '===' überprüft Wert und Typ",
      answer_2: "Es gibt keinen Unterschied",
      answer_3: "'==' überprüft Wert und Typ, '===' überprüft nur den Wert",
      answer_4: "'===' wird in neueren JavaScript-Versionen nicht mehr verwendet",
      right_answer: 1
    },
    {
      question: "Was wird bei folgendem Code ausgegeben: console.log(typeof null);?",
      answer_1: "'null'",
      answer_2: "'undefined'",
      answer_3: "'object'",
      answer_4: "'number'",
      right_answer: 3
    },
    {
      question: "Welches HTML-Attribut wird verwendet, um einen Hyperlink zu definieren?",
      answer_1: "href",
      answer_2: "src",
      answer_3: "link",
      answer_4: "alt",
      right_answer: 1
    },
    {
      question: "Was wird bei folgendem Code ausgegeben?\n\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    console.log(count);\n  }\n}\nconst fn = outer();\nfn();\nfn();",
      answer_1: "0, 0",
      answer_2: "1, 1",
      answer_3: "1, 2",
      answer_4: "undefined, undefined",
      right_answer: 3
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
      question: "Wie definiert man eine Schleife in JavaScript, die 5-mal durchläuft?",
      answer_1: "for (let i = 1; i <= 5; i++)",
      answer_2: "while (i <= 5) { i++ }",
      answer_3: "do { i++ } while (i <= 5)",
      answer_4: "repeat (5) { }",
      right_answer: 1
    }
  ];

  