import {devtools } from 'zustand/middleware'
import { create } from 'zustand';
import zustandServices from '@/services/__zustandServices';


const useStore = create(devtools((set, get)=>({
    ...zustandServices(set, get),
    

})))

export default useStore