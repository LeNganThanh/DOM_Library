const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];
//get reverse the author name

const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("h1");
header.style.margin = "100px";

// toReadClone.style.backgroundColor = "gray";

reverseAuthorName = authorName => {
  let authorN = authorName.split(" ").reverse().join(", ");
  return authorN;
};

books.sort((a, b) => {
  const nameA = reverseAuthorName(a.author);
  const nameB = reverseAuthorName(b.author);
  return nameA.localeCompare(nameB);
});

/*----without Bootstrap-------------------------------

const bookSection = document.createElement("section");
bookSection.style.display = "flex";
bookSection.style.justifyContent = "space-around";
body.append(bookSection);
books.forEach(book => {
  const bookDiv = document.createElement("div");
  const bookImg = document.createElement("img");
  bookImg.src = book.img;
  bookImg.style.width = "250px";
  bookImg.style.height = "350px";
  bookImg.style.border = "3px solid maroon";

  const bookDetail = document.createElement("div");
  bookDetail.style.border = "1px solid wheat";
  bookDetail.style.padding = "10px";
  bookDetail.style.width = "250px";
  bookDetail.style.height = "100px";

  const bookTitle = document.createElement("h5");
  bookTitle.textContent = book.title;
  bookTitle.style.width = "80%";

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = reverseAuthorName(book.author);

  const bookRead = document.createElement("div");
  bookRead.style.border = "1px solid wheat";
  bookRead.style.padding = "10px";
  bookRead.style.width = "250px";
  bookRead.style.height = "50px";
  bookRead.style.backgroundColor = "lightgray";
  bookRead.style.display = "flex";
  bookRead.style.justifyContent = "flex-end";
  const bookSpan = document.createElement("span");
  bookSpan.style.width = "fit-content";
  bookSpan.textContent = book.alreadyRead ? "Read" : "To Read";
  bookSpan.style.backgroundColor = book.alreadyRead ? "green" : "gray";
  bookSpan.style.padding = "2px 13px";
  bookSpan.style.color = "white";
  bookSpan.style.borderRadius = "15px";

  bookSection.append(bookDiv);
  bookDiv.prepend(bookImg);
  bookDiv.append(bookDetail);
  bookDetail.prepend(bookTitle);
  bookDetail.append(bookAuthor);
  bookDetail.after(bookRead);
  bookRead.append(bookSpan);
}); */

//----Using Bootstrap class -------------------------
books.forEach(book => {
  const bookList = document.querySelector(".book-list");
  const bookItem = document.createElement("li");
  bookItem.classList.add("book", "card", "mb-3");
  bookItem.style.width = "250px";

  const bookCard = document.createElement("section");
  bookCard.classList.add("card-body");

  const bookImg = document.createElement("img");
  bookImg.classList.add("book-img", "card-img-top");
  bookImg.src = book.img;
  bookImg.style.width = "250px";
  bookImg.style.height = "350px";
  bookImg.style.border = "3px solid maroon";

  const bookFooter = document.createElement("footer");
  bookFooter.classList.add("card-footer", "text-end");

  const bookTitle = document.createElement("h5");
  bookTitle.classList.add("card-title", "book-title");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add(
    "card-subtitle",
    "book-author",
    "text-muted",
    "small"
  );
  bookAuthor.textContent = reverseAuthorName(book.author);

  const bookRead = document.createElement("span");
  bookRead.classList.add(
    "status",
    "rounded-pill",
    "bg-secondary",
    "badge",
    "fw-normal"
  );
  bookRead.textContent = "To Read";
  //check if Read or To Read status
  if (book.alreadyRead) {
    bookRead.classList.replace("bg-secondary", "bg-success");
    bookRead.textContent = "Read";
  }

  bookList.append(bookItem);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookFooter.appendChild(bookRead);
  bookItem.appendChild(bookImg);
  bookItem.appendChild(bookCard);
  bookItem.appendChild(bookFooter);
});
