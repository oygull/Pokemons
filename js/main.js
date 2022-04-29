
pokemons.sort( ()=> .5 - Math.random() );

let mixup = document.getElementById('mixup');

mixup.addEventListener('click', render)

function render(){
  pokemons.sort( ()=> .5 - Math.random() );
 return pokemons;
}

let onet = document.getElementById('onet')
for(let i=0; i<pokemons.length; i++){
  
  let box = document.createElement('div');
      box.classList.add(`onet-box`);
      box.dataset.id = i;
      box.style.backgroundImage = `url('${pokemons[i].img}')`;
      box.innerHTML=`${pokemons[i].id}`
      onet.appendChild(box);
}

let boxes = document.querySelectorAll(".onet-box")
let x = null,y = null;
let idForFirst; let idForSecond;
let points = document.getElementById('points');
let score = 0;

let ab = [];
boxes.forEach(el => {
    el.addEventListener("click", (e) => {
        let dId = e.target.dataset.id;
       ab.push(el)
        if(!x){
          x = dId
          e.target.classList.add("x");
          el.style.backgroundColor = `blue`;
          idForFirst=e.target.innerHTML;
        }else if(!y){
          y = dId
          e.target.classList.add("y");
          el.style.backgroundColor = `blue`;
          idForSecond=e.target.innerHTML;
          ab.push(el);
          findTheSeme(x,y,el,idForFirst,idForSecond,ab)
          ab = [];
      }

  
    })

})
let result = document.getElementById('result')
function findTheSeme(x,y,el,idForFirst,idForSecond,ab){
  let high = x > y ? x : y
  let low = x > y ? y : x
  if(idForFirst==idForSecond && ((high - low == 1 && (parseInt(low)+1) % 16 > 0)||high - low == 6 ||high - low == 3 ||high - low == 5 ||high - low == 7 ||high - low == 8 || high - low == 16 || high - low == 10 || high - low == 2 || high - low == 4 || (high - low == 1 && (parseInt(high)+1) % 8 == 0))){
    score++;
    points.innerHTML= `+ ${score}`;
    ab[0].style.backgroundImage = `url('')`;
      ab[1].style.backgroundImage = `url('')`;
      ab[0].style.backgroundColor = `#171c35c5`;
      ab[1].style.backgroundColor = `#171c35c5`;
    result.innerHTML = 'Correct';
    result.classList.remove('wrong')
    result.classList.add('correct')
      startOver();
  }else{
    result.innerHTML = 'Wrong'
    result.classList.remove('correct')
    result.classList.add('wrong');
    ab[0].style.backgroundColor = `#f8f6d8`;
    ab[1].style.backgroundColor = `#f8f6d8`;
      startOver()
  }

}

function startOver(){
  x=null
  y=null
  boxes.forEach(el => {el.classList.remove("x"); el.classList.remove("y")})
}



