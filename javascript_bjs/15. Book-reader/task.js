const fontSizeButtons = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');
const textButtons = Array.from(document.querySelectorAll('.color'));
const backgroundButtons = Array.from(document.querySelectorAll('.color_bg'));

fontSizeButtons.forEach((btn) => {
    btn.addEventListener('click', switchSize);
});

textButtons.forEach((btn) => {
    btn.addEventListener('click', switchTextColor);
});

backgroundButtons.forEach((btn) => {
    btn.addEventListener('click', switchBackground);
});

function switchSize(event) {
    event.preventDefault();
    fontSizeButtons.forEach((btn) => {
        if (btn.classList.contains("font-size_active")) {
            btn.classList.remove("font-size_active");
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
          }
        });

        if (this.classList.contains("font-size_small")) {
            this.classList.add("font-size_active");
            book.classList.add("book_fs-small");
        } else if (this.classList.contains("font-size_big")) {
            this.classList.add("font-size_active");
            book.classList.add("book_fs-big");
        } else if (book.classList != "book_fs-big" && book.classList != "book_fs-small") {
            this.classList.add("font-size_active");
        }
}

function switchTextColor(event) {
    event.preventDefault();
    textButtons.forEach((btn) => {
        if (btn.classList.contains("color_active")) {
            btn.classList.remove("color_active");
            book.classList.remove("book_color-gray");
            book.classList.remove("book_color-whitesmoke");
            book.classList.remove("book_color-black");
          }
        });

        if (this.classList.contains("text_color_whitesmoke")) {
            this.classList.add("color_active");
            book.classList.add("book_color-whitesmoke");
        } else if (this.classList.contains("text_color_gray")) {
            this.classList.add("color_active");
            book.classList.add("book_color-gray");
        } else if (book.classList != "book_color-whitesmoke" && book.classList != "book_color-gray") {
            this.classList.add("color_active");
            book.classList.add("book_color-black");
        }
}

function switchBackground(event) {
    event.preventDefault();
    textButtons.forEach((btn) => {
        if (btn.classList.contains("color_active")) {
            btn.classList.remove("color_active");
            book.classList.remove("book_bg-gray");
            book.classList.remove("book_bg-white");
            book.classList.remove("book_bg-black");
          }
        });

        if (this.classList.contains("bg_color_black")) {
            this.classList.add("color_active");
            book.classList.add("book_bg-black");
        } else if (this.classList.contains("bg_color_gray")) {
            this.classList.add("color_active");
            book.classList.add("book_bg-gray");
        } else if (book.classList != "book_bg-gray" && book.classList != "book_bg-black") {
            this.classList.add("color_active");
            book.classList.add("book_bg-white");
        }
}



