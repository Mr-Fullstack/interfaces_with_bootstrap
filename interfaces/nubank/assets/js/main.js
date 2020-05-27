$(document).ready(function(){

    let inputControl = $("#open-control")
    let body= $("body")
    let menuControl = false
    let mainView = $("main")
    let boxViews = mainView[0].children[0].children;
    let listBoxView=[];
    
     for( view of boxViews){

        let open = view.children[0].dataset
        let boxView = $('div[data-page='+open.page+']')[0]
        listBoxView.push(boxView)
      
        // Array(view.children[0])[0].addEventlistener('click',function(){
        //     loadPage(view.children[0].dataset.page)
        // })
     }
  
     for(let i = 0; i<= listBoxView.length-1; i++){

      
        listBoxView[i].onclick = ()=>{
            loadPage(listBoxView[i].dataset.page)
         }
     }



    let header = $("header")
    $("body").css("overflow","hidden") 
    
   inputControl.click(function(){

        if (!menuControl){
            header.css("height","83vh")
            menuControl = true
        }
        else{
            header.css("height","14vh")
            menuControl = false
        }
    })

   console.log(mainView[0].children[0])

    mainView[0].children[0].mousedown(()=>{
        alert("oi")
    })
    

    function loadPage(pageName = "index",path="./" ,extension ="html"){
        body.addClass("page-"+pageName)
        return body.html("").load(`${path}${pageName}.${extension}`);
    }

    function loadPageInner(parentElement,pageName = "index",path="./" ,extension ="html"){
        return parentElement.html("").load(`${path}${pageName}.${extension}`);
    }
});



