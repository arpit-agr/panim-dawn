window.__wilInstagramShopify__=[{"insta_mode":"basic","insta_hashtag":"","insta_hashtag_filterBy":"top_media","toggle_instagram_stories":"disable","story_variant":"small","align_story_items":"center","gallery_disabled":"enable","placements":[{"page":"template-index","shopify_container_align":"center","shopify_container_padding_bottom":10,"shopify_container_padding_top":90,"shopify_container_title":"","shopify_container_width_unit":"%","shopify_container_width_value":100,"shopify_placement":"top","shopify_placement_index":0,"shopify_placement_selector":"[class*=\"template-index\"] [class*=\"site-footer\"]"},{"page":"template-article","shopify_container_align":"center","shopify_container_padding_bottom":10,"shopify_container_padding_top":90,"shopify_container_title":"","shopify_container_width_unit":"%","shopify_container_width_value":100,"shopify_placement":"top","shopify_placement_index":0,"shopify_placement_selector":"[class*=\"template-article\"] [class*=\"site-footer\"]"},{"page":"template-collection","shopify_container_align":"center","shopify_container_padding_bottom":10,"shopify_container_padding_top":90,"shopify_container_title":"","shopify_container_width_unit":"%","shopify_container_width_value":100,"shopify_placement":"top","shopify_placement_index":0,"shopify_placement_selector":"[class*=\"template-collection\"] [class*=\"site-footer\"]"},{"page":"template-list-collections","shopify_container_align":"center","shopify_container_padding_bottom":10,"shopify_container_padding_top":90,"shopify_container_title":"","shopify_container_width_unit":"%","shopify_container_width_value":100,"shopify_placement":"top","shopify_placement_index":0,"shopify_placement_selector":"[class*=\"template-list-collections\"] [class*=\"site-footer\"]"},{"page":"template-product","shopify_container_align":"center","shopify_container_padding_bottom":10,"shopify_container_padding_top":90,"shopify_container_title":"","shopify_container_width_unit":"%","shopify_container_width_value":100,"shopify_placement":"top","shopify_placement_index":0,"shopify_placement_selector":"[class*=\"template-product\"] [class*=\"site-footer\"]"},{"page":"template-page","shopify_container_align":"center","shopify_container_padding_bottom":10,"shopify_container_padding_top":90,"shopify_container_title":"","shopify_container_width_unit":"%","shopify_container_width_value":100,"shopify_placement":"top","shopify_placement_index":0,"shopify_placement_selector":"[class*=\"template-page\"] [class*=\"site-footer\"]"}],"websites":["panim-jewellery.myshopify.com"],"filterByMyHashTag":"","collapse":"","template":"grid","tabs_row_column":"desktop","number_of_columns_desktop":4,"number_of_rows_desktop":1,"gap_desktop":10,"brick_row_height_desktop":400,"number_of_columns_tablet":3,"number_of_rows_tablet":3,"gap_tablet":5,"brick_row_height_tablet":400,"number_of_columns_mobile":2,"number_of_rows_mobile":3,"gap_mobile":3,"brick_row_height_mobile":400,"slider_autoplay":"disable","slider_delay":1000,"slider_speed":1000,"post_template":"style1","click_item_action":"open_modal","modal_view_mode":"scroll","thumbnail_ratio":75,"custom_css":"","btn_action_share_facebook":{"status":"enable","text":"Share to Facebook"},"btn_action_share_twitter":{"status":"enable","text":"Share to Twitter"},"btn_action_share_messenger":{"status":"disable","text":"Share to Messenger"},"btn_action_share_email":{"status":"enable","text":"Share to Email"},"btn_action_copylink":{"status":"enable","text":"Copy Link"},"btn_action_follow":{"status":"enable","text":"Follow"},"btn_action_share":{"status":"enable","text":"Share"},"btn_action_loadmore":{"status":"disable","text":"Load more"},"syncMode":"enable","recurringEvent":"sixhours","color_collapse":"","overlay_gradient":{"color1":"#05e0d8cc","color2":"#ec65b7cc"},"text_color":"#ffffff","link_color":"#ffffff","btn_loadmore_background_color":"#475be2","btn_loadmore_text_color":"#ffffff","overlay_gradient_popup":{"color1":"#7c7c83cc","color2":"#7c7c83cc"},"text_color_popup":"#505058","link_color_popup":"#00376b","btn_close_color_popup":"#ffffff","id":"125965","slot_data_id":"125965","manual_element_class":"wil-insta-manual-125965","insta_username":"panimcreations","status":"draft"}];         window.addEventListener('load', function() {
            var pathname = window.location.pathname;
            var body = document.body;
            if (pathname === '/') {
            body.classList.add('template-index');
            } else if (/\/collections\/\w/g.test(pathname)) {
            body.classList.add('template-collection');
            } else if (/\/collections(\/|)$/g.test(pathname)) {
            body.classList.add('template-list-collections');
            } else if (/\/products(\/\w|)/g.test(pathname)) {
            body.classList.add('template-product');
            } else if (/\/blogs(\/\w|)/g.test(pathname)) {
            body.classList.add('template-blog');
            }

            var headEl = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            headEl.appendChild(link);
            link.href = 'https://instafeedhub-layout.netlify.app/styles.css?ver=1671016080';

            var scriptEl = document.createElement('script');
            scriptEl.type='text/javascript';
            scriptEl.async = true;
            headEl.appendChild(scriptEl);
            scriptEl.src = 'https://instafeedhub-layout.netlify.app/main.js?ver=1671016080';
        }, false);
		