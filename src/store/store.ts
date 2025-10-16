import { create } from 'zustand'
export type view = "home"|"profile"|"settings"|"history"|"DailySaving"|"transaction"|"setting"|"userProfile"|"notification"|"contactUs" |"my-points";
type Store = {
  open:view ,
  setOpen: (open: view) => void
}

type Editmenu={
    menu:boolean,
    showEditMenu:(menu:boolean)=>void
}
type Price={
  price:number,
  setPrice:(price:number)=>void
}

// navigation store

export const Navigation = create<Store>()((set) => ({
  open: "home",
  setOpen: (open) => set({open}),
}))


// Edit menu store

export const showeditMEnu = create<Editmenu>()((set) => ({
  menu: false,
  showEditMenu: (menu) => set({menu}),
}))


export const Price= create<Price>()((set)=>({
  price:0,
  setPrice:(price)=>set({price})
}))