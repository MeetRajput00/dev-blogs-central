export default function Article(props){
    return(
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
             <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a>{props.postname}</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{props.post}</p>
              <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                  <svg className="w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                      <span className="font-medium dark:text-white">
                          {props.username}
                      </span>
                  </div>
              </div>
          </article> 
    );
}