import React,{useState} from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'
import './App.css'

function App() {

  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <PostListProvider>
      <section className={`${styles.appContainer}`}>
        <Sidebar 
          onSelectedTab={selectedTab}
          onSetSelectedTab={setSelectedTab}
        />
        <div className={`${styles.mainContent}`}>
          <Header/>
          {selectedTab === 'home' ? <PostList/> : <CreatePost/>}
          <Footer/>
        </div>
      </section> 
    </PostListProvider>
  );
}

export default App;
