import useStore from "@/Store/store"

const useZustandServices = ()=>{

    const detailsData =  useStore((state)=> state.detailsData)
    const settingDetailsData =  useStore((state)=> state.settingDetailsData)
    



    return { settingDetailsData, detailsData}

}


export default useZustandServices