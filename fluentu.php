<?php
/**
 * Plugin Name: Fluentu Trial
 * Plugin URI: http://www.mywebsite.com/my-first-plugin
 * Description: The very first plugin that I have ever created.
 * Version: 1.0
 * Author: Your Name
 * Author URI: http://www.mywebsite.com
 */



 // Write a simple WordPress plugin that inserts a sticky header with language links on each blog page. The existing blog can be found here: https://fluentu.com/blog/. The design for the new header can be found here:

    // sticky header code must insert div with langualr links after header tag
    
    add_action( 'wp_head', 'fluentu_sticky_header' );

    function fluentu_sticky_header() {
        
    }

    // enquire a js file that will be used to insert the sticky header div
    add_action( 'wp_enqueue_scripts', 'fluentu_sticky_header_js' );
    
    function fluentu_sticky_header_js() {
        wp_enqueue_script( 'fluentu_sticky_header_js', plugins_url( '/fluentu.js', __FILE__ ), array( 'jquery' ), '1.0', true );
    }