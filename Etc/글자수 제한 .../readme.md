## 한줄라인 글자수 제한

```html
<div class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ab?</div>
```

```css
.txt {
      width:70px;
      padding:0 5px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
  }
```

- Block레벨 테그에서만 적용
- overflow:hidden : 넓이가 70px를 넘어서는 내용에 대해서는 보이지 않게 처리함
- text-overflow:ellipsis : 글자가 넓이 70px를 넘을 경우 생략부호를 표시함
- white-space:nowrap : 공백문자가 있는 경우 줄바꿈하지 않고 한줄로 나오게 처리함 (\A로 줄바꿈가능)