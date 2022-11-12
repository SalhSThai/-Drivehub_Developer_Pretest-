import { createSlice } from "@reduxjs/toolkit";
import { fetchCarApi } from "api/carApi";
import { fetchDiscountApi } from "api/discountApi";


const CarSlice = createSlice({
    name: 'car',
    initialState: { carlist: [], cart: [], total: 0, discount: 0, grandTotal: 0, discountCoupon: [], discountObj: {} },
    reducers: {
        fetchCarRedux: (state, action) => {
            state.carlist = action.payload;
        },
        addCart: (state, action) => {
            if (state.cart.length === 0) { localStorage.setItem('CART_TEMP', JSON.stringify([])); }
            const itemIndex = state.cart.findIndex(item => item.sys.id === action.payload.sys.id);

            if (itemIndex === -1) {
                const temp = [...JSON.parse(localStorage.getItem('CART_TEMP'))];
                const newItem = structuredClone(action.payload);
                newItem.fields.amount = 1
                temp.push(newItem);
                localStorage.setItem('CART_TEMP', JSON.stringify(temp));
                state.total += newItem.fields.price
            }
            else {
                state.cart[itemIndex].fields.amount += 1
                localStorage.setItem('CART_TEMP', JSON.stringify(state.cart));
                state.total += state.cart[itemIndex]?.fields?.price;
            }
            state.cart = JSON.parse(localStorage.getItem('CART_TEMP'));

        },
        fetchCart: (state, action) => {
            state.cart = JSON.parse(localStorage.getItem('CART_TEMP')) ?? [];
            state.total = state.cart.reduce((acc, i) => acc += i.fields.price*i.fields.amount, 0);
        },
        subCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.sys.id === action.payload.sys.id);

            if (state.cart[itemIndex].fields.amount === 1) {
                state.total -= state.cart[itemIndex]?.fields?.price ?? 0 ;
                const cloneCart = state.cart.filter((item, index) => item.sys.id !== action.payload.sys.id);
                state.cart = cloneCart
                localStorage.setItem('CART_TEMP', JSON.stringify(cloneCart));

            }
            else {
                state.cart[itemIndex].fields.amount -= 1
                localStorage.setItem('CART_TEMP', JSON.stringify(state.cart));
                state.total -= state.cart[itemIndex]?.fields?.price ?? 0;

            }

        },
        setTotalRedux: (state, action) => {
            state.total = action.payload
        },
        setDiscountRedux: (state, action) => {
            state.discount = -action.payload
        },
        setGrandTotalRedux: (state, action) => {
            state.grandTotal = action.payload
        },
        setDiscountCouponRedux: (state, action) => {
            state.discountCoupon = action.payload
        },
        setDiscountObjRedux: (state, action) => {
            state.discountObj = action.payload
        },
    }
})

export const thunkCarlist = () => async dispatch => {
    try {
        const res = await fetchCarApi();
        dispatch(fetchCarRedux(res.data.items));

    } catch (error) {
        console.log(error);
    }
}
export const thunkFetchDiscount = () => async dispatch => {
    try {
        const res = await fetchDiscountApi();
        const coupon = res.data.items.map(i => i.fields.code)
        dispatch(setDiscountCouponRedux(coupon));
        dispatch(setDiscountObjRedux(res.data))
    } catch (error) {
        console.log(error);
    }
}
export default CarSlice.reducer
const { fetchCarRedux, addCart, fetchCart, subCart, setTotalRedux, setDiscountRedux, setGrandTotalRedux, setDiscountCouponRedux, setDiscountObjRedux } = CarSlice.actions;
export { fetchCarRedux, addCart, fetchCart, subCart, setTotalRedux, setDiscountRedux, setGrandTotalRedux, setDiscountCouponRedux, setDiscountObjRedux }