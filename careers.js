function displayResume() {
  const fileInput = document.getElementById("upload");
  const fileName = fileInput.files[0].name;
  const resumeFileName = document.getElementById("resumeFileName");
  resumeFileName.innerHTML = fileName;
}
