<?php
    header('Content-Type:application/json');
    function get_keywords($thing, $store)
    {
        include $_SERVER['DOCUMENT_ROOT'] . '/src/simple_html_dom.php';
        $tmpArr = [];
        $j = 1;
        $rank = false;
        $thing = urlencode($thing);
        for ($i = 1;$i <= 5;$i++) {
            $url = 'https://search.shopping.naver.com/search/all.nhn?origQuery=' . $thing . '&pagingIndex=' . $i . '&pagingSize=20&viewType=list&sort=rel&frm=NVSHATC&query=' . $thing;
            $html = file_get_html($url);
            foreach ($html->find('a.mall_img') as $mall) {
                $name = $mall->innertext;
                if ((strpos($name, $store) !== false || $name == $store) && $rank == false) {
                    $tmpArr['rank'] = '최고순위' . $j . '위';
                    $rank = true;
                }
                $j++;
            }
            if (!$rank) {
                $tmpArr['rank'] = '순위권(120)내에 없습니다.';
            }
        }
        echo json_encode($tmpArr);
    }

    get_keywords($_POST['thing'], $_POST['store']);
