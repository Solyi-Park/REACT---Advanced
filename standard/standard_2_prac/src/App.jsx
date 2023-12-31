import React, { useState } from 'react';

function App() {

	const initialState1 = [
    { id: 1, name: '홍길동', age: 25, email: 'hong@example.com' },
    { id: 2, name: '김철수', age: 28, email: 'kim@example.com' },
    { id: 3, name: '이영희', age: 22, email: 'lee@example.com' }
  ];

	const initialState2 = [
    { userId: 1, hobbies: ['독서', '게임'] },
    { userId: 2, hobbies: ['여행', '음악 감상'] },
    { userId: 3, hobbies: ['영화 감상', '요리'] }
  ];
  const name = [...initialState1];
  const filtered = name.filter(function(item) {
    item.name});
    console.log(filtered)
	// TODO: 여기에서 initialState1, initialState2를 조합하여 state를 만듭니다.
	const [users, setUsers] = useState();
 
	const handleSelectUser = function (name, hobbies) {
		alert(`${name}님 안녕하세요! ${hobbies}취미는 너무 멋진 것 같아요!`);
	}

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => handleSelectUser(user.name, user.hobbies.join(", "))}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



