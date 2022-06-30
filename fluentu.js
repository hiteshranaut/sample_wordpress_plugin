
jQuery(document).ready(function($){
 
    var sticky_header_container = '<div class="fluentu-sticky-header NEW">' +
    ' <div class="fluentu-sticky-header-left">' +
    ' <h1>Pick a language to speak...</h1>' +
    '</div>' +
    '<div class="fluentu-sticky-header-right">' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/english.png" alt="English"><span>English</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/spanish.png" alt="Spanish"><span>Spanish</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/China.png" alt="Chinese"><span>Chinese</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/German.png" alt="German"><span>German</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/France.png" alt="French"><span>French</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/Russia.png" alt="Russian"><span>Russian</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/english.png" alt="English"><span>English</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/spanish.png" alt="Spanish"><span>Spanish</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/China.png" alt="Chinese"><span>Chinese</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/German.png" alt="German"><span>German</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/France.png" alt="French"><span>French</span></a> </div>' +
    '<div class="fluent_language"><a href="?lang=eng"><img src="'+ ajax_object.plugin_dir_url +'/images/Russia.png" alt="Russian"><span>Russian</span></a> </div>' +
    '</div>' +
    '</div>';
    console.log(sticky_header_container)
    
    jQuery('header').append(sticky_header_container);
});

