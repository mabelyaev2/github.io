var disqus_config = function () {
this.page.url = PAGE_URL;  
this.page.identifier = PAGE_IDENTIFIER; 
};

(function() { 
var d = document, s = d.createElement('script');
s.src = 'https://disqus.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();

