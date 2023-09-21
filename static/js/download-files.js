const filesDownloads = [
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygAegQIARBQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=1280&h=797&q=images&ved=2ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygAegQIARBQ",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F674010%2Fpexels-photo-674010.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&tbnid=fY9reP86COngJM&vet=12ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygHegQIARBh..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&docid=B51x0PBR9KNzvM&w=500&h=667&q=images&ved=2ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygHegQIARBh",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1495344517868-8ebaf0a2044a%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww%26w%3D1000%26q%3D80&tbnid=0lg4rKAgU2kYvM&vet=12ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygEegQIARBa..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsearch&docid=CuQXfyoMW8xtWM&w=1000&h=1643&q=images&ved=2ahUKEwjjgeSxk4-BAxWLlYsKHaekAj4QMygEegQIARBa",
];

function downloadFile(url, fileName) {
  fetch(url, { method: "get", mode: "no-cors", referrerPolicy: "no-referrer" })
    .then((res) => res.blob())
    .then((res) => {
      const aElement = document.createElement("a");
      aElement.setAttribute("download", fileName);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      // aElement.setAttribute('href', href);
      aElement.setAttribute("target", "_blank");
      aElement.click();
      URL.revokeObjectURL(href);
    });
}
function downloadAll() {
  for (var i = 0; i < filesDownloads.length; i++) {
    downloadFile(
      filesDownloads[i],
      filesDownloads[i].substring(
        filesDownloads[i].lastIndexOf("/") + 1,
        filesDownloads[i].length
      )
    );
  }
}

function downloadAllForeign() {
     for (var i = 0; i < filesDownloads.length; i++) {
    downloadFile(
      filesDownloads[i],
      filesDownloads[i].substring(
        filesDownloads[i].lastIndexOf("/") + 1,
        filesDownloads[i].length
      )
    );
  }
}

document.getElementById("statement").onclick = function () {
  downloadFile(
    "https://www.google-analytics.com/analytics.js",
    "gooleAnalytics.js"
  );
};

document.getElementById("consent-personal").onclick = function () {
  downloadFile(
    "https://www.google-analytics.com/analytics.js",
    "gooleAnalytics.js"
  );
};

document.getElementById("consent-child").onclick = function () {
  downloadFile(
    "https://www.google-analytics.com/analytics.js",
    "gooleAnalytics.js"
  );
};


document.getElementById("statement-foreign").onclick = function () {
  downloadFile(
    "https://www.google-analytics.com/analytics.js",
    "gooleAnalytics.js"
  );
};

document.getElementById("consent-personal-foreign").onclick = function () {
  downloadFile(
    "https://www.google-analytics.com/analytics.js",
    "gooleAnalytics.js"
  );
};
