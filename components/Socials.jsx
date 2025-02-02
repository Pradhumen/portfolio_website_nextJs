import Link from "next/link"
import {FaGithub,FaLinkedinIn,FaYoutube, FaTwitter} from "react-icons/fa"

const social = [
    {
        icon:<FaGithub/>,
        path:''
    },
    {
        icon:<FaLinkedinIn/>,
        path:''
    },
    {
        icon:<FaYoutube/>,
        path:''
    },
    {
        icon:<FaTwitter/>,
        path:''
    },
]

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {social.map((value,index)=>{
            return <Link key={index} href={value.path} className={iconStyles}>{value.icon}</Link>
        })}
    </div>
  )
}

export default Socials