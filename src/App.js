import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';

function App() {
  return (
    <>
      <Header title={'This is title'} descr={'This is Description!'} />
      <Layout
        id={'firstLayout'}
        urlBg={bg1}
        title={'Layout_1'}
        descr={'This is Description Layout_1!'}
      />
      <Layout
        id={'SecondLayout'}
        colorBg="purple"
        title={'Layout_2'}
        descr={'This is Description Layout_2!'}
      />
      <Layout
        id={'ThirdLayout'}
        urlBg={bg2}
        title={'Layout_3'}
        descr={'This is Description Layout_3!'}
      />
      <Footer />
    </>
  );
}

export default App;
