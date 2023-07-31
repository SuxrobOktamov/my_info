import { create } from "zustand";
import { data, month, years, addDataYear, addDataMonth } from "../data";

const useData = create((set) => ({
    data: data,
    month: month,
    years: years,
    monthOne: [{
        id: Math.random()*1000,
        completed: false,
        name: 'Arcade',
        title: 9,
        class: 'active',
        month: 'Monthly'
      }],
    yearsOne:[{
        id: Math.random()*1000,
        completed: false,
        name: 'Arcade',
        title: 90,
        class: 'active',
        sale: '2 months free',
        years: 'Yearsly'
      }],
    addDataYear: addDataYear,
    addDataMonth: addDataMonth,
    dataYear: [],
    dataMonth: [],
    isBuy: false,
    erorHandle : (id) => set((state)=> ({...state.data.map(item => {
        if(item.id === id) {item.completed = true;};
        return item;
    })})),
    successHandle: (id) => set((state)=> ({...state.data.map(item => {
        if(item.id === id) {item.completed = false};
        return item;
    })})),
    changBuyHandle: () => set((state) => ({isBuy: !state.isBuy})),
    changePriceMonth: (id) => set((state) => ({month:state.month.map((item) => {
        if(item.id === id) {item.class = 'active'}else {item.class = 'none'};
        return item;
    })})),
    changePriceYears: (id) => set((state) => ({years: state.years.map((item) => {
        if(item.id === id) {item.class = 'active'}else {item.class = 'none'};
        return item;
    })})),
    checkMonth: (id) => set((state) => ({...state.addDataMonth.map((month) => {
        if(month.id === id) {month.completed = !month.completed};
        return month;
    })})),
    checkYear: (id) => set((state) => ({...state.addDataYear.map((month) => {
        if(month.id === id) {month.completed = !month.completed};
        return month;
    })})),
    changeMonth: (id) => set((state) => ({monthOne: state.month.filter((item) => item.id === id)})),
    changeYear: (id) => set((state) => ({yearsOne: state.years.filter((item) => item.id === id)})),
    addYears: () => set((state) => ({dataYear: state.addDataYear.filter((item) => item.completed)})),
    addMonths: () => set((state) => ({dataMonth: state.addDataMonth.filter((item) => item.completed)}))
}));

export default useData;