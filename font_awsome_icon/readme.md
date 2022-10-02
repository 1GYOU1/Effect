## fontawesome icon

[__fontawesome site__](https://fontawesome.com/)

include cdn

__HTML__
```html
<script src="https://kit.fontawesome.com/a1b5c56253.js" crossorigin="anonymous"></script>
```
__방법 ①__

icon code 사용 

__CSS__
```css
.icon::before {
        content: "\f567";
        font: var(--fa-font-solid);
        color: #ff5544;
        }

.smile::before {
    content: "\f118";
    font: var(--fa-font-solid);
    color: pink;
    }
```
__방법 ②__

i태그 copy해서 사용

__HTML__
```html
<i class="fa-solid fa-face-dizzy"></i>
```