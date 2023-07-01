// crud 구현 시도하기.

const submitBtn = document.querySelector(".submit_btn");
let todoId = 1;

// 할 일을 만드는 함수 만들기. (Create)

const submitTodo = () => {
  // 1. submit 버튼을 누르면 아래에 계속 할 일이 추가되도록 만들기.

  const todo = document.getElementById("todo__list");
  const li = document.createElement("li");
  const todoContainer = document.getElementById("todo__container");

  const modBtn = document.createElement("button");
  const delBtn = document.createElement("button");

  const modBtnText = document.createTextNode("수정");
  const delBtnText = document.createTextNode("삭제");

  modBtn.appendChild(modBtnText);
  delBtn.appendChild(delBtnText);

  // 버튼에 클래스 이름 추가하기.

  modBtn.className = "mod__btn";
  delBtn.className = "del__btn";

  // li 태그 안에 할 일을 넣어주기.
  li.textContent = todo.value;

  if (todoContainer.childElementCount < 10) {
    // 2. 최대 10개까지 할 일을 추가할 수 있다.
    // 3. 할 일이 추가되면, 각각의 할 일에 id를 넣어주기.
    // 4. li 태그 안에 삭제, 수정 버튼 만들어주기.

    li.appendChild(modBtn);
    li.appendChild(delBtn);

    li.id = todoId;
    todoContainer.appendChild(li);
    todoId += 1;
  }

  // 4. submit 버튼을 누르면 input 안에 있는 값을 초기화하기.
  todo.value = "";
};
