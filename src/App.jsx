// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import Vote from "./components/Vote/Vote";
import { useState } from "react";
import Counter from "./components/Counter/Counter";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Show modal</button>
      <Counter />
      {isOpen && (
        <Modal onClose={toggleModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum, quasi
          quam magni sequi ut repellat iure exercitationem odit voluptate!
        </Modal>
      )}
      {/* <ColorPicker /> */}
      {/* <Vote /> */}
    </>
  );
};

export default App;
