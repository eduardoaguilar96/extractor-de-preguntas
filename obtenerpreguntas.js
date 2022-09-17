const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

let preguntas = [];

fetch(
  "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
)
  .then((response) => response.json())
  .then((data) =>
    data.results.map((pregunta) => {
      preguntas.push({
        categoria: pregunta.category,
        pregunta: pregunta.question,
        correcta: pregunta.correct_answer,
        incorrecta: pregunta.incorrect_answer,
      });

      //console.log(pregunta.category)
      //console.log(pregunta.question)
      //console.log(pregunta.correct_answer)
      //console.log(pregunta.incorrect_answers)
    })
  ).then(() => console.log(preguntas));