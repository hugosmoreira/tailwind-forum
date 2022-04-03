import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}


const ProfileTweets = () => {
  
  const [tweets, setTweets] = useState([
    {
      timestamp: '',
      tweet: '',
    },
  ])
  const [author, setAuthor] = useState({
    name: '',
    profileImage: '',
    walletAddress: '',
    isProfileImageNft: undefined,
  })

  // useEffect(() => {
  //   if (!currentUser) return

  //   setTweets(currentUser.tweets)
  //   setAuthor({
  //     name: currentUser.name,
  //     profileImage: currentUser.profileImage,
  //     walletAddress: currentUser.walletAddress,
  //     isProfileImageNft: currentUser.isProfileImageNft,
  //   })
  // }, [currentUser])

  return (
    <div className={style.wrapper}>
      
    </div>
  )
}

export default ProfileTweets