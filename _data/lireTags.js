const ExcelJS = require('exceljs');
//const util = require('util')

const lireTags = async () => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("/opt/build/repo/Tags VO.xlsx");
    const worksheet = workbook.getWorksheet('Feuille2');

    const colonneTon = worksheet.getColumn(4).values;

    var tousLesTons = [];
    var tons = [];
    for (let i = 2; i < colonneTon.length-1; i++) {
        tons = colonneTon[i].split(" ");
       
        tousLesTons = tousLesTons.concat(tons);
    }

    tousLesTons = [...new Set(tousLesTons)];

    const index = tousLesTons.indexOf(''); // supprimer le ton '' (vide)
    if (index > -1) {
        tousLesTons.splice(index, 1);
    }

    console.log(tousLesTons);
    
    //console.log(util.inspect(clips, false, null, true/* enable colors */));
    return tousLesTons;
}

module.exports = async function() {
    return await lireTags();
}