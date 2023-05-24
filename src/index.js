import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("Bana tıkladın!")
 });


// Kodlar buraya gelecek!

const headerSection= document.querySelector("header");
headerSection.addEventListener(`mouseover`,(e)=>{
    e.target.style.backgroundColor="#27e67a";
});



document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;
    
    function handleDragStart(e) {
      this.style.opacity = '0.4';
      
      dragSrcEl = this;
  
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      e.dataTransfer.dropEffect = 'move';
      
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      
      return false;
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
      
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
    
    
    let items = document.querySelectorAll('section');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragenter', handleDragEnter, false);
      item.addEventListener('dragover', handleDragOver, false);
      item.addEventListener('dragleave', handleDragLeave, false);
      item.addEventListener('drop', handleDrop, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  });


  const res=document.querySelectorAll('img');
  res.forEach((e)=>{
    e.addEventListener("mouseover", (event)=>{
        event.target.style.filter= "grayscale(100%)";
       // e.style.filter= "grayscale(100%)"; 
    });
    e.addEventListener("mouseout", ()=>{
       // event.target.style.filter= "grayscale(100%)";
        e.style.filter= "grayscale(0%)"; 
    });
  });

 /*  window.addEventListener("load",()=>{
    setTimeout(()=>{
        document.querySelector("body").style.background="red";
    },"2000");
  }); */


  const images=document.querySelectorAll('img');
  images.forEach((e)=>{
    e.addEventListener("click", (event)=>{
        event.target.style.width= "70%";
       // e.style.filter= "grayscale(100%)"; 
    });

    e.addEventListener("dblclick", ()=>{
        // event.target.style.filter= "grayscale(100%)";
         e.style.width= "100%"; 
     });
   });

   window.addEventListener("keyup",()=>{
    images.forEach((e)=>{
             e.style.width= "100%"; 
       });
   });

   
   /* document.querySelector("body").style.transition="background 1s ease";
   const scroll=window.pageYOffset;
   window.addEventListener("onscroll", event=>{
    const scroll=window.pageYOffset;
    console.log(scroll);
    if(scroll<300) {
        document.querySelector("body").style.background="red";
        images.forEach(e=>{
    e.style.borderRadius="0";
    });
    }

    else if(scroll>=300 && scroll<600) {
        document.querySelector("body").style.backgroundColor='red';
        images.forEach(e=>{
    e.style.borderRadius="100%";
    });
    }

    else {
        document.querySelector("body").style.backgroundColor='red';
   }
   }); */