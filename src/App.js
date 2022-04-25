import { Fragment, useState } from "react";

import Title from "./components/Layout/Title";
import Words from "./components/Words/Words";
import Bravo from "./components/Bravo/Bravo";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [clearedCards, setClearedCards] = useState({});

  console.log(clearedCards);

  const closeModalHandler = () => {
    setModalIsShown(false);
    setClearedCards({});
    window.location.reload();
  };

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  return (
    <Fragment>
      {modalIsShown && <Bravo onClose={closeModalHandler} />}
      <Title />
      <Words
        showModal={showModalHandler}
        clearedCards={clearedCards}
        setClearedCards={setClearedCards}
      />
    </Fragment>
  );
}

export default App;
