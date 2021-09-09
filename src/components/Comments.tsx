import Reply from './Reply'
import {CommentType} from '../data/comments'


const Comments = ({username, userImagePath, commentText, likeNum, replies}:CommentType) => {

// const {username, userImagePath, commentText, likeNum, replies}:CommentType = comments[0]

  const computeLike = (likeNum:number) => {
    if(likeNum === 0) return;
    else{
      return (
      <div className='flex items-center'>
      <img className='w-4 h-4 mr-1' src='/like.svg' alt="like img"></img>
      <p className='text-gray-500'>{likeNum} คน</p>
    </div>)
    
    }

  }
            /* comments section */
            return (
              <div className="">
        
              <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={userImagePath} alt="img profile"></img>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="font-semibold">{username}</p>
                  <p>{commentText}</p>
                  {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                  {computeLike(likeNum)}
                </div>
              </div>
    
              {replies.map(item => {
                return <Reply username={item.username} userImagePath={item.userImagePath} commentText={item.commentText}
                likeNum={item.likeNum} replies={item.replies} />
              })}
              
    
            </div>
            );

            }

export default Comments