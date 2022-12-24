import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Join from './component/Join/Join';
import Plan from './component/Plan/Plan';
import Programs from './component/Programs/Programs';
import Reason from './component/Reason/Reason';
import Testimonials from './component/Testimonials/Testimonials';


function App() {
  return (
    <>
      <Hero/>
      <Programs/>
      <Reason/>
      <Plan/>
      <Testimonials />
      <Join/>
      <Footer/>
    </>

  );
}

export default App;
