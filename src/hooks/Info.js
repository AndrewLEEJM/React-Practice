import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNicName] = useState('');
  /* useEffect(() => {
    console.log('렌더링될 때마다 실행됩니다
    .');
    console.log({ name, nickName });
  }); */
  /* useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []); */
  /* useEffect(() => {
    console.log('특정[name] 값이 업데이트될 때만 실행됩니다.');
    console.log(name);
  }, [name]); */
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('clean up');
      console.log(name);
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNicName = (e) => {
    setNicName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNicName} />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickName}
      </div>
    </div>
  );
};

export default Info;
