"user strict";

// babeltest
// const foo = (a, b) => a + b;

// meny-navigering öppna och stäng.
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

//variabler
let projektOutput = document.getElementById("projects-output");
let courseOutput = document.getElementById("courses-output");
let workOutput = document.getElementById("work-output");

// händelsehanterare
window.addEventListener("load", getProjects);
window.addEventListener("load", getCourses);
window.addEventListener("load", getWork);

// hämta projekt från api.
function getProjects() {
  // töm output.
  projektOutput.innerHTML = "";

  // fetch-anrop och skriv ut innehållet till output.
  fetch(
    "https://studenter.miun.se/~joka2005/writeable/webb3/API/student-API/websiteAPI.php"
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach(function (web) {
        // kontroll
        // console.log(web);
        projektOutput.innerHTML += `
      <div class="website">
      <img src="${web.website_img}" alt="Webbplats-${web.website_name}"/>
      <div class="project-overlay">
      <h2>${web.website_name}</h2>
      <h3>Kurs: ${web.website_course}</h3>
      <p>Om projektet: ${web.website_about}</p>
      <span class="findWeb"><a href="${web.website_url}" target="_blank">Till webbplatsen <i class="fas fa-chevron-right"></i><a/></span>
      </div>
    </div>
      `;
      });
    });
}
// hämta kurser
function getCourses() {
  // töm befintligt fält
  courseOutput.innerHTML = "";

  fetch(
    "https://studenter.miun.se/~joka2005/writeable/webb3/API/student-API/courseAPI.php"
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach(function (course) {
        // kontroll
        // console.log(course);
        courseOutput.innerHTML += `
      <div class="courses">
      <h4>${course.course_name}</h4>
      <p>Kursplan: <a href="${course.course_syllabus}" target="_blank">Webblänk</a> </p>
    </div>
    <div class="hide">
      <ul>
        <li>Lärosäte: ${course.course_school} </li>
        <li>Studieperiod: ${course.course_time}</li>
      </ul>
    </div>
      `;
      });
    });
}

// hämta tidigare jobb
function getWork() {
  workOutput.innerHTML = "";
  fetch(
    "https://studenter.miun.se/~joka2005/writeable/webb3/API/student-API/workAPI.php"
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach(function (work) {
        // test
        // console.log(work);
        workOutput.innerHTML += `
        <article class="work-box">
          <div class="flip-inner">
          <div class="flip-front">
            <h3>${work.work_place}</h3>
            <p>Mer info <i class="fas fa-chevron-right"></i></p>
          </div>
          <div class="flip-back">
            <ul>
              <li>Titel: ${work.work_title}</li>
              <li>Period: ${work.work_year}</li>
            </ul>
          </div>
        </div>
        </article>`;
      });
    });
}
