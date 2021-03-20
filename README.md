# Simple-JS-Carousel
Simple, minimalistic carousel design based entirely on HTML, CSS and Javascript. It has a responsive design which displays 3 images at a time in devices with width >= 768 and single image at a time for smaller devices.

# Modification
You are allowed to modify the file(s) as you see fit as long as proper credits are provided.

# Preview
## Desktop:
![Desktop Preview](https://i.imgur.com/7px3v8X.png)
### GIF:
https://media.giphy.com/media/lj4irlvumAuLkTT3jF/giphy.gif (slowed down version, download actual files to see proper results)

## Mobile:
![Mobile Preview](https://i.imgur.com/YJpK1fI.png)
### GIF:
https://media.giphy.com/media/E0zDaxoA9YT9ArBk3Q/giphy.gif (slowed down version, download actual files to see proper results)

# Usage
If you want to use it, you are free to do so. The HTML code provided below must be included in your HTML file (and the respective styles provided in the styles.css) in order for the carousel to properly work:
```html
<div class="wrapper">
    <div class="nav-button" onclick="goLeft()">
        <i class="material-icons">keyboard_arrow_left</i>
    </div>
    <div class="carousel" id="carousel-container"></div>
    <div class="nav-button" onclick="goRight()">
        <i class="material-icons">keyboard_arrow_right</i>
    </div>
</div>
```

The images that you want to display must be added into the script.js file in the "images" array. It takes string of URLs. If you want to add your image, let's say, at https://www.site.com/images/my_image.png then it must be wrapped in quotation marks: "https://www.site.com/images/my_image.png".
```javascript
const images = [
    "https://www.site.com/images/my_image_1.png",
    "https://www.site.com/images/my_image_2.png",
    "https://www.site.com/images/my_image_3.png",
    "https://www.site.com/images/my_image_4.png"
];
```
