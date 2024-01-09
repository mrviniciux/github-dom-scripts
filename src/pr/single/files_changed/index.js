
/* 
 * returns something like ['app/components/file.tsx', 'app/hooks/file.tsx']
*/
function getChangedFilesFromFolder(folderPath='') {

  if (!folderPath) throw Error(`getChangedFilesFrom expect folder argument`);

  var spansWithFilterableText = document.querySelectorAll('span[data-filterable-item-text]');

  var filteredFiles = [];

  spansWithFilterableText.forEach(span => {
    var textContent = span.textContent.trim();
    if (textContent.includes(folderPath)) {
      filteredFiles.push(textContent);
    }
  });


  return filteredFiles;
};
