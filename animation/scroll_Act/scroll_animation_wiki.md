[[_TOC_]]

# 스크롤 애니메이션 사용 방법

## ★★★★★ 

## `AOS`(방법①)를 `우선으로 사용`

## →문제 발생하는 부분만 방법 ② - JS 사용

- height 값이 0일 때(bxslider, tab_sction, ...)
- position : absolute로 위치를 잡았을 때 등... 이외의 경우 포함

## ★★★★★

<br>

## └ 방법 ① - `AOS`

<details>
<summary>해당 방법 우선 사용</summary>

<br>

## AOS

### 1) Include - 플러그인 불러오기

<br>

##### JS
```js
// 이벤트 php 최상단에서 불러오기
<script src="../modules/event/aos.js"></script>

// 이벤트 js 최상위 load 함수 블럭 최하단에 불러오기
$(window).on('load', function() {
    AOS.init();
});
```

##### CSS
```html
<!-- 이벤트 php 최상단에서 불러오기 -->
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
```

<br>

----

### 2) HTML 작성예시

<br>

##### HTML
```html
<img data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-duration="1000" src="image01.jpg" alt=""/>
```
<br>

사용가능한 옵션
```
data-aos="fade-up" 	<-- 사용할 애니메이션 효과명(필수값) -->
data-aos-offset="200" <-- 애니메이션 효과가 시작될 객체의 위치 설정 -->
data-aos-delay="50"	<-- 애니메이션 재생 대기시간 설정(default: 0) -->
data-aos-duration="1000"	<-- 애니메이션의 재생시간 설정(default: 400) -->
data-aos-easing="ease-in-out"	<-- 애니메이션 시간흐름에 따른 속도설정 옵션(default: ease) -->
data-aos-once="false"	<-- 스크롤 할때마다 애니매이션이 재생될지를 설정(default: false) -->
```

delay와 duration은 0부터 3000까지 설정 가능하고, 50 단위로 설정 변경이 가능

<br>

<br>

### AOS 사용 참고 사이트 ↓↓

### [AOS DEMO](http://michalsnik.github.io/aos/)

### [AOS Github](https://github.com/michalsnik/aos)

<br>

----

<br>

</details>

<br>

## └ 방법 ② - JS

<details>
<summary>AOS 문제 발생하는 경우에 사용</summary>

##### JS
```js
// 이벤트 js 내부에 추가
var scrollEvtCont = $('[data-scroll]');

function hackersScrollFnc() {
    const point = window.innerHeight;

    scrollEvtCont.each(function(idx, item) {
        const rect = item.getBoundingClientRect();

        if(rect.top <= point - point * .1) {
            item.classList.add('on');
        }

        if(item.dataset.scrollOnce === 'false') {
            if((rect.top < point * -1 || rect.top > point)) {
                item.classList.remove('on');
            }
        }
    });
}

$(window).on('scroll', function() {
    hackersScrollFnc();
});

```

<br>

##### HTML
```html
<div class="cont01" data-scroll="true" data-scroll-once="true">
```
엘리먼트에 `data-scroll="true"`, `data-scroll-once="false"`추가 해서 사용.
- `data-scroll` → 해당 엘리먼트가 화면 최상단에 도달하면 class="on"을 붙여줌
- `data-scroll-once` → true : 한번만 실행(default), false : 해당 영역 진입마다 애니매이션 실행


<br>

##### CSS
```css
.cont02.on img{animation:bottom-200 .2s forwards;}
```
엘리먼트에 `.on`을 붙여서 style 적용.

----

</details>

<br>
<br>

----

<br>

## CSS - animation

<details>
<summary>animation 속성과 축약형</summary>

<br>

### animation 속성 종류

- `animation-name` : @keyframes 이름 
- `animation-duratuion` : 타임 프레임의 길이, 키프레임이 동작하는 시간을 설정할 때 사용
- `animation-delay` : 애니메이션을 시작하기 전 지연시간 설정
- `animation-iteration-count` : 반복 횟수 지정
- `animation-timing-function` : 애니메이션 속도 조절 / 그래프 ( linear / ease / ease-in / ease-out / ease-in-out / cubic-bezier )
- `animation-direction` : 반복 방향 설정 ( 정방향 / 역방향 / 번갈아가며)
- `animation-fill-mode` : 애니메이션 시작 / 끝 상태 제어 ( none / forwords / backwords / both )
- `animation-play-state` : 애니메이션 실행 중에 중지되었을 때 계속 진행하거나 멈추게 할 것인지를 지정

<br>

###  animation 축약형
```css
animation: animation-name animation-duration animation-delay animation-iteration-count animation-timing-function animation-direction fill-mode play-state;
```
animation : 이름 > 실행속도 > 지연시간 > 반복횟수 > 애니메이션 속도 조절/그래프 >  반복방향설정 > 끝난후위치 > 실행or정지

<br>

사용예시
```css
animation: fadeIn 4s 1s infinite linear alternate;
/*animation : @keyframes이름 / 동작하는 시간 / 지연시간 / 반복 횟수 / 애니메이션 속도 / 반복 방향 */
```

<br>

### animation css 참고 사이트 ↓↓

### [@keyframes / animation 속성 / 애니메이션 구현](https://neul-carpediem.tistory.com/283)

</details>

<br>

<br>

----


<br>

## [이벤트 페이지 애니메이션 효과 정리 (2022-08-01 ver. 0.1) - 보드글](http://hac.educamp.org/linker.php?menuno=1307&board_id=etc_renewal_plan&board_no=346108)

### [본문_01]

<details>
<summary>밑에서 위로 나타내기 기본 효과</summary>

<br>

예시 이미지)

<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_1_01.gif"/>
<br>
<br>
<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_1_02.gif"/>
<br>
<br>
<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_1_03.gif"/>

<br>
<br>

### 방법① - `AOS` 우선 적용

<br>

##### HTML

```html
<img src="image.jpg" data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-duration="1000" alt="" />
```
<br>

----

<br>

### AOS 안될 경우 → 방법② JS 적용

<br>

##### HTML

```html
<div class="cont03" data-scroll="true" data-scroll-once="true">
	<img class="img_tit" src="../image.jpg" alt=""/>
</div>
```

##### CSS
```css
.cont03.on .img_tit{animation:bottom-200 1.2s .5s forwards}
```

##### Keyframes CSS
```css
@keyframes bottom-200{
    0% {
        transform: translateY(200px);
    	opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}
```

<br>

### keyframe 사용 예시 ↓↓ 

### [슬라이드 애니메이션 ①](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/keyframes.html#slide)
### [메인 1 - box1](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/example.html#main)

<br>

----

</details>

### [본문_02]

<details>
<summary>그래프 둥둥이 효과</summary>


<br>

예시 이미지)


<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_2.gif"/>

<br>
<br>

##### HTML

```html
<img class="bar_txt" src="../bar_txt.png" alt="">
```
##### CSS
```css
.cont01 .bar_txt{animation:updown-10 1s 2s linear infinite;}
```
##### Keyframes CSS
```css
@keyframes updown-10{
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translate(0, 0);
    }
}
```

<br>

### keyframe 사용 예시 ↓↓ 

### [둥둥이 애니메이션 ①, ②](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/keyframes.html#dungdung)

<br>

----

</details>

### [본문_03]

<details>
<summary>그래프 카운팅 효과</summary>

<br>

예시 이미지)

<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_3.gif"/>

<br>
<br>

##### HTML

```html
<div class="num_wrap">
	<div>
		<p class="count" data-count="100" data-count-type="percent">0</p>
		<p class="count" data-count="209820" data-count-type="price">0</p>
	</div>
	<div>
		<p class="count" data-count="200" data-count-type="percent">0</p>
		<p class="count" data-count="419640" data-count-type="price">0</p>
	</div>
	<div>
		<p class="count" data-count="300" data-count-type="percent">0</p>
		<p class="count" data-count="629460" data-count-type="price">0</p>
	</div>
</div>
```

##### JS
```js
var once = true;
var countReg = new RegExp(/\B(?=(\d{3})+(?!\d))/, "g");

function count () {
    if(once) {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).data('count')
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    if($(this).data('count-type') === 'price') {

                        $(this).text((Math.ceil(now).toString().replace(countReg, ",")) + '원')

                    }else if($(this).data('count-type') === 'percent'){

                        $(this).text((Math.ceil(now).toString().replace(countReg, ",")) + '%')
                    }

                }
            });
        });
    }

    once = false;
}
```

<br>

### keyframe 사용 예시 ↓↓ 

### [슬라이드 애니메이션 - ①](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/keyframes.html#slide)
### [카운팅 효과](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/example.html#count)

<br>

----

<br>

</details>

### [본문_04]

<details>
<summary>이미지 물결치는 효과 (한번에 다 올라오는 것이 아니라, 연이어서 올라오는 효과)</summary>

<br>

예시 이미지)

<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_4.gif"/>

<br>
<br>

### 방법① - `AOS` 우선 적용

<br>

##### HTML

```html
<img src="../image_1.png" data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000" alt=""/>
<img src="../image_2.png" data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-delay="400" data-aos-duration="1000" alt=""/>
<img src="../image_3.png" data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-delay="600" data-aos-duration="1000" alt=""/>
<img src="../image_4.png" data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-delay="800" data-aos-duration="1000" alt=""/>
<img src="../image_5.png" data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-delay="1000" data-aos-duration="1000" alt=""/>
<img src="../image_6.png" data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-delay="1200" data-aos-duration="1000" alt=""/>
```
<br>

----

<br>

### AOS 안될 경우 → 방법② JS 적용

<br>

##### HTML
```html
<div class="box" data-scroll="true" data-scroll-once="true">
    <img src="../image_1.png" alt=""/>
    <img src="../image_2.png" alt=""/>
    <img src="../image_3.png" alt=""/>
    <img src="../image_4.png" alt=""/>
    <img src="../image_5.png" alt=""/>
    <img src="../image_6.png" alt=""/>
</div>
```
##### CSS
```css
.box.on img{animation:bottom-200 .2s forwards;opacity:0;}
.box.on img:nth-of-type(2){animation-duration:.4s}
.box.on img:nth-of-type(3){animation-duration:.6s}
.box.on img:nth-of-type(4){animation-duration:.8s}
.box.on img:nth-of-type(5){animation-duration:1s}
.box.on img:nth-of-type(6){animation-duration:1.2s}
```
animation-duration사용하여 순차적으로 실행

##### Keyframes CSS
```css
@keyframes bottom-200{
    0% {
        transform: translateY(200px);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}
```

<br>

### keyframe 사용 예시 ↓↓ 

### [슬라이드 애니메이션 - ①](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/keyframes.html#slide)
### [이미지 물결치는 효과 - 아래에서 위로 순차적](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/example.html#wave-left)

<br>

----

<br>

</details>

### [본문_05]

<details>
<summary>이미지 좌우 교차로 나타내기 (*양 옆에서 밀어내주는 효과)</summary>

<br>

예시 이미지)

<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_5.gif"/>

<br>

### 방법① - `AOS` 우선 적용

<br>

##### HTML
```html
<img data-aos="fade-left" data-aos-once="true" data-aos-offset="100" data-aos-duration="1000" src="../image_1.png" alt=""/>
<img data-aos="fade-right" data-aos-once="true" data-aos-offset="100" data-aos-duration="1000" src="../image_2.png" alt=""/>
```
<br>

----

<br>

### AOS 안될 경우 → 방법② JS 적용

<br>

##### HTML
```html
<div class="box" data-scroll="true" data-scroll-once="true">
    <img src="../image_1.png" alt=""/>
    <img src="../image_2.png" alt=""/>
</div>
```
##### CSS
```css
.box.on img{animation:left-300 1s forwards;}
.box.on img:nth-of-type(2){animation:right-300 1s .3s forwards;}
```
animation-duration사용하여 순차적으로 실행

##### Keyframes CSS
```css
@keyframes left-300{
    0% {
        transform: translateX(-300px);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}

@keyframes right-300{
    0% {
        transform: translateX(-300px);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}
```

<br>

### keyframe 사용 예시 ↓↓ 

### [슬라이드 애니메이션 - ③, ④](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/keyframes.html#slide)
### [메인 1 - box5, box6](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/example.html#main)
### [이미지 물결치는 효과 - 상하 좌우 순차적](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/example.html#wave-top)

<br>

----

<br>

</details>

### [본문_06]

<details>
<summary>이미지 상하 교차로 나타내기 (*위 아래에서 밀어내주는 효과)</summary>

<br>

예시 이미지)

<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_6.gif"/>

<br>

### 방법① - `AOS` 우선 적용

<br>

##### HTML
```html
<img data-aos="fade-down" data-aos-once="true" data-aos-offset="100" data-aos-duration="1000"  src="type2/v1/cont06_ani_01.png" alt=""/>
<img data-aos="fade-up" data-aos-once="true" data-aos-offset="100" data-aos-duration="1000"  src="type2/v1/cont06_ani_02.png" alt=""/>
<img data-aos="fade-down" data-aos-once="true" data-aos-offset="100" data-aos-duration="1000"  src="type2/v1/cont06_ani_03.png" alt=""/>
```

<br>

----

<br>

### AOS 안될 경우 → 방법② JS 적용

<br>

##### HTML
```html
<div class="box" data-scroll="true" data-scroll-once="true">
    <img src="../image_1.png" alt=""/>
    <img src="../image_2.png" alt=""/>
    <img src="../image_3.png" alt=""/>
</div>
```
##### CSS
```css
.box.on img{animation:top-200 1s forwards;}
.box.on img:nth-of-type(2){animation:bottom-200 1s forwards;}
```
##### Keyframes CSS
```css
@keyframes top-200{
    0% {
        transform: translateY(-200px);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}

@keyframes bottom-200{
    0% {
        transform: translateY(200px);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}
```

<br>

### keyframe 사용 예시 ↓↓ 

### [슬라이드 애니메이션 - ①, ②](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/keyframes.html#slide)
### [이미지 물결치는 효과 - 상하 좌우 순차적](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/example.html#wave-top)

<br>

----

<br>

</details>

### [본문_07]

<details>
<summary>이미지 나타내기 후 하이라이트 순차 강조(반복)   * 이 효과를 위해서는 각 이미지별로 디자인 컬러 입힌 작업이 선행되어야 함.</summary>

<br>

예시 이미지)


<img width=500px src="https://gscdn.hackers.co.kr/test/animation/group3_7.gif"/>

<br>
<br>

- 이미지 나타내기 → 상단 [본문_01] 밑에서 위로 나타내기 기본 효과]

- 해당 하이라이트 순차 강조(반복)은 GIF 파일 사용

<br>

### keyframe 사용 예시 ↓↓ 

### [슬라이드 애니메이션 - ①](https://tchamp.hackers.com/worksheet/champstudy/guide_202205/scroll_event/keyframes.html#slide)

<br>

----

<br>

</details>

## 참고 이벤트 페이지 URL ↓↓

<br>

[① 중국어 애니메이션 이벤트 페이지](https://china.hackers.com/?c=event&evt_id=22040501&sk=type2)

[② 인강 애니메이션 이벤트 페이지](https://tchamp.hackers.com/?c=event&evt_id=19032102&sk=type5)

<br>