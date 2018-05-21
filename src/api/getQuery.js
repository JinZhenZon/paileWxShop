export let splitQuery = () =>{
    // 获取href的query
    return new Promise((resolve,reject)=>{

        const url = decodeURI(window.location.search);
        var theRequest = new Object();  
         if (url.indexOf("?") != -1) {  
             var str = url.substr(1); 
             var strs = str.split("&"); 
             for(var i = 0; i < strs.length; i ++) {  
                 theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
             }  
         }

         resolve(theRequest);


    })
  
}

export let splitHashQuery = () =>{
    // 获取hash query
    return new Promise((resolve,reject)=>{

        const url = decodeURI(window.location.hash);
        
      
     


        var theRequest = new Object();  
         if (url.indexOf("?") != -1) {  
            var str = url.substr(url.indexOf("?")+1); 
             var strs = str.split("&"); 
             for(var i = 0; i < strs.length; i ++) {  
                 theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
             }  
         }

         resolve(theRequest);


    })
  
}
