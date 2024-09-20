import { FaEnvelope, FaFacebook, FaFacebookMessenger, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa6"
import { IoLogoWechat } from "react-icons/io5"

export const navabrData = [
    {id:1, title:'Home', url:'/'},
    {id:2, title:'Services', url:'/services'},
    {id:3, title:'About', url:'/about'},
    {id:4, title:'Gallery', url:'/gallery'},
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
    {id:1, icon:<FaWhatsapp />, color:'text-green-500', link:'https://wa.me/+971568681888 '},
    {id:2, icon:<FaFacebookMessenger />, color:'text-blue-500', link:'https://m.me/your-username'},
    {id:3, icon:<IoLogoWechat />, color:'text-green-500', link:'https://u.wechat.com/kNBMWkz1GC6nMdmVchaRnBk'},
]


export const categoryData = {
  cars: [
    {id:1, price:500, rangePrice: 850, name:'Mercedes V Class ( 7-seater)', 
        ideal_seats:7, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'8500 to 13000', title:'Monthly', time:'30 Days'},	
            {price:'500 to 850', title:'Per Day', time:'10 Hrs'},	
            {price:'100', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Mercedes V Class in Dubai is as follows',
        image:'/assets/car1.jpg',
        interialImages:[
            
            '/assets/car1.jpg',
            '/assets/sprinter3.jpg',
            '/assets/sprinter2.jpg',

        ],
        btnName:'Car'

    },
    {id:2, price:'Negotiable', rangePrice: '', name:'Kia Carnival SX Prestige ', 
        ideal_seats:5, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Mercedes V Class in Dubai is as follows',
        image:'/assets/kia.jpg',
        interialImages:[
            
            '/assets/kia.jpg',
            '/assets/kia2.jpg',
            '/assets/kia3.jpg',
        ],
        btnName:'Car'
    },
    {id:3, price:'Negotiable', rangePrice: '', name:'Toyota Fortuner', 
        ideal_seats:5, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Mercedes V Class in Dubai is as follows',
        image:'/assets/toyotaFortuner.jpeg',
        interialImages:[
            
            '/assets/fortuner2.jpg',
            '/assets/toyotaFortuner.jpeg',
            '/assets/fortuner3.jpg',
        ],
        btnName:'Car'
    },
    {id:4, price:'Negotiable', rangePrice: '', name:'Lexus 350', 
        ideal_seats:4, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Lexus 350 in Dubai is as follows',
        image:'/assets/lexus.jpeg',
        interialImages:[
            
            '/assets/lexus.jpeg',
        ],
        btnName:'Car'
    },
    {id:5, price:'Negotiable', rangePrice: '', name:'Toyota Previa', 
        ideal_seats:6, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Toyota Previa in Dubai is as follows',
        image:'/assets/previa.jpeg',
        interialImages:[
            
            '/assets/previa.jpeg',
        ],
        btnName:'Car'
        
    },
  ],
  buses: [
    {id:1, price:1000, rangePrice: 1500, name:'51-Seater-Luxury-Buses', 
        ideal_seats:51, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'18000 to 24000', title:'Monthly', time:'30 Days'},	
            {price:'1000 to 1500', title:'Per Day', time:'10 Hrs'},	
            {price:'200', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater-Luxury-Buses  in Dubai is as follows',
        image:'/assets/bus1.jpg',
        interialImages:[
            '/assets/bus1.jpg'
        ],
        btnName:'Bus'
    },
    {id:2, price:700, rangePrice: 1200, name:'35 Seater Yutong Luxury-Buses', 
        ideal_seats:35, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 35 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'16000 to 21000', title:'Monthly', time:'30 Days'},	
            {price:'700 to 1200', title:'Per Day', time:'10 Hrs'},	
            {price:'150', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 35 Seater Yutong Luxury-Buses  in Dubai is as follows',
        image:'/assets/bus2.jpg',
        interialImages:[
            '/assets/bus2.jpg'
        ],
        btnName:'Bus'
    },
    // {id:3, price:700, rangePrice: 1200, name:'35-Seater Charter Coach', 
    //     ideal_seats:35, max_seat:'', class:'First Class',
    //     main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 25 passengers with daily, hourly, and monthly rental options.',
    //     tableData :[
    //         {price:'16000 to 21000', title:'Monthly', time:'30 Days'},	
    //         {price:'700 to 1200', title:'Per Day', time:'10 Hrs'},	
    //         {price:'150', title:'Per Hour', time:'1Hr'},	

    //     ],
    //     tableHeader:['Bus Type', 'Time', 'Price'],
    //     tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
    //     image:'/assets/bus2.jpg'
    // },
    // {id:4, price:700, rangePrice: 1200, name:'22-Seater Charter Coach', 
    //     ideal_seats:22, max_seat:'', class:'First Class',
    //     main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 22 passengers with daily, hourly, and monthly rental options.',
    //     tableData :[
    //          {price:'16000 to 21000', title:'Monthly', time:'30 Days'},	
    //         {price:'700 to 1200', title:'Per Day', time:'10 Hrs'},	
    //         {price:'150', title:'Per Hour', time:'1Hr'},	

    //     ],
    //     tableHeader:['Bus Type', 'Time', 'Price'],
    //     tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
    //     image:'/assets/bus3.jpg'
    // },
    {id:5, price:650, rangePrice: 1100, name:'22-Seater Coaster', 
        ideal_seats:22, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 22 passengers with daily, hourly, and monthly rental options.',
        tableData :[
             {price:'10000 to 16000', title:'Monthly', time:'30 Days'},	
            {price:'650 to 1100', title:'Per Day', time:'10 Hrs'},	
            {price:'125', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 22-Seater Coaster in Dubai is as follows',
        image:'/assets/bus3.jpg',
        interialImages:[
            '/assets/bus3.jpg'
        ],
        btnName:'Bus'
    },
  ],
  hiace: [
    {id:1, price:'Negotiable', rangePrice: '', name:'Mercedes Sprinter', 
        ideal_seats:7, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Mercedes Sprinter  in Dubai is as follows',
        image:'/assets/hiace1.jpg',
        interialImages:[
            
            '/assets/sprinter2.jpg',
            '/assets/sprinter3.jpg',
        ],
        btnName:'Hiace'
    },
    {id:2, price:850, rangePrice: '', name:'15-Seater Hiace (HiRoof)', 
        ideal_seats:15, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'15000 to 25000', title:'Monthly', time:'30 Days'},	
            {price:'850', title:'Per Day', time:'10 Hrs'},	
            {price:'70', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Hiace Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 15-Seater Hiace (HiRoof) in Dubai is as follows',
        image:'/assets/hiace3.jpeg',
        interialImages:[
            
            '/assets/hiace1.jpg',
            '/assets/hiace3.jpeg',
        ],
        btnName:'Hiace'
    },
  ],
};