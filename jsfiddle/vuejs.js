//https://www.youtube.com/watch?v=4deVCNJq3qc&t=1779s

new Vue({
el: "#root",
data: {
	greeting: "Hello vue",
  count: 2,
  email: '',
  cats: [
  'kitkot',
  'fish',
  'henry',
  'bosco',
  'melanthios'
  ],
  players:[
  {name: "Messi", club:"barcelona"},
  {name: "Neymar", club:"PSG"},
  {name: "CR7", club:"Juventus"},
  {name: "Rodrygo", club:"Real Madrid"},
  ],
  newName: '',
  newClub: ''
},
methods: {
  addPlayer: function (){
  this.players.push(
  {
  name: this.newName, 
  club: this.newClub
  });
  this.newName = ''
  }
},
filters: {
	capitalize: function (value){
  return value.toUpperCase() + " FP "
  }
},
computed:{
	modifyPlayerName: function (){
  if(this.newName.length>1){
  	return this.newName + "y";
  }
  }
}
})