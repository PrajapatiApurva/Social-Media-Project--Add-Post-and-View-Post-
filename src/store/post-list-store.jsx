import React,{createContext, useReducer} from 'react'

export const PostListContext = createContext({
    postList:[],  
    addPots:()=>{},
    deletePost:()=>{}
});

const postListReducer = (currPostList,action) => {
  let updatedPostList=currPostList;
  if(action.type === 'ADD_POST'){
    updatedPostList = [action.payload,...currPostList];
  }
  else if(action.type === 'DELETE_POST'){
    updatedPostList = currPostList.filter((post) => 
      post.id !== action.payload.postId
    );
  }
  return updatedPostList;
}

function PostListProvider({children}) {

  const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

  const addPost = (userId,title,body,tags,reactions) => {
    console.log(userId,title,body,tags,reactions);
    const time=new Date();
    dispatchPostList({
      type:'ADD_POST',
      payload:{
        id:time.toLocaleTimeString(),
        title:title,
        body:body,
        reactions:reactions,
        userId:userId,
        tags:tags
      }
    });
  }

  const deletePost = (postId) => {
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postId
      }
    });
  }
    
  return (
    <PostListContext.Provider value={{
      postList,
      addPost,
      deletePost
      }}
    >
      {children}
    </PostListContext.Provider>
  );
}

const DEFAULT_POST_LIST = [
  {
    id:'1',
    title:'Going To Hometown',
    body:`Hi Friends, I am going to my hometown for a week.
          I will be back soon. Take care.`,
    reactions:2,
    userId:'user-9',
    tags:['travel','hometown']
  },
  {
    id:'2',
    title:'New Job',
    body:`I have got a new job in a new city. I am excited
          to start a new journey.`,
    reactions:5,
    userId:'user-10',
    tags:['job','new']
  }
];

export default PostListProvider;