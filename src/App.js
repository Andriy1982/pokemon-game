import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';
// console.log(bg1);
// const bg1 = '../../images/bg1.jpg'

function App() {
  return (
    <>
      <Header title={'This is title'} descr={'This is Description!'} />
      <Layout
        id={'firstLayout'}
        urlBg={bg1}
        //  style = {{backgroundImage: "url(" +{bg1} + ")"  }}
        //  backgroundImage: "url(" + { Background } + ")"
      />
      <Layout id={'SecondLayout'} colorBg="purple" />
      <Layout id={'ThirdLayout'} urlBg={bg2} />
      <Footer />
    </>
  );
}

export default App;
