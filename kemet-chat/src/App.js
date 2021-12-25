//9vfg2nfhspts
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGF2ZS1tYXR0aGV3cyJ9.VtjAA_5ySyVWTwl4FxC4yUYuEn29IqFn3zQ_O-q-nrs



import React, { useEffect, useState } from 'react'
import { StreamChat } from 'stream-chat'
import { useCookies } from 'react-cookie'


import {
  Chat,
  Channel
} from 'stream-chat-react'
import '@stream-io/stream-chat-css/dist/css/index.css'
import Authorization from './components/Authorization'
import MessagingContainer from './components/MessagingContainer'
import Video from './components/Video'

const client = StreamChat.getInstance('9vfg2nfhspts')

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [channel, setChannel] = useState(null)

  const authToken = cookies.AuthToken
  //useEffect(() => {
   // 
 // }, [])
 const setupClient = async () => {
  try {
    await client.connectUser(
      {
        id: cookies.UserId,
        name: cookies.Name,
        hashedPassword: cookies.hashedPassword,
      },
      authToken,
    )

    const channel = await client.channel('messaging', 'the-chosen-ones',
    {
      name: 'The Chosen Ones',

    })
    setChannel(channel)

  } catch (err) {
    console.log(err);
  }
}

if (authToken) setupClient()


  return (
    <>
      {!authToken && <Authorization/>}
      {authToken && <Chat client={client} darkMode ={true}>
       
        <Channel channel={channel}>
          <Video/>
          <MessagingContainer/>
        </Channel>
      </Chat>}
    </>
  )
}

export default App
