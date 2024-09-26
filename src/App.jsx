import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import { messageData } from "./helpers/messageData";

const App = () => {
  return (
    <>
      <Header />
      {messageData.map((message) => (
        <Message
          key={message.id}
          name={message.name}
          fathers={message.fathers}
          online={message.online}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
