import Category from "./../components/category/Category";
import Header from "./../components/header/Header";
import Sets from "./../components/sets/Sets";
import Modal from "./../components/modal/Modal";
import Slider from "./../components/slider/Slider";
import Footer from "./../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Category/>
      <Slider />
      <Sets titleMain="Наборы"></Sets>
      <Modal>
        <h2>Welcome to the Modal</h2>
        <p>This is a sample modal component.</p>
      </Modal>
      <Footer />
    </>
  );
}
