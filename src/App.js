import { Fragment, useState } from "react";

import Title from "./components/Layout/Title";
import Words from "./components/Words/Words";
import Bravo from "./components/Bravo/Bravo";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [clearedCards, setClearedCards] = useState({});

  const closeModalHandler = () => {
    setModalIsShown(false);
    setClearedCards({});
  };

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  console.log(modalIsShown);
  return (
    <Fragment>
      {modalIsShown && (
        <Bravo onClose={closeModalHandler} />
      )}
      <Title />
      <Words showModal={showModalHandler} clearedCards={clearedCards}/>
    </Fragment>
  );
}

export default App;
