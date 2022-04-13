import Modal from "../UI/Modal";

const Bravo = props => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <h1>Bravo!</h1>
        <p>All words are matched correctly</p>
        <button onClick={props.onClose}>Restart</button>
      </div>
    </Modal>
  );
};

export default Bravo;
