import { useState } from 'react';

const Say = () => {
  const [msg, setMsg] = useState('...');
  const [color, setColor] = useState('');
  const onClickEnter = () => setMsg('안녕');
  const onClickLeave = () => setMsg('잘가');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{msg}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨강
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파랑
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록
      </button>
    </div>
  );
};

export default Say;
