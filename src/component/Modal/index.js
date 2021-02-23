import "./modal.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalWinner({ id, name, points, setModalOpen, open }) {
  return (
    <Modal
      isOpen={open}
      // ariaHideApp={false}
      onRequestClose={() => {
        setModalOpen(false);
      }}
    >
      <div className="modal modal__container">
        <div className="modal__header">
          <p>Pokefight</p>
          <span
            className="modal__btn-cancel"
            onClick={() => setModalOpen(false)}
          >
            x
          </span>
        </div>
        <div className="modal__content">
          <div className="modal__body">
            <img
              // src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={`Pokemon Id ${id} loading ...`}
            />
            <p>
              ! {points} points !
              <br />
              The winner is {name}
            </p>
            {console.log({ name })}
          </div>
        </div>
      </div>
    </Modal>
  );
}
