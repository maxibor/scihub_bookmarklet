(function(){
    let links = document.getElementsByTagName('a');
    for(var i = 0, l = links.length; i < l; i++) {
      let alink = links[i];
      alink.href = alink.href.replace(/^((http(s|):\/\/|www\.)|)(dx.|)doi\.org\//gim, 'http://sci-hub.hk/');
      console.log(alink.href)
   }
})();
