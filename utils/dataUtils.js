import { FaEnvelope, FaFacebook, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa6"

export const navabrData = [
    {id:1, title:'Home', url:'/'},
    {id:2, title:'Browse', url:'/browse'},
    {id:3, title:'About', url:'/about'},
    {id:4, title:'Blog', url:'/blog'},
    {id:5, title:'Contact', url:'/contact'},
]


export const footerSocialMedia  = [
    {id:1, icon: <FaLinkedin />},
    {id:2, icon: <FaTwitter />},
    {id:3, icon: <FaFacebook />},
]



export const footerCompany = [
    {id:1, title:'About'},
    {id:2, title:'Term of Service'},
    {id:3, title:'Privacy Policy'},
    {id:4, title:'Cookie Policy'},
]

export const footerOtherData = [
    {id: 1, title:'Home'},
    {id: 2, title:'Browse All'},
    {id: 3, title:'Blog'},
    {id: 4, title:'Support'},
]


export const footerContactUs = [
    {id:1, description:'2235 Colony Street New Haven, CT 06511', icon:<FaLocationArrow />},
    {id:2, description:'3434343434', icon:<FaPhone />},
    {id:3, description:'test@gmail.com', icon:<FaEnvelope />},
]