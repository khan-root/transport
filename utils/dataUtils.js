import { FaEnvelope, FaFacebook, FaFacebookMessenger, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa6"
import { IoLogoWechat } from "react-icons/io5"

export const navabrData = [
    {id:1, title:'Home', url:'/'},
    {id:2, title:'Services', url:'/services'},
    {id:3, title:'About', url:'/about'},
    // {id:4, title:'Blog', url:'/blog'},
    // {id:5, title:'Contact', url:'/contact'},
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


export const constReachOutData = [
    {id:1, icon:<FaWhatsapp />, color:'text-green-500', link:'https://wa.me/+923116565767'},
    {id:2, icon:<FaFacebookMessenger />, color:'text-blue-500', link:'https://m.me/your-username'},
    {id:3, icon:<IoLogoWechat />, color:'text-green-500', link:'https://u.wechat.com/kNBMWkz1GC6nMdmVchaRnBk'},
]


export const categoryData = {
  cars: [
    {id:1, price:1000, rangePrice: 1500, name:'51-Seater Charter Coach', 
        ideal_seats:51, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'18000 to 24000', title:'Monthly', time:'30 Days'},	
            {price:'1000 to 1500', title:'Per Day', time:'10 Hrs'},	
            {price:'200', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
        image:'/assets/car1.jpg'
    },
  ],
  buses: [
    {id:1, price:1000, rangePrice: 1500, name:'51-Seater Charter Coach', 
        ideal_seats:51, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'18000 to 24000', title:'Monthly', time:'30 Days'},	
            {price:'1000 to 1500', title:'Per Day', time:'10 Hrs'},	
            {price:'200', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
        image:'/assets/bus1.jpg'
    },
    {id:2, price:900, rangePrice: 1400, name:'37-Seater Luxury Coach', 
        ideal_seats:37, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'17000 to 22000', title:'Monthly', time:'30 Days'},	
            {price:'900 to 1400', title:'Per Day', time:'10 Hrs'},	
            {price:'190', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
        image:'/assets/bus4.jpg'
    },
    {id:3, price:700, rangePrice: 1200, name:'35-Seater Charter Coach', 
        ideal_seats:35, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'16000 to 21000', title:'Monthly', time:'30 Days'},	
            {price:'700 to 1200', title:'Per Day', time:'10 Hrs'},	
            {price:'150', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
        image:'/assets/bus2.jpg'
    },
    {id:4, price:700, rangePrice: 1200, name:'33-Seater Charter Coach', 
        ideal_seats:33, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
             {price:'16000 to 21000', title:'Monthly', time:'30 Days'},	
            {price:'700 to 1200', title:'Per Day', time:'10 Hrs'},	
            {price:'150', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
        image:'/assets/bus3.jpg'
    },
  ],
  hiace: [
    {id:1, price:1000, rangePrice: 1500, name:'51-Seater Charter Coach', 
        ideal_seats:51, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'18000 to 24000', title:'Monthly', time:'30 Days'},	
            {price:'1000 to 1500', title:'Per Day', time:'10 Hrs'},	
            {price:'200', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
        image:'/assets/hiace1.jpg'
    },
  ],
};