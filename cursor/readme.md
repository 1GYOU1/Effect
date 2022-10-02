## __:not()__

선택할 요소:not(제외시킬 요소) { ... }
```css
#cursor:not(.small){width: 60px;height: 60px;}
```

<br>

선택할 요소:not(제외시킬 속성) { ... }

href 속성, .disabled을 가진 요소 제외하고 스타일 적용 
```css
#cursor:not(href){color:pink}
#cursor:not(.disabled){color:blue}
```