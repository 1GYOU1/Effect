# slick slider

### [Slick slider site](https://kenwheeler.github.io/slick/)
### [Slick slider github](https://github.com/kenwheeler/slick/)
### [slick slider blog](https://fresh-mint.tistory.com/entry/%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-slick-%EC%82%AC%EC%9A%A9%EB%B2%95%EB%B0%98%EC%9D%91%ED%98%95)

<br>

## 1) Include

HTML
```html
<!--slick-->
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

<br>

## 2) HTML 작성예시

HTML
```html
<ul class="slick_center">
	<li><img src="//gscdn.hackers.co.kr/pass/img/event/2022/09/2002/pc/type1/v1/cont01_s1.png" alt=""/></li>
	<li><img src="//gscdn.hackers.co.kr/pass/img/event/2022/09/2002/pc/type1/v1/cont01_s2.png" alt=""/></li>
	<li><img src="//gscdn.hackers.co.kr/pass/img/event/2022/09/2002/pc/type1/v1/cont01_s3.png" alt=""/></li>
	<li><img src="//gscdn.hackers.co.kr/pass/img/event/2022/09/2002/pc/type1/v1/cont01_s4.png" alt=""/></li>
	<li><img src="//gscdn.hackers.co.kr/pass/img/event/2022/09/2002/pc/type1/v1/cont01_s5.png" alt=""/></li>
</ul>
```

<br>

## 3) pager custom 작성예시

<br>

활성화된 element -> __.slick-active__

CSS
```css
.cont01 .slick-dots li button:before{content: none;}
.cont01 .slick-dots li{width:10px;height:10px;background-color:#9effd0;border-radius: 50%;opacity: 0.3;}
.cont01 .slick-dots li.slick-active{width:35px;border-radius: 10px;opacity: 1;}
```

<br>

## 4) JS 작성예시

<br>

JS
```js
//slick slider
$('.slick_center').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay : true, // 자동 스크롤 사용 여부
    autoplaySpeed : 2500,
    focusOnSelect: true, //선택한 요소에 초점 활성화(클릭)
    variableWidth: true //반응형 여부
});
```

responsive

JS
```js
$('.responsive').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    { breakpoint: 600, // 화면의 넓이가 600px 이상일 때
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
    }},
    { breakpoint: 320, // 화면의 넓이가 320px 이상일 때
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
```

<br>

__옵션__

| Parameter  | Type          | default | 기능  |
|:----------:|:-------------:|:-------:|:------|
| slide | element | '' | 슬라이드 되어야 할 태그 ex) div, li |
| infinite | boolean | true | 무한 반복 |
| slidesToShow | int | 1 | 한 화면에 보여질 컨텐츠 개수 |
| slidesToScroll | int | 1 | 한번에 움직일 컨텐츠 개수 |
| speed | int(ms) | 300 | 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms) |
| arrows | boolean | true | 화살표 표시 여부 |
| dots | boolean | 'slick-dots' | 페이지네이션 표시 여부 |
| dotsClass | string | false | 페이지네이션 클래스 지정 |
| pauseOnHover | boolean | true | 마우스 진입하면 슬라이더 멈추게 설정 |
| autoplay | boolean | false | 자동 스크롤 사용 여부 |
| autoplaySpeed | int(ms) | 3000 | 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms) |
| vertical | boolean | false | 세로 방향 슬라이드 옵션 |
| verticalSwiping | boolean | false | 스와이프 방향을 세로로 변경 |
| draggable | boolean | true | desktop 드래그 가능 여부 |
| prevArrow | string | `<button type="button" class="slick-prev">Previous</button>` | 이전 화살표 모양 설정 |
| nextArrow | string | `<button type="button" class="slick-next">Next</button>` | 다음 화살표 모양 설정 |
| centerMode | boolean | false | 슬라이드 중앙 보기 활성화 |
| centerPadding | string | '50px' | 중앙 모드 측면 padding. (픽셀 또는 %) |
| customPaging | function | n/a | 사용자 정의 페이징 템플릿 |
| variableWidth | boolean | false | 자동 슬라이드 너비 계산 비활성화 |
| touchMove | boolean | true | 터치로 슬라이드 이동 가능 |
| SlidesToScroll | int | 1 | 한 번에 스크롤할 슬라이드 수 |
| swipeToSlide | boolean | false | SlidesToScroll과 상관없이 밀어서 슬라이드 |
| lazyLoad | string | 'ondemand' | 'ondemand' = 슬라이드하는 즉시 이미지를 로드 <br>'progressive' = 페이지 로드 시 이미지를 차례로 로드 |
| responsive | array | null | 반응형 breakpoint. settings 활성화 가능. settings 비활성화는 unslick |
| breakpoint | int | - | 반응형 변환 기점 ex)1024, 600, 300 |

<br>

옵션 적용 예시

```js
$('#slider-div').slick({
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite : true, 	//무한 반복 옵션	 
    slidesToShow : 4,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,			// 자동 스크롤 사용 여부
    autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,		// 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,		// 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
    nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable : true, 	//드래그 가능 여부 
    
    responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 960, //화면 사이즈 960px
            settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:3, 
                infinite: true
            } 
        },
        { 
            breakpoint: 768, //화면 사이즈 768px
            settings: {	
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:2, 
            } 
        },
        {
            breakpoint: 300, //화면 사이즈 300px
            settings: "unslick" // destroys slick
        }
    ]

});
```

<br>

슬라이드 플러그인

[swiper slide](https://swiperjs.com/demos)

[bxslider slide](https://bxslider.com/examples/)