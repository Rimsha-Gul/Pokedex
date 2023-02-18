const Colors = (type) => {
    const list = [
      ["normal", "#A8A878"],
      ["water", "#6890F0"],
      ["fire", "#F08030"],
      ["grass", "#78C850"],
      ["electric", "#ffd015"],
      ["ice", "#98D8D8"],
      ["fighting", "#C03028"],
      ["poison", "#A040A0"],
      ["ground", "#E0C068"],
      ["flying", "#A890F0"],
      ["psychic", "#F85888"],
      ["bug", "#A8B820"],
      ["rock", "#B8A038"],
      ["ghost", "#715BBF"],
      ["dark", "#705848"],
      ["dragon", "#7038F8"],
      ["steel", "#C0C0CC"],
      ["fairy", "#F0B6BC"]
    ];
  
    const result = list.filter((element) => {
      if (element[0] === type) {
        return element[1];
      }
    });
    return result[0][1];
  };
  
  export default Colors;