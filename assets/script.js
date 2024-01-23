$(document).ready(function () {
  const form = $("#dobForm");
  const dobInput = $("#dob");
  const resultDiv = $("#resultsContainer");

  form.on("submit", function (event) {
    event.preventDefault();
    calculateAndDisplayDays();
  });

  function calculateAndDisplayDays() {
    const dobValue = dobInput.val();
    const dob = dayjs(dobValue);
    const today = dayjs();
    const diffDays = today.diff(dob, "days");

    displayResult(diffDays);
  }

  function displayResult(days) {
    const result = $("<p>").appendTo(resultDiv);
    result.attr("class", "display-4");
    result.text(days);
  }
});
