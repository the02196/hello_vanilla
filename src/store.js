//1. configureStore,createSlice import 해주기

import {configureStore, createSlice} from "@reduxjs/toolkit" ;


let user = createSlice({
    name: "user", //변수명과 똑같이 만들어주면 안헷갈림
    initialState: {
        loggedIn : false,
        data: null,
        uid: null
    },
    reducers:{
        logIn:(state,action) =>{
            state.loggedIn = true;
            state.uid= action.payload;

        },// 데이터를 넘기는 방법은 action,payload는 보내진 어떤 데이터가 다 들어오는 redux에서 제공하는 기능임

        loggedIn :(state,action)=>{
            state.loggedIn = true;
            state.data = action.payload;
        },
        logOut:(state)=>{
            state.loggedIn = false;
            state.data = null;
            state.uid = null;
        }
        
    }
    
})

let dark = createSlice({
    name: "dark",
    initialState :"light",
    reducers:{
        toggleTheme : (state) => state === "light" ? "dark" :"light"
    }
})

export const{logIn, loggedIn, logOut} = user.actions;
export const{toggleTheme} = dark.actions;


let fruit = createSlice({
    name: "fruit",
    initialState:"망고"
})


export default configureStore({
    reducer:{
        user : user.reducer,
        fruit : fruit.reducer,
        dark : dark.reducer
        
    }
    //장바구니,로그인 데이터 정보를 계속 가지고 있어야 되는 경우에 리덕스를 사용함
    //리덕스,props의 차이? props는 한단계 정도는 사용하는게 좋지만 여러단계를 거쳐야하는경우는 리덕스가 좋음. 삼성에서는 리덕스를 사용안함....
})