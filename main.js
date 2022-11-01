const commentInput = document.querySelector(".main__feed_comments_input");
const commentForm = document.querySelector(".main__feed_comments_form");
const commentBtn = document.querySelector(".main__feed_comments_enter");
const commentArea = document.querySelector(".comment_area");
const addComment = document.getElementsByClassName("letAddNewComment");
let commentValue = "";

commentInput.addEventListener("keyup", function () {
  commentValue = commentInput.value;
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
  newComment.innerHTML = `<li> ${newCommentCtx} </li>`;
  addComment[0].appendChild(newComment);
});

//엔터를 쳐서 값을 가져오고 싶은데 -> form태그에 input & button 넣기
//왜 프리벤트이벤트가 안될? -> form 태그에 이벤트리스너를 붙여줬어야 했음. 22/10/31

/* <ul>
<li></li>
</ul> 
ul안에 어펜드차일드를 하세요! */

// newComment.innerHTML = `<li> ${newCommentCtx} </li>`;
// li에 새롭게 입력합니다
// addComment[0].appendChild(newComment);
// 원래는 document.appendCHild였는데 그 뜻은 전체 화면을 덮어 씌운다 라는 의미
// 그래서 addCommnet의 0번 인덱스에서 가져온다로 수정
// getElementbyclassname으로 가져왔기 떄문에 -> 이 건 배열로 가져오게 됨

// const addComment = document.getElementsByClassName("letAddNewComment");
//ul이 중복 사용되었기 때문에 클래스네임을 할당함
