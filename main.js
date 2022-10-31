const commentInput = document.querySelector(".main__feed_comments_input");
const commentForm = document.querySelector(".main__feed_comments_form");
const commentBtn = document.querySelector(".main__feed_comments_enter");
const commentArea = document.querySelector(".comment_area");

commentInput.addEventListener("keyup", function () {
  let commentValue = commentInput.value;
  if (commentValue.length > 0) {
    commentBtn.disabled = false;
    commentBtn.style.cursor = "pointer";
    commentBtn.style.color = "#488bff";
  } else {
    commentBtn.disabled = true;
    commentBtn.style.cursor = "default";
    commentBtn.style.color = "#488bff";
  }
});

//${id} + ${ctx} + delete button
//const inputCtx = input.value;

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCommentCtx = commentInput.value;
  const newComment = document.createElement("li");
  document.innerHTML = `<li> ${newCommentCtx} </li>`;
  console.log(newCommentCtx);
});

//무언가 되어가고 있다!
//엔터를 쳐서 값을 가져오고 싶은데 ㅇㅅㅇ -> form태그에 input & button 넣기
//왜 프리벤트이벤트가 안될? -> form 태그에 이벤트리스너를 붙여줬어야 했음. 22/10/31
