// let student1 = {

//     html: 'Muito Bom',
  
//     css: 'Bom',
  
//     javascript: 'Ótimo',
  
//     softskills: 'Ótimo',
  
//   };
  
  
//   let student2 = {
  
//     html: 'Bom',
  
//     css: 'Ótimo',
  
//     javascript: 'Ruim',
  
//     softskills: 'Ótimo',
  
//     git: 'Bom', // chave adicionada
  
//   };
  
  
//   function listSkills(student) {
  
//     let arrayOfSkills = Object.keys(student);
  
//     for (let index in arrayOfSkills) {
  
//       console.log(student[arrayOfSkills[index]]);
  
//     }
  
//   };
  
  
//   console.log('Estudante 1');
  
//   listSkills(student1);
  
//   let coolestTvShow = {

//     name: 'BoJack Horseman',
  
//     genre: 'adult animation',
  
//     createdBy: 'Raphael Bob-Waksberg',
  
//     favoriteCharacter: 'Princess Carolyn',
  
//     quote: 'Princess Carolyn always lands on her feet.',
  
//     seasons: 6,
  
//   };
  
//     console.log (coolestTvShow (Object.keys);
  



  
    
  
    // let band = {
    //     name: 'Blind Guardian',
    //     formedIn: 1986,
    //     lastAlbum: 'Beyond the Red Mirror',
    //   };
      
    //   let info = {
    //     genre: 'Power Metal',
    //     lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
    //   };
      
    //   console.log (Object.assign(band, info));

// ############### ALGARISMOS ROMANOS ####################3


    function toRomanNumeral(num) {
        const romanNumerals = {
          1000: "M",
          900: "CM",
          500: "D",
          400: "CD",
          100: "C",
          90: "XC",
          50: "L",
          40: "XL",
          10: "X",
          9: "IX",
          5: "V",
          4: "IV",
          1: "I"
        };
      
        let result = '';
      
        for (let key of Object.keys(romanNumerals).reverse()) {
          while (num >= key) {
            result += romanNumerals[key];
            num -= key;
          }
        }
      
        return result;
      }
      
  
  console.log (toRomanNumeral(23));

 