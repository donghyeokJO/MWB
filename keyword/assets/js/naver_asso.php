<?php
    header('Content-Type:application/json');
    function get_keywords($thing)
    {
        include $_SERVER['DOCUMENT_ROOT'] . '/src/simple_html_dom.php';
        $tmpArr = [];

        $thing = urlencode($thing);
        $url = 'https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=' . $thing;
        $html = file_get_html($url);
        foreach ($html->find('ul[class="_related_keyword_ul"] li a') as $mall) {
            $mall = $mall->innertext();
            array_push($tmpArr, $mall);
        }
        $new = implode('/', $tmpArr);
        $t = [];
        $t['list'] = $new;
        echo json_encode($t);
    }

    get_keywords($_POST['thing']);
