const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  return (!Array.isArray(members) || members.every((e) => typeof e !== 'string')) ?
    false :
    members
      .filter((e) => typeof e === 'string')
      .reduce(
        (teamName, member) => `${teamName}${member.trim()[0].toUpperCase()}`,
        ''
      )
      .split('')
      .sort()
      .join('');
}

module.exports = {
  createDreamTeam
};
