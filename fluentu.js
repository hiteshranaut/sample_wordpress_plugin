
jQuery(document).ready(function($){
    console.log("dfsfsfs")
    console.log(ajax_object.plugin_dir_url);
    var sticky_header_container = '<div class="fluentu-sticky-header NEW">' +
    ' <div class="fluentu-sticky-header-left">' +
    ' <h1>Ready to learn l</h1>' +
    '</div>' +
    '<div class="fluentu-sticky-header-right">' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/bitmap.png" alt="English"><span>English</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/bitmap.png" alt="Spanish"><span>Spanish</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/bitmap.png" alt="Chinese"><span>Chinese</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/bitmap.png" alt="German"><span>German</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/bitmap.png" alt="French"><span>French</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/bitmap.png" alt="Russian"><span>Russian</span></a> </div>' +
    '</div>' +
    '</div>';
    console.log(sticky_header_container)
    
    jQuery('header').append(sticky_header_container);
});

