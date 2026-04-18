'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/dist/server/api-utils"

export const createCamps = async (prevState, formData)=> {
    await new Promise((resolve)=>setInterval(resolve, 1000))
    // const title = formData.get('title')
    // const location = formData.get('location')
    const rawData = Object.fromEntries(formData)
    console.log(rawData)
    revalidatePath('/camp')
    // redirect('/')
    return 'create camp success!'
}

export const fetchCamp = async ()=> {
    const camps = [
        {id:1, title: 'โคราช'},
        {id:2, title: 'หัวหิน'},
        {id:3, title: 'กรุงเทพ'},
    ]
    return camps
}