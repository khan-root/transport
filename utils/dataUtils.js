import { FaEnvelope, FaFacebook, FaFacebookMessenger, FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa6"
import { IoLogoWechat } from "react-icons/io5"

export const navabrData = [
    {id:1, title:'Home', url:'/'},
    {id:2, title:'Services', url:'/services'},
    {id:3, title:'About', url:'/about'},
    {id:4, title:'Gallery', url:'/gallery'},
    // {id:5, title:'Contact', url:'/contact'},
]


export const footerSocialMedia  = [
    {id:1, icon: <FaWhatsapp />, link:'https://wa.me/+971568681888 '},
    {id:3, icon: <FaFacebook />, link:'https://www.facebook.com/profile.php?id=61564524538991&mibextid=ZbWKwL'},
]



export const footerCompany = [
    {id:1, title:'About'},
    {id:2, title:'Term of Service'},
    {id:3, title:'Privacy Policy'},
    {id:4, title:'Cookie Policy'},
]

export const footerOtherData = [
    {id: 1, title:'Home',url:'/'},
    {id: 2, title:'Browse All', url:'/services'},
    // {id: 3, title:'Blog'},
    // {id: 4, title:'Support'},
]



export const footerContactUs = [
    {id:1, description:'Dubai United Arab Emirates', icon:<FaLocationArrow />},
    {id:2, description:'+971 56 868 1888', icon:<FaPhone />},
    {id:3, description:'zainexpress2024@gmail.com', icon:<FaEnvelope />},
]


export const constReachOutData = [
    {id:1, icon:<FaWhatsapp />, color:'text-green-500', link:'https://wa.me/+971568681888 '},
    {id:2, icon:<FaFacebookMessenger />, color:'text-blue-500', link:'https://www.facebook.com/profile.php?id=61564524538991&mibextid=ZbWKwL'},
    {id:3, icon:<IoLogoWechat />, color:'text-green-500', link:'https://u.wechat.com/kNBMWkz1GC6nMdmVchaRnBk'},
]


export const categoryData = {
  cars: [
    {id:1, price:'Negotiable', rangePrice: '', name:'Mercedes V Class ( 7-seater)', 
        ideal_seats:7, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},		
            

        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Mercedes V Class in Dubai is as follows',
        image:'/assets/car1.jpg',
        interialImages:[
            
            '/assets/car1.jpg',
            '/assets/sprinter3.jpg',
            '/assets/sprinter2.jpg',

        ],
        btnName:'Car',
        overviewDescription:'The Mercedes V-Class is a luxury MPV (multi-purpose vehicle) designed for families, business transport, and group travel. The 7-seater configuration offers spaciousness and flexibility, making it ideal for both leisure and professional use.',
        keyFeaturesTitle:'Key Features',
        usageFeaturesTitle:'Technology and Entertainment',
        keyFeatures:[
            {title:'Seating Configuration', description:'Accommodates up to 7 passengers with versatile seating arrangements, including options for individual seats or a bench configuration.'},
            {title:'Comfortable Seating', description:'Ergonomically designed seats that are adjustable, providing excellent support for long journeys.'},
            {title:'Luxurious Interior', description:'High-quality materials, ambient lighting, and customizable options to enhance the passenger experience.'},
        ],
        usageFeatures:[
            {title:'Infotainment System', description:'Features the MBUX (Mercedes-Benz User Experience) system, including a touchscreen interface, navigation, Bluetooth connectivity, and smartphone integration.'},
            {title:'Audio System', description:'Premium sound system for an enhanced listening experience.'},
            {title:'Wi-Fi Connectivity', description:'Available in some models, allowing passengers to stay connected during travels'}
        
        ],
        safetyFeaturesTitle:'Safety Features',
        safteyFeatures:[
            {title:'Advanced Safety Systems', description:'Includes Active Brake Assist, Attention Assist, and Crosswind Assist to enhance driving safety.'},
            {title:'Surround View Camera', description:' Offers a 360-degree view to assist with parking and maneuvering.'},
            {title:'Child Safety Features', description:'Isofix anchor points for secure installation of child seats.'}
        ]


    },
    {id:2, price:'Negotiable', rangePrice: '', name:'Kia Carnival SX Prestige ', 
        ideal_seats:5, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},		
            

        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Mercedes V Class in Dubai is as follows',
        image:'/assets/kia.jpg',
        interialImages:[
            
            '/assets/kia.jpg',
            '/assets/kia2.jpg',
            '/assets/kia3.jpg',
        ],
        btnName:'Car',
        overviewDescription:'The Kia Carnival SX Prestige is a premium multi-purpose vehicle (MPV) designed for families and group travel. Known for its spaciousness, modern features, and versatile configurations, the Carnival is a strong contender in the luxury MPV segment.',
        keyFeaturesTitle:'Key Features',
        keyFeatures:[
            {title:'Seating Capacity', description:'Configured to comfortably seat up to 8 passengers, offering ample space for families and larger groups'},
            {title:'Versatile Seating Arrangements', description:'The second-row seats can slide and recline, and the third row can be easily folded flat for extra cargo space'}
        ],
        usageFeaturesTitle:'Interior Comfort and Quality',
        usageFeatures:[
            {title:'Luxurious Interior', description:'High-quality materials and finishes, including leather upholstery and soft-touch surfaces, create a premium atmosphere.'},
            {title:'Adjustable Seating', description:'Power-adjustable front seats with heating and ventilation options for added comfort.'},
            {title:'Ambient Lighting', description:'Customizable interior lighting to enhance the mood.'}
        ],
        safetyFeaturesTitle:'Technology and Infotainment',
        safteyFeatures:[
            {title:'Infotainment System', description:' Features a large touchscreen display with Kia’s latest UVO Connect technology, including navigation, Bluetooth connectivity, and smartphone integration via Apple CarPlay and Android Auto.'},
            {title:'Audio System', description:'Premium audio system with multiple speakers for an immersive listening experience.'},
            {title:'Rear-Seat Entertainment', description:'Optional rear entertainment system to keep passengers entertained during long journeys.'}
        
        ],
        otherFeaturesTitle:'Safety Features',
        otherFeatures:[
            {title:'Advanced Safety Technologies', description:'Equipped with a suite of safety features, including',
                data:[
                    {description:'Forward Collision-Avoidance Assist'},
                    {description:'Lane Keeping Assist'},
                    {description:'Blind-Spot Monitoring'}
                ]
            },
        ]


        

    },
    {id:3, price:'Negotiable', rangePrice: '', name:'Toyota Fortuner', 
        ideal_seats:5, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},		
        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Mercedes V Class in Dubai is as follows',
        image:'/assets/toyotaFortuner.jpeg',
        interialImages:[
            
            '/assets/fortuner2.jpg',
            '/assets/toyotaFortuner.jpeg',
            '/assets/fortuner3.jpg',
        ],
        btnName:'Car',
        overviewDescription:'The Toyota Fortuner is a mid-size SUV that has gained popularity for its rugged design, reliability, and off-road capabilities. Designed for both urban and adventurous settings, it is well-suited for families and outdoor enthusiasts.',
        keyFeaturesTitle:'Key Features',
        keyFeatures:[
            {title:'Seating Capacity', description:'Typically, available in 7-seat configurations, making it ideal for larger families or group travel.'},
            {title:'Interior Comfort', description:'High-quality materials and spacious cabin layout ensure passenger comfort. Features like leather upholstery, adjustable seating, and climate control enhance the overall experience.'}
        ],
        usageFeaturesTitle:'Technology and Infotainment',
        usageFeatures:[
            {title:'Infotainment System', description:'Equipped with a touchscreen display that includes features like navigation, Bluetooth connectivity, Apple CarPlay, and Android Auto.'},
            {title:'Audio System', description:'High-quality sound system with multiple speakers for an immersive listening experience.'},
            {title:'Safety Technologies', description:'Various models include Toyota Safety Sense, which features adaptive cruise control, lane departure alert, and pre-collision systems.'}
        ],
        otherFeaturesTitle:'Safety Features',
        otherFeatures:[
            {title:'Robust Safety Structure', description:'Built with a high-strength body to withstand impacts, along with multiple airbags for enhanced protection.'},
            {title:'Advanced Safety Systems', description:'Includes features like:',
                data:[
                    {description:'Vehicle Stability Control (VSC)'},
                    {description:'Traction Control'},
                    {description:'Hill Start Assist'},
                    {description:'Parking Sensors and a Rearview Camera'},
                ]
            }
        ]




    },
    {id:4, price:'Negotiable', rangePrice: '', name:'Lexus 350', 
        ideal_seats:4, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},		
        ],
        tableHeader:['Car Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Lexus 350 in Dubai is as follows',
        image:'/assets/lexus.jpeg',
        interialImages:[
            
            '/assets/lexus.jpeg',
            '/assets/l3501.jpeg',
            '/assets/l3502.jpeg',
        ],
        btnName:'Car',
        overviewDescription:'The Lexus RX 350 is a luxury midsize SUV (sport utility vehicle) known for its combination of comfort, performance, and advanced technology. As part of the Lexus lineup, it emphasizes quality, refinement, and a premium driving experience. The Lexus RX 350 is a well-rounded luxury SUV that excels in performance, safety, and comfort. Its blend of advanced technology, premium materials, and refined driving dynamics make it a compelling choice for those seeking a high-quality SUV (sport utility vehicle) experience.',
        keyFeaturesTitle:'Key Features',
        keyFeatures:[
            {title:'Seating Capacity', description:'Typically configured to seat five passengers, with options for a two-row or three-row layout in certain models.'},
            {title:'Interior Comfort', description:'High-quality materials, including leather upholstery and wood accents, create a luxurious atmosphere. The seats are designed for comfort and support, featuring options for heating and ventilation.'}
        ],
        usageFeaturesTitle:'Technology and Infotainment',
        usageFeatures:[
            {title:'Infotainment System', description:'Equipped with the Lexus Multimedia System, which includes a large touchscreen display, voice command, and navigation capabilities.'},
            {title:'Audio System', description:'Premium audio systems from brands like Mark Levinson offer exceptional sound quality for an immersive experience.'},
            {title:'Connectivity', description:'VIncludes Apple CarPlay, Android Auto, and Bluetooth connectivity, ensuring seamless integration with mobile devices.'}
        ],
        otherFeaturesTitle:'Safety Features',
        otherFeatures:[
            {title:'Safety Suite', description:'Equipped with Lexus Safety System+ that includes:',
                data:[
                    {description:'Pre-Collision System'},
                    {description:'Lane Departure Alert'},
                    {description:'Adaptive Cruise Control'},
                    {description:'Blind Spot Monitor'},
                ]
            }
        ]
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
        image:'/assets/tp1.jpeg',
        interialImages:[
            '/assets/tp1.jpeg',
            '/assets/tp2.jpeg',
        ],
        btnName:'Car',
        overviewDescription:'The Toyota Previa is a mid-size MPV (multi-purpose vehicle) known for its spacious interior, versatility, and family-friendly features. The Toyota Previa remains a practical choice for families seeking a spacious, reliable, and comfortable vehicle. Its combination of versatility, safety features, and Toyota’s reputation for durability make it a solid option for those in need of an MPV.',
        keyFeaturesTitle:'Key Features',
        keyFeatures:[
            {title:'Seating Capacity', description:'Typically accommodates 7 to 8 passengers, depending on the configuration, making it ideal for larger families.'},
            {title:'Interior Space', description:'Features a spacious cabin with a flexible seating layout that allows for various arrangements and ample legroom.'}
        ],
        usageFeaturesTitle:'Interior Comfort and Quality',
        usageFeatures:[
            {title:'Seating Configuration', description:'The Previa often includes removable and foldable seats, allowing for customizable cargo space and passenger comfort.'},
            {title:'Comfort Features', description:'Offers amenities like air conditioning, power windows, and optional leather upholstery to enhance the driving experience.'}
        ],
        safetyFeaturesTitle:'Safety Features',
        safteyFeatures:[
            {title:'Structural Integrity', description:'Built with a strong frame and crumple zones to protect occupants in the event of a collision.'},
            {title:'Airbags', description:'Typically equipped with multiple airbags for driver and passenger safety.'},
            {title:'Stability and Traction Control', description:'Features that enhance driving stability, particularly in adverse weather conditions'}
        ],
        otherFeaturesTitle:'Technology and Infotainment',
        otherFeatures:[
            {title:'Infotainment System', description:'Depending on the model year, features may include a touchscreen display, Bluetooth connectivity, and audio systems with multiple speakers.'},
            {title:'Safety and Connectivity', description:'Some models come equipped with advanced safety features and connectivity options for smartphones, enhancing convenience for families on the go.'}
        ]
        
        
    },
  ],
  buses: [
    {id:1, price:'Negotiable', rangePrice: '', name:'51-Seater-Luxury-Buses', 
        ideal_seats:51, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Weekly', time:'7 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater-Luxury-Buses  in Dubai is as follows',
        image:'/assets/bus1.jpg',
        interialImages:[
            '/assets/bus1.jpg',
            '/assets/51s1.jpeg',
            '/assets/51s2.jpeg',
        ],
        btnName:'Bus',
        overviewDescription:'51-seater luxury buses are designed for comfortable long-distance travel, catering to groups such as tourists, corporate clients, and event attendees. They blend comfort, safety, and amenities to enhance the travel experience.',
        keyFeaturesTitle:'Key Features',
        safetyFeaturesTitle:'Safety Features',
        usageFeaturesTitle:'Usage Scenarios',
        keyFeatures:[
            {title:'Seating Configuration', description:'Typically arranged in a 2+2 or 1+2 layout to maximize space andcomfort'},
            {title:'Reclining Seats', description:'Often equipped with adjustable recline features and footrests.'},
            {title:'Climate Control', description:'Air conditioning systems to maintain a comfortable environment.'},
            {title:'Onboard Facilities', data:[{description:'Overhead storage'}, {description:'Reading lights'}, {description:'USB charging ports'}]}
        ],
        safteyFeatures:[
            {title:'Advanced Braking System', description:'Includes ABS (Anti-lock Braking System) and EBS (Electronic Braking System).'},
            {title:'Emergency Exits', description:'Clearly marked and easily accessible.'},
            {title:'Seat Belts', description:'Equipped with seat belts for all passengers to ensure safety during travel.'},
        ],
        usageFeatures:[
            {title:'Tourism', description:'Ideal for sightseeing tours, providing a comfortable and spacious environment for passengers.'},
            {title:'Corporate Transport', description:'Suitable for employee shuttles, meetings, and corporate events.'},
            {title:'Private Hire', description:'Popular for weddings, family outings, and group events.'},
        ]

    },
    {id:2, price:'Negotiable', rangePrice: '', name:'35 Seater Luxury-Buses', 
        ideal_seats:35, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 35 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},		
            

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 35 Seater Luxury-Buses  in Dubai is as follows',
        image:'/assets/bus2.jpg',
        interialImages:[
            '/assets/bus2.jpg',
            '/assets/35s3.jpeg',
            '/assets/35s1.jpeg',
            '/assets/35s2.jpeg',
        ],
        btnName:'Bus',
        overviewDescription:'Yutong is a well-known manufacturer in the bus industry, recognized for producing high-quality vehicles that blend luxury, comfort, and performance. The 35-seater luxury bus from Yutong is designed for various transportation needs, including tourism, corporate travel, and private hire.',
        keyFeaturesTitle:'Key Features',
        safetyFeaturesTitle:'Safety Features',
        usageFeaturesTitle:'Usage Scenarios',
        keyFeatures:[
            {title:'Seating Configuration', description:'Typically arranged in a 2+2 or 1+2 layout to maximize space and comfort.'},
            {title:'Reclining Seats', description:'Often equipped with adjustable recline features and footrests.'},
            {title:'Climate Control', description:'Air conditioning systems to maintain a comfortable environment.'},
            {title:'Onboard Facilities', data:[{description:'Overhead storage'}, {description:'Reading lights'}, {description:'USB charging ports'}]}
        ],
        safteyFeatures:[
            {title:'Advanced Braking System', description:'Includes ABS (Anti-lock Braking System) and EBS (Electronic Braking System).'},
            {title:'Emergency Exits', description:'Clearly marked and easily accessible.'},
            {title:'Seat Belts', description:'Equipped with seat belts for all passengers to ensure safety during travel.'},
        ],
        usageFeatures:[
            {title:'Tourism', description:'Ideal for sightseeing tours, providing a comfortable and spacious environment for passengers.'},
            {title:'Corporate Transport', description:'Suitable for employee shuttles, meetings, and corporate events.'},
            {title:'Private Hire', description:'Popular for weddings, family outings, and group events.'},
        ]
    },
    {id:5, price:'Negotiable', rangePrice: '', name:'22-Seater Coaster', 
        ideal_seats:22, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 22 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},		
            

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 22-Seater Coaster in Dubai is as follows',
        image:'/assets/bus3.jpg',
        interialImages:[
            '/assets/bus3.jpg',
            '/assets/22s1.jpeg',
            '/assets/22s2.jpeg',
        ],
        btnName:'Bus',
        overviewDescription:'The 22-seater Coaster bus is a versatile and compact vehicle designed for group transportation, commonly used for tourism, corporate shuttles, school trips, and private hire. Known for its durability and comfort, the Coaster is a popular choice for both operators and passengers. The 22-seater Coaster bus offers a perfect blend of comfort, safety, and efficiency, making it an excellent choice for various group transportation needs.',
        keyFeaturesTitle:'Key Features',
        safetyFeaturesTitle:'Safety Features',
        usageFeaturesTitle:'Usage Scenarios',
        keyFeatures:[
            {title:'Seating Configuration', description:'Designed to comfortably seat 22 passengers with a 2+2 seating arrangement, maximizing space and comfort.'},
            {title:'Reclining Seats', description:'Features adjustable reclining seats that enhance passenger comfort during journeys.'},
            {title:'Interior Amenities', 
                data:[
                    {title:'Air Conditioning', description:'Equipped with effective climate control to ensure a comfortable environment.'},
                    {title:'Entertainment Options', description:'Often includes audio systems and monitors for passenger entertainment.'},
                    {title:'Storage Compartments', description:'Overhead storage and under-seat compartments for personal belongings.'},
                ]
            },
        ],
        safteyFeatures:[
            {title:'Advanced Braking System', description:'Includes ABS (Anti-lock Braking System) and EBS (Electronic Braking System).'},
            {title:'Emergency Exits', description:'Clearly marked and easily accessible.'},
            {title:'Seat Belts', description:'Equipped with seat belts for all passengers to ensure safety during travel.'},
        ],
        usageFeatures:[
            {title:'Tourism', description:'Ideal for sightseeing tours, providing a comfortable and spacious environment for passengers.'},
            {title:'Corporate Transport', description:'Suitable for employee shuttles, meetings, and corporate events.'},
            {title:'Private Hire', description:'Popular for weddings, family outings, and group events.'},
        ]

    },
  ],
  hiace: [
    {id:1, price:'Negotiable', rangePrice: '', name:'Mercedes Sprinter', 
        ideal_seats:7, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 7 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},		
            

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a Mercedes Sprinter  in Dubai is as follows',
        image:'/assets/hiace1.jpg',
        interialImages:[
            
            '/assets/sprinter2.jpg',
            '/assets/sp1.jpeg',
            '/assets/sp2.jpeg',
            '/assets/sprinter3.jpg',
        ],
        btnName:'Hiace',
        overviewDescription:'The Mercedes Sprinter is a versatile commercial van produced by Mercedes-Benz. It is well-known for its durability, performance, and a wide range of configurations. The Mercedes Sprinter is a highly regarded choice in the commercial vehicle market, combining practicality, advanced technology, and a reputation for quality.',
        keyFeaturesTitle:'Technology and Features',
        keyFeatures:[
            {title:'Infotainment System', description:'Typically includes a touchscreen interface, Bluetooth connectivity, and navigation options.'},
            {title:'Safety Features:', description:'Advanced safety systems like collision prevention, lane-keeping assist, and adaptive cruise control.'},
            {title:'Customization', description:'Options for shelving, racks, and other cargo management solutions.'}
        ],
    },
    {id:2, price:'Negotiable', rangePrice: '', name:'15-Seater Hiace (HiRoof)', 
        ideal_seats:15, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'Negotiable', title:'Monthly', time:'30 Days'},	
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},
            {price:'Negotiable', title:'Per Day', time:'10 Hrs'},	
            {price:'Negotiable', title:'Airport Transfer', time:'N/A'},	
            {price:'Negotiable', title:'Point to Point Transfer ', time:'N/A'},		
            

        ],
        tableHeader:['Hiace Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 15-Seater Hiace (HiRoof) in Dubai is as follows',
        image:'/assets/hiace3.jpeg',
        interialImages:[
            
            '/assets/hiace3.jpeg',
            '/assets/15s1.jpeg',
            '/assets/15s3.jpeg',
            '/assets/15s2.jpeg',
        ],
        btnName:'Hiace',
        overviewDescription:'The Toyota Hiace is a popular van known for its reliability and spaciousness. The HiRoof variant offers increased headroom, making it ideal for passenger transport. The 15-Seater Hiace (HiRoof) is a versatile, reliable, and spacious option for passenger transport, making it a favorite among both commercial and private users.',
        keyFeaturesTitle:'Technology and Features',
        keyFeatures:[
            {title:'Infotainment System', description:'Typically includes a touchscreen display, Bluetooth connectivity, USB ports, and optional navigation.'},
            {title:'Safety Features', description:'Equipped with airbags, anti-lock braking system (ABS), stability control, and rear parking sensors.'},
            {title:'Comfort Features', description:'Air conditioning for passenger comfort, adjustable seats, and ample storage pockets'}
        ],
        safetyFeaturesTitle:'Use Cases',
        safteyFeatures:[
            {description:'Commonly used for school transport, shuttle services, and as family vehicles. Also popular among businesses for transporting clients or staff.'}
        ]

    },
  ],
};