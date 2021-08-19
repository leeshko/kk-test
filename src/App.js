
import React, { useState } from 'react';
import Button from './components/button/Button';
import s from './app.module.css';

const App = () => {

  const [firstBtnValue, setFirstBtnValue] = useState(1);
  const [showSecondRow, setShowSecondRow] = useState(false);

  const btnInnerNumbers = [1, 2, 3];

  const handleFirstBtnClick = (e) => {
    setShowSecondRow(!showSecondRow);
  }

  const changeNumber = (e) => {
    setFirstBtnValue(e.target.innerText)
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.firstBtnRow}>
          <Button
            handleClick={handleFirstBtnClick}
          >
            <p>{firstBtnValue}</p>
          </Button>
        </div>

        { showSecondRow &&
          <div className={s.secondBtnRow}>
            {btnInnerNumbers.map(num =>
              <Button
                key={num}
                handleClick={changeNumber}
              >
                <p>{num}</p>
              </Button>)}
          </div>
        }
      </div>
    </>
  )
}

export default App;