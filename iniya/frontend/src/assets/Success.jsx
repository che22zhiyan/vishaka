export default function Success(){
    const user =JSON.parse(localStorage.getItem('user'));
    
    return (
         <div>
          <h2> Welcome,{user?.username}</h2>
          
            <p>you have successfully logged in.</p>
    </div>)
}
                                                                                                               