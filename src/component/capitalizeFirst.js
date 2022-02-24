
// capitalizeFirst doit permettre de passer un mot avec sa première lettre en majuscule.
// capitalizeFirst ne peut prendre en compte qu'une chaine de caractère.


const capitalizeFirst = (word) => {
  if(typeof(word) != 'string' || word.match(/[0-9]/i)){
    throw new Error('you must enter a string of characters');
  };
  const capitalizedFirst = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return capitalizedFirst;
};

export default capitalizeFirst;