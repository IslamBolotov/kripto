
// Первая задания
let inp1 = document.querySelector('.inp-1')
let btn1 = document.querySelector('.btn1')
let block1 = document.querySelector('.block-1')

btn1.addEventListener('click',()=>{
  let newVal='';
  let val = inp1.value;
  let k = 0;
  for(let i=0;i<val.length;i++){
    
    if(val[i]==' '){
      for(let j=i-1;j>=k;j--){
        newVal = newVal+val[j]
      }
      k = i
      newVal+= ' ';
    }
    if(i==val.length-1){
      for(let j=i;j>=k;j--){
        newVal = newVal+val[j]
      }
      k = i
    }

  }
  
  block1.innerHTML = newVal
})

// Вторая задания

let alph = [' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let inp2 = document.querySelector('.inp-2')
let inp3 = document.querySelector('.inp-3')
let btn2 = document.querySelector('.btn2')
let btn5 = document.querySelector('.btn5')
let block2 = document.querySelector('.block-2')

btn2.addEventListener('click',()=>{
  let newVal = '';
  let val = inp2.value;
  let k = parseInt(inp3.value);
  for(let i=0;i<val.length;i++){
    let check = 0
    for(let j=0;j<alph.length;j++){
      if(val[i]===alph[j]){
        let l = (j+k)%27
        newVal+=alph[l]
        check = 1
      }
    }
  }
  block2.innerHTML = newVal
  console.log(newVal);
})

btn5.addEventListener('click',()=>{
  
  let newVal = '';
  let val = inp2.value;
  let k = parseInt(inp3.value);
  for(let i=0;i<val.length;i++){
    let check = 0
    for(let j=0;j<alph.length;j++){
      if(val[i]===alph[j]){
        let l = ((j-k)+27)%27 
        newVal+=alph[l]
        check = 1
      }
    }
  }
  block2.innerHTML = newVal
  console.log(newVal);
})
//третье задание
let alph2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', "p", 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alph3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', "p", 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let inp4 = document.querySelector('.inp-4')
let inp5 = document.querySelector('.inp-5')
let inp6 = document.querySelector('.inp-6')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let block3 = document.querySelector('.block-3')



btn3.addEventListener('click',()=>{
  let newVal = '';
  let val = inp4.value;
  let key = inp5.value.split('');
  let k = inp6.value;
  let ss = alph2.slice();
  let len = parseInt(key.length)+parseInt(k)-1
  
  for (let i=0;i<alph2.length;i++){
    for(let q=0; q<key.length;q++){
      if(alph2[i] === key[q]){
        alph2.splice(i,1)
        alph3.splice(i,1)
      }
    }
  } 
  console.log(alph2);
  let j=0

  for(let i=k;i<=len;i++){
    alph2.splice(i,0,key[j])
    //alph2[i]=key[j]
    j++
  }
  let l=0
  for(let i=len+1;i<26;i++){
    alph2[i]=alph3[l]
    l++
  }

  for(let i=0;i<k;i++){
    alph2[i]=alph3[l]
    l++
  }

  console.log(ss,alph2);
})
