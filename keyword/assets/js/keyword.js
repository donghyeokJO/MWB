var keywordpage = {
    div1: $('#ans1'),
    div2: $('#ans2'),
    div3: $('#ans3'),
    nav: $('#naver'),
    asso: $('#asso'),
    get1: function (keyword1) {
        // alert(keyword1)
        $.ajax({
            url: "http://analysis-web2-dev.ap-northeast-2.elasticbeanstalk.com/bot/keyword/",
            data: {
                subject: keyword1
            },
            type: "POST",
            dataType: "json",
        }).done(function (json) {
            // console.log(json['키워드'])
            keywordpage.setans1(json)
        })
    },
    setans1: function (json) {
        var key1 = ""
        $.each(json['키워드'], function (idx, k) {
            key1 += k + " / "
        })
        var key2 = ""
        $.each(json['월간PC검색'], function (idx, k) {
            key2 += k + " / "
        })
        var key3 = ""
        $.each(json['월간모바일검색'], function (idx, k) {
            key3 += k + " / "
        })
        var key4 = ""
        $.each(json['월평균노출광고수'], function (idx, k) {
            key4 += k + " / "
        })
        var html = ""
        html += "<table>"
        html += "   <thead>"
        html += "       <tr>"
        html += "           <th style='font-size:small;font-weight:bold'>분류</th>"
        html += "           <th style='font-size:small;font-weight:bold'>내용</th>"
        html += "       </tr>"
        html += "   </thead>"
        html += "   <tbody>"
        html += "       <tr>"
        html += "           <td style='font-size:small' style ='width:50px'>" + "키워드" + "</td>"
        html += "           <td style='font-size:small'>" + key1 + "</td > "
        html += "       </tr>"
        html += "       <tr>"
        html += "           <td style='font-size:small' style ='width:50px'>" + "월간 PC검색" + "</td>"
        html += "           <td style='font-size:small'>" + key2 + "</td>"
        html += "       </tr>"
        html += "       <tr>"
        html += "           <td style='font-size:small' style ='width:50px'>" + "월간 모바일검색" + "</td>"
        html += "           <td style='font-size:small'>" + key3 + "</td>"
        html += "       </tr>"
        html += "       <tr>"
        html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 노출 광고수" + "</td>"
        html += "           <td style='font-size:small'>" + key4 + "</td>"
        html += "       </tr>"
        html += "   </tbody>"
        html += "</table>"
        keywordpage.div1.html(html)
    },
    get2: function (keyword2) {
        // alert(keyword1)
        if (!keyword2) {
            keywordpage.setans2('fail')
        } else {
            $.ajax({
                url: "http://analysis-web2-dev.ap-northeast-2.elasticbeanstalk.com/bot/keyword_one/",
                data: {
                    subject: keyword2
                },
                type: "POST",
                dataType: "json",
            }).done(function (json) {
                // console.log(json['키워드'])
                keywordpage.setans2(json)
            })
        }
    },
    setans2: function (json) {
        var html = ""
        if (json != 'fail') {
            html += "<table>"
            html += "   <thead>"
            html += "       <tr>"
            html += "           <th style='font-size:small;font-weight:bold;text-align:center'>분류</th>"
            html += "           <th style='font-size:small;font-weight:bold;text-align:center'>내용</th>"
            html += "       </tr>"
            html += "   </thead>"
            html += "   <tbody>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "키워드" + "</td>"
            html += "           <td style='font-size:small'>" + json['키워드'] + "</td > "
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월간 PC검색" + "</td>"
            html += "           <td style='font-size:small'>" + json['월간PC검색'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월간 모바일검색" + "</td>"
            html += "           <td style='font-size:small'>" + json['월간모바일검색'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 PC클릭" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균PC클릭'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 모바일 클릭" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균모바일클릭'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 PC클릭률" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균PC클릭률'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 모바일 클릭률" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균모바일클릭률'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "경쟁정도" + "</td>"
            html += "           <td style='font-size:small'>" + json['경쟁정도'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 노출 광고수" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균노출광고수'] + "</td>"
            html += "       </tr>"
            html += "   </tbody>"
            html += "</table>"
        }
        keywordpage.div2.html(html)
    },
    get3: function (store, keyword4) {
        // alert(keyword1)
        if (!keyword4) {
            keywordpage.setans3('fail')
        } else {
            $.ajax({
                url: "http://django-env.2mskuzfxsm.ap-northeast-2.elasticbeanstalk.com/bot/keyword_one/",
                data: {
                    subject: keyword4
                },
                type: "POST",
                dataType: "json",
            }).done(function (json) {
                if (!store) {
                    keywordpage.setans3(json, '스토어명이 없습니다.', keyword4)
                } else {

                    keywordpage.setans3(json, store, keyword4)
                }
            })
        }
    },

    setans3: function (json, chk, keyword) {
        var html = ""
        keywordpage.getasso(keyword)
        if (chk == '스토어명이 없습니다.') {
            html += chk
        } else {
            $.ajax({
                url: "./assets/js/naver.php",
                data: {
                    thing: keyword,
                    store: chk
                },
                type: "POST",
                dataType: "json",
            }).done(function (json2) {
                var html = ""
                var d = new Date()
                html += "<table>"
                html += "   <thead>"
                html += "       <tr>"
                html += "           <th style='font-size:small;font-weight:bold;text-align:center'>기준일</th>"
                html += "           <th style='font-size:small;font-weight:bold;text-align:center'>상호</th>"
                html += "           <th style='font-size:small;font-weight:bold;text-align:center'>품목</th>"
                html += "           <th style='font-size:small;font-weight:bold;text-align:center'>순위</th>"
                html += "       </tr>"
                html += "   <tbody>"
                html += "       <tr>"
                html += "           <td style='font-size:small'>" + d + "</td>"
                html += "           <td style='font-size:small'>" + chk + "</td > "
                html += "           <td style='font-size:small'>" + keyword + "</td > "
                html += "           <td style='font-size:small'>" + json2['rank'] + "</td > "
                html += "       </tr>"
                html += "   </tbody>"
                html += "</table>"
                keywordpage.nav.html(html)
            })
        }
        if (json != 'fail') {
            html += "<table>"
            html += "   <thead>"
            html += "       <tr>"
            html += "           <th style='font-size:small;font-weight:bold;text-align:center'>분류</th>"
            html += "           <th style='font-size:small;font-weight:bold;text-align:center'>내용</th>"
            html += "       </tr>"
            html += "   </thead>"
            html += "   <tbody>"

            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "키워드" + "</td>"
            html += "           <td style='font-size:small'>" + json['키워드'] + "</td > "
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월간 총 검색수" + "</td>"
            html += "           <td style='font-size:small'>" + (json['월간PC검색'] * 1 + json['월간모바일검색'] * 1) + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월간 모바일검색수" + "</td>"
            html += "           <td style='font-size:small'>" + json['월간모바일검색'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월간 PC검색수" + "</td>"
            html += "           <td style='font-size:small'>" + json['월간PC검색'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월간 모바일검색수" + "</td>"
            html += "           <td style='font-size:small'>" + json['월간모바일검색'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 총 클릭수" + "</td>"
            html += "           <td style='font-size:small'>" + (json['월평균PC클릭'] * 1 + json['월평균모바일클릭'] * 1) + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 PC클릭수" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균PC클릭'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 모바일 클릭수" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균모바일클릭'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 총 클릭률" + "</td>"
            html += "           <td style='font-size:small'>" + (json['월평균PC클릭률'] * 1 + json['월평균모바일클릭률'] * 1) + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 PC클릭률" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균PC클릭률'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 모바일 클릭률" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균모바일클릭률'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "경쟁정도" + "</td>"
            html += "           <td style='font-size:small'>" + json['경쟁정도'] + "</td>"
            html += "       </tr>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + "월 평균 노출 광고수" + "</td>"
            html += "           <td style='font-size:small'>" + json['월평균노출광고수'] + "</td>"
            html += "       </tr>"
            html += "   </tbody>"
            html += "</table>"
        }
        keywordpage.div3.html(html)
    },
    getasso: function (keyword) {
        var html = ""
        $.ajax({
            url: "./assets/js/naver_asso.php",
            data: {
                thing: keyword
            },
            type: "POST",
            dataType: "json",
        }).done(function (json) {
            html += "<table>"
            html += "   <thead>"
            html += "       <tr>"
            html += "           <th style='font-size:small;font-weight:bold;text-align:center'>검색어</th>"
            html += "           <th style='font-size:small;font-weight:bold;text-align:center'>연관검색어</th>"
            html += "       </tr>"
            html += "   </thead>"
            html += "   <tbody>"
            html += "       <tr>"
            html += "           <td style='font-size:small' style ='width:50px'>" + keyword + "</td>"
            html += "           <td style='font-size:small'>" + json['list'] + "</td > "
            html += "       </tr>"
            html += "   </tbody>"
            html += "</table>"
            keywordpage.asso.html(html)
        })


    },
}