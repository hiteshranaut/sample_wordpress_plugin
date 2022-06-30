
jQuery(document).ready(function($){
    var sticky_header_container = '<div class="fluentu-sticky-header NEW">' +
                                        ' <div class="fluentu-sticky-header-left">' +
                                        ' <h1>Ready to learn l</h1>' +
                                        '</div>' +
                                        '<div class="fluentu-sticky-header-right">' +
                                            '<a href="?lang=eng"><img src="<?php echo plugins_url( \'images/flags/english.png\', __FILE__ ); ?>" alt="English"></a>' +
                                            '<a href="?lang=eng"><img src="<?php echo plugins_url( \'images/flags/spanish.png\', __FILE__ ); ?>" alt="Spanish"></a>' +
                                            '<a href="?lang=eng"><img src="<?php echo plugins_url( \'images/flags/chinese.png\', __FILE__ ); ?>" alt="Chinese"></a>' +
                                            '<a href="?lang=eng"><img src="<?php echo plugins_url( \'images/flags/german.png\', __FILE__ ); ?>" alt="German"></a>' +
                                            '<a href="?lang=eng"><img src="<?php echo plugins_url( \'images/flags/french.png\', __FILE__ ); ?>" alt="French"></a>' +
                                            '<a href="?lang=eng"><img src="<?php echo plugins_url( \'images/flags/russian.png\', __FILE__ ); ?>" alt="Russian"></a>' +
                                        '</div>' +
                                '</div>';
    jQuery('header').append(sticky_header_container);
});

