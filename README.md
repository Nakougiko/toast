# @lukasgoulois/toast

Lightweight and customizable toast notifications in vanilla JavaScript.
Automatically creates its container, supports dynamic positioning, and allows full style overrides.

---

## ✨ Features

* ✅ Tiny and dependency-free
* ✅ Auto-creates `.toast-container` in the desired position (`top-right`, `bottom-left`, etc.)
* ✅ Multiple toast types: `info`, `success`, `error`
* ✅ Fully customizable via CSS (override or add your own `.toast-x` classes)
* ✅ Automatic removal after a set duration
* ✅ Optional positions: `top-left`, `top-right`, `bottom-left`, `bottom-right` (default)

---

## 🚀 Usage

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Nakougiko/toast@1.0.0/toast.css" />
<script type="module">
  import { showToast } from "https://cdn.jsdelivr.net/gh/Nakougiko/toast@1.0.0/toast.js";

  showToast("Hello world!", "success", 3000, "top-left");
</script>
```

---

## 🔧 API

### `showToast(message, type?, duration?, position?)`

* `message` (string): The text content of the toast (required).
* `type` (string): Toast style — can be `info`, `success`, `error`, or any custom class like `toast-x`. Defaults to `info`.
* `duration` (number): How long the toast stays visible in milliseconds. Defaults to `3000`.
* `position` (string): Position of the container. Choose from `top-left`, `top-right`, `bottom-left`, `bottom-right`. Defaults to `bottom-right`.

---

## 🎨 Custom Styling

You can define your own styles by creating custom classes:

```css
.toast-x {
  background: #6a1b9a;
  color: #fff;
  font-weight: bold;
}
```

Then display it like this:

```js
showToast("Custom toast with purple background!", "x", 5000, "top-left");
```

---

## 🧪 Demo

Clone and run `test.html` locally to try it out:

```bash
git clone https://github.com/Nakougiko/toast.git
cd toast
open test.html
```

---

## 📄 License

MIT © [Lukas Goulois](https://github.com/Nakougiko)
