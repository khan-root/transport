const zustandServices = (set, get) => ({

    detailsData:{},


    settingDetailsData:(data)=>{
        set({detailsData: data})
    }


})


export default zustandServices