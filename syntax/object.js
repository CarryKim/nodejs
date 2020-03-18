var members = ['minjiKim', 'minjungKim', 'hyunsookKim'];
console.log(members[0]);

var roles = {
  'programmer': 'minjiKim',
  'cordinater': 'minjungKim',
  'guideManager': 'hyunsookKim'
};

console.log(roles.programmer);

for(var name in roles)
{
  console.log('object => ', name, 'value => ', roles[name]);
}
