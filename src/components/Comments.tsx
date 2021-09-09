import Reply from './Reply'

const Comments = (comments:any) => {


  const computeLike = (likeNum:number) => {
    if(likeNum > 0) return;
    else{
      <div className='flex items-center'>
      <img className='w-4 h-4 mr-1' src='/like.svg' alt="like img"></img>
      <p className='text-gray-500'>999 คน</p>
    </div>
    }

  }
            /* comments section */
            return (
              <div className="">
        
              <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={comments.userImagePath} alt="img profile"></img>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="font-semibold">{comments.username}</p>
                  <p>{comments.commentText}</p>
                  {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                  {computeLike(comments.likeNum)}
                </div>
              </div>
    
         
              <Reply data={comments.replies}/>
    
            </div>
            );

            }

export default Comments