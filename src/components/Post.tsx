
const Post = () => (

<div className="space-y-2">

{/* image and name */}
<div className="flex space-x-2 items-center">
  <img className="w-12 h-12 rounded-full" src="/profileImages/myProf.png" alt="thanawat pic"></img>
  <span className='font-semibold text-lg'>Thanawat Bumpengpun 630610736</span>
</div>

{/* status message */}
<p>ทำไมผมส่ง comments ไป components อื่นไม่ได้ T_T #261207</p>

{/* like section */}
<div className='flex items-center'>
  <img className='w-4 h-4 mr-1' src='/like.svg' alt="like img"></img>
  <p className='text-gray-500'>736 คน</p>
</div>
</div>
    )

export default Post
