<?php
/**
 * Plugin Name: Fluentu Trial
 * Plugin URI: http://www.mywebsite.com/my-first-plugin
 * Description: Trial plugin for Fluentu
 * Version: 1.0
 * Author: Hitesh Ranaut
 * Author URI: http://www.mywebsite.com
 */



 // Write a simple WordPress plugin that inserts a sticky header with language links on each blog page. The existing blog can be found here: https://fluentu.com/blog/. The design for the new header can be found here:


    add_action( 'wp_enqueue_scripts', 'fluentu_sticky_header_js' );
    
    function fluentu_sticky_header_js() {
        wp_enqueue_script( 'fluentu_sticky_header_js', plugins_url( '/fluentu.js', __FILE__ ), array( 'jquery' ), '1.0', true );

    	wp_localize_script( 'fluentu_sticky_header_js', 'ajax_object',  array( 'ajax_url' => admin_url( 'admin-ajax.php' ), 'plugin_dir_url' => plugin_dir_url(__FILE__) ) );
    }

    // enquire css file that will be used to style the sticky header div
    add_action( 'wp_enqueue_scripts', 'fluentu_sticky_header_css' );

    function fluentu_sticky_header_css() {
        wp_enqueue_style( 'fluentu_sticky_header_css', plugins_url( '/fluentu.css', __FILE__ ), array(), '1.0', 'all' );
    }