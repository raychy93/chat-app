import {ChannelHeader, MessageInput, MessageList, Thread, Window} from "stream-chat-react"
import React from "react"
import {useCookies} from "react-cookie"
/**
 * 

 */

const MessagingContainer =()=>{
   
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const logout = () => {
        removeCookie('Name', cookies.Name)
        removeCookie('HashedPassword', cookies.HashedPassword)
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        
        
        window.location.reload()
    }




    return(
        <div className='messaging-container'>
               
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
                <button className = "standard-button" onClick={logout}>Logout</button>
                
            </Window>
            <Thread />
        </div>
    )
}

export default MessagingContainer