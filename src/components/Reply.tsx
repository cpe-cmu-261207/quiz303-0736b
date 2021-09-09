

const Reply = (replies:any) => {
                /* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */
                return (
                <div className="flex p-2 items-start space-x-2 pl-14">
                <img className="w-10 w-10 rounded-full" src={replies.userImagePath} alt="img profile"></img>
                <div className="bg-gray-200 rounded-lg p-2">
                  <p className="font-semibold">{replies.username}</p>
                  <p>{replies.commentText}</p>
                </div>
              </div>);
}

export default Reply