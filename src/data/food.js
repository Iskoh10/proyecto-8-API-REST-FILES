const foods = (countriesMap) => {
  return [
    {
      foodName: 'Aceitunas',
      img: 'https://www.aceitunasbravo.com/wp-content/uploads/2024/06/Aceitunas-mananilla-Con-hueso-M-web.png',
      country: countriesMap['España']
    },
    {
      foodName: 'Tepache',
      img: 'https://www.lovferments.com/wp-content/uploads/2020/06/P5213751-scaled.jpg',
      country: countriesMap['México']
    },
    {
      foodName: 'Miso',
      img: 'https://www.esmacrobiotica.com/wp-content/uploads/2015/12/miso.jpg',
      country: countriesMap['Japón']
    },
    {
      foodName: 'Salsa de soja',
      img: 'https://www.arrozsos.es/wp-content/uploads/2024/07/soja.jpg',
      country: countriesMap['Japón']
    }
  ];
};

module.exports = foods;
