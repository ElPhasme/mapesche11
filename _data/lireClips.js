const ExcelJS = require('exceljs');
//const util = require('util')

const lireClips = async () => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("/opt/build/repo/_data/Tags VO.xlsx");
    const worksheet = workbook.getWorksheet('Feuille2');

    const colonneFichier = worksheet.getColumn(1).values;
    const colonneTitre = worksheet.getColumn(2).values;
    const colonneFormat = worksheet.getColumn(3).values;
    const colonneTon = worksheet.getColumn(4).values;

    let categoriesFormat = [...new Set(colonneFormat)];
    
    var clips = [];

    for (let j = 2; j < categoriesFormat.length; j++) {

        var format = [];
        for (let i = 0; i < colonneFormat.length-1; i++) {
            if (categoriesFormat[j] === colonneFormat[i]) {
                format.push({
                    Fichier: colonneFichier[i],
                    Titre: colonneTitre[i],
                    Tons: colonneTon[i]
                });
            }
        }
        
        clips.push({categorie: categoriesFormat[j], clips: format});
    }

    //console.log(util.inspect(clips, false, null, true/* enable colors */));
    return clips;
}

module.exports = async function() {
    return await lireClips();
}