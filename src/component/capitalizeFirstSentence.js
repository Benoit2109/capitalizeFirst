
// capitalizeFirstSentance doit permettre d'avoir une prahse dont la première lettre de chaque mot sont en majuscule.
// capitalizeFirstSentance ne peut prendre en compte qu'une chaine de caractère.

const capitalizeFirstSentance = (sentance) => sentance.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

export default capitalizeFirstSentance;