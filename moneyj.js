const input=document.querySelector("#input")
const form = document.querySelector("#form")
const result = document.querySelector("#result")
const pullar=[500,200,100,50,20,10,5,1]
form.addEventListener("submit", (e)=>{
    e.preventDefault() //yenilenme olmasin deye
    result.innerHTML="";
    let mebleg = +input.value;
    pullar.map(pul=>{
        let count=Math.trunc(mebleg/pul);
        mebleg=mebleg-count*pul;
        if(count){
            const row=document.createElement("div")
            row.classList.add("row")
            for(let i=0;i<count && i<5;i++){
                const image=document.createElement("img");
                image.src=`images/${pul}.jpg`;
                image.style.left=`${i*60}px`;
                row.append(image);
            }
            if(count-5>0){
                let h1=document.createElement("h1");
                h1.textContent=`${count-5}px`
                row.append(h1);
            }
            result.append(row);
        }
    });
});

const list = document.querySelector("#list");
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.textContent = `List ${i + 1}`;
  li.style.marginLeft = `${i * 20}px`;
  list.append(li);
}